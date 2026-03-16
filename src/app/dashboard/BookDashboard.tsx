"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// ─── Types ──────────────────────────────────────────────────

interface Book {
  id: string;
  title: string;
  author: string;
  rating: number;
  dateAdded: string;
  status: "reading" | "completed" | "want-to-read";
  coverUrl: string;
  pages: number;
  pagesRead: number;
}

type SortOption = "recent" | "title" | "rating";

// ─── Default Books ──────────────────────────────────────────

const DEFAULT_BOOKS: Book[] = [
  {
    id: "1",
    title: "The Last Economy",
    author: "Unknown Author",
    rating: 0,
    dateAdded: new Date().toISOString().split("T")[0],
    status: "want-to-read",
    coverUrl: "",
    pages: 0,
    pagesRead: 0,
  },
  {
    id: "2",
    title: "Dune",
    author: "Frank Herbert",
    rating: 5,
    dateAdded: "2025-11-15",
    status: "completed",
    coverUrl: "",
    pages: 688,
    pagesRead: 688,
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    rating: 5,
    dateAdded: "2025-12-01",
    status: "completed",
    coverUrl: "",
    pages: 496,
    pagesRead: 496,
  },
  {
    id: "4",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4,
    dateAdded: "2026-01-10",
    status: "completed",
    coverUrl: "",
    pages: 180,
    pagesRead: 180,
  },
  {
    id: "5",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    rating: 4,
    dateAdded: "2026-02-01",
    status: "reading",
    coverUrl: "",
    pages: 443,
    pagesRead: 280,
  },
  {
    id: "6",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    rating: 5,
    dateAdded: "2026-02-20",
    status: "completed",
    coverUrl: "",
    pages: 193,
    pagesRead: 193,
  },
];

// ─── Helpers ────────────────────────────────────────────────

const STORAGE_KEY = "reading-dashboard-books";

function loadBooks(): Book[] {
  if (typeof window === "undefined") return DEFAULT_BOOKS;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return DEFAULT_BOOKS;
}

function saveBooks(books: Book[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

async function fetchCoverUrl(title: string, author: string): Promise<string> {
  try {
    const query = encodeURIComponent(`${title} ${author}`.trim());
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${query}&limit=1`
    );
    if (!res.ok) return "";
    const data = await res.json();
    const coverId = data.docs?.[0]?.cover_i;
    if (coverId) {
      return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
    }
  } catch {
    // ignore network errors
  }
  return "";
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// ─── Sub-components ─────────────────────────────────────────

function StarRating({
  rating,
  onRate,
  size = "sm",
}: {
  rating: number;
  onRate?: (r: number) => void;
  size?: "sm" | "md";
}) {
  const sizeClass = size === "md" ? "w-5 h-5" : "w-4 h-4";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate?.(star)}
          disabled={!onRate}
          className={`${sizeClass} ${onRate ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform`}
          aria-label={`${star} star${star !== 1 ? "s" : ""}`}
        >
          <svg viewBox="0 0 20 20" fill={star <= rating ? "#2d6f73" : "none"} stroke="#2d6f73" strokeWidth="1.5">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

function BookCover({ book }: { book: Book }) {
  if (book.coverUrl) {
    return (
      <Image
        src={book.coverUrl}
        alt={`Cover of ${book.title}`}
        width={128}
        height={192}
        className="rounded-lg object-cover w-full h-full"
        unoptimized
      />
    );
  }
  // Fallback: stylized placeholder
  return (
    <div className="w-full h-full rounded-lg bg-accent/10 flex items-center justify-center p-2">
      <svg className="w-10 h-10 text-accent/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    </div>
  );
}

function StatusBadge({ status }: { status: Book["status"] }) {
  const styles = {
    reading: "bg-accent/15 text-accent",
    completed: "bg-green-100 text-green-800",
    "want-to-read": "bg-amber-100 text-amber-800",
  };
  const labels = {
    reading: "Reading",
    completed: "Completed",
    "want-to-read": "Want to Read",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

// ─── Hero SVG (books on a shelf — no wine glass) ────────────

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto" aria-hidden="true">
      {/* Shelf */}
      <rect x="40" y="160" width="320" height="8" rx="2" fill="#2d6f73" opacity="0.2" />
      {/* Book 1 - tall teal */}
      <rect x="70" y="60" width="30" height="100" rx="3" fill="#2d6f73" opacity="0.7" />
      <rect x="74" y="70" width="22" height="3" rx="1" fill="#f5ecdc" opacity="0.6" />
      <rect x="74" y="78" width="16" height="2" rx="1" fill="#f5ecdc" opacity="0.4" />
      {/* Book 2 - medium warm */}
      <rect x="105" y="80" width="35" height="80" rx="3" fill="#556270" opacity="0.5" />
      <rect x="110" y="90" width="25" height="3" rx="1" fill="#f5ecdc" opacity="0.5" />
      {/* Book 3 - short accent */}
      <rect x="145" y="100" width="28" height="60" rx="3" fill="#2d6f73" opacity="0.4" />
      {/* Book 4 - tall dark */}
      <rect x="178" y="50" width="32" height="110" rx="3" fill="#1a2430" opacity="0.3" />
      <rect x="183" y="62" width="22" height="3" rx="1" fill="#f5ecdc" opacity="0.5" />
      <rect x="183" y="70" width="18" height="2" rx="1" fill="#f5ecdc" opacity="0.3" />
      {/* Book 5 - medium teal */}
      <rect x="215" y="75" width="30" height="85" rx="3" fill="#2d6f73" opacity="0.55" />
      <rect x="220" y="86" width="20" height="3" rx="1" fill="#f5ecdc" opacity="0.5" />
      {/* Book 6 - leaning */}
      <g transform="rotate(-8, 270, 160)">
        <rect x="255" y="70" width="28" height="90" rx="3" fill="#556270" opacity="0.35" />
      </g>
      {/* Open book on right */}
      <g transform="translate(300, 120)">
        <path d="M0,40 Q20,-5 40,0 L40,35 Q20,30 0,40Z" fill="#2d6f73" opacity="0.2" />
        <path d="M40,0 Q60,-5 80,40 L80,40 Q60,30 40,35Z" fill="#2d6f73" opacity="0.15" />
        <line x1="8" y1="20" x2="32" y2="13" stroke="#2d6f73" strokeWidth="1" opacity="0.2" />
        <line x1="8" y1="27" x2="30" y2="20" stroke="#2d6f73" strokeWidth="1" opacity="0.15" />
        <line x1="48" y1="13" x2="72" y2="20" stroke="#2d6f73" strokeWidth="1" opacity="0.2" />
        <line x1="48" y1="20" x2="70" y2="27" stroke="#2d6f73" strokeWidth="1" opacity="0.15" />
      </g>
      {/* Reading glasses */}
      <g transform="translate(55, 140)" opacity="0.25">
        <circle cx="0" cy="0" r="8" fill="none" stroke="#1a2430" strokeWidth="1.5" />
        <circle cx="20" cy="0" r="8" fill="none" stroke="#1a2430" strokeWidth="1.5" />
        <path d="M8,0 Q10,-3 12,0" fill="none" stroke="#1a2430" strokeWidth="1.5" />
        <line x1="-8" y1="-2" x2="-15" y2="-5" stroke="#1a2430" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

// ─── Main Dashboard Component ───────────────────────────────

export default function BookDashboard() {
  const [books, setBooks] = useState<Book[]>([]);
  const [mounted, setMounted] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("recent");
  const [filterStatus, setFilterStatus] = useState<"all" | Book["status"]>("all");
  const [isLoadingCover, setIsLoadingCover] = useState(false);

  // Form state
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newStatus, setNewStatus] = useState<Book["status"]>("want-to-read");
  const [newPages, setNewPages] = useState("");

  useEffect(() => {
    const loaded = loadBooks();
    setBooks(loaded);
    setMounted(true);
  }, []);

  // Auto-fetch covers for books without them
  useEffect(() => {
    if (!mounted) return;
    let cancelled = false;

    async function fetchMissingCovers() {
      const booksNeedingCovers = books.filter((b) => !b.coverUrl);
      if (booksNeedingCovers.length === 0) return;

      const updated = [...books];
      let changed = false;

      for (const book of booksNeedingCovers) {
        if (cancelled) break;
        const url = await fetchCoverUrl(book.title, book.author);
        if (url && !cancelled) {
          const idx = updated.findIndex((b) => b.id === book.id);
          if (idx !== -1) {
            updated[idx] = { ...updated[idx], coverUrl: url };
            changed = true;
          }
        }
      }

      if (changed && !cancelled) {
        setBooks(updated);
        saveBooks(updated);
      }
    }

    fetchMissingCovers();
    return () => { cancelled = true; };
  }, [mounted, books]);

  const updateBooks = useCallback((newBooks: Book[]) => {
    setBooks(newBooks);
    saveBooks(newBooks);
  }, []);

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setIsLoadingCover(true);

    const coverUrl = await fetchCoverUrl(newTitle.trim(), newAuthor.trim());

    const book: Book = {
      id: generateId(),
      title: newTitle.trim(),
      author: newAuthor.trim() || "Unknown Author",
      rating: 0,
      dateAdded: new Date().toISOString().split("T")[0],
      status: newStatus,
      coverUrl,
      pages: parseInt(newPages) || 0,
      pagesRead: 0,
    };

    updateBooks([book, ...books]);
    setNewTitle("");
    setNewAuthor("");
    setNewStatus("want-to-read");
    setNewPages("");
    setShowAddForm(false);
    setIsLoadingCover(false);
  };

  const handleDeleteBook = (id: string) => {
    updateBooks(books.filter((b) => b.id !== id));
  };

  const handleRateBook = (id: string, rating: number) => {
    updateBooks(books.map((b) => (b.id === id ? { ...b, rating } : b)));
  };

  const handleStatusChange = (id: string, status: Book["status"]) => {
    updateBooks(
      books.map((b) => {
        if (b.id !== id) return b;
        const pagesRead = status === "completed" ? b.pages : b.pagesRead;
        return { ...b, status, pagesRead };
      })
    );
  };

  // ── Derived data ──

  const filteredBooks =
    filterStatus === "all"
      ? books
      : books.filter((b) => b.status === filterStatus);

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === "recent") return b.dateAdded.localeCompare(a.dateAdded);
    if (sortBy === "title") return a.title.localeCompare(b.title);
    return b.rating - a.rating;
  });

  const completedBooks = books.filter((b) => b.status === "completed");
  const readingBooks = books.filter((b) => b.status === "reading");
  const totalPages = completedBooks.reduce((sum, b) => sum + b.pages, 0);
  const avgRating =
    completedBooks.length > 0
      ? completedBooks.reduce((sum, b) => sum + b.rating, 0) / completedBooks.length
      : 0;

  const ratingDistribution = [5, 4, 3, 2, 1].map((r) => ({
    stars: r,
    count: books.filter((b) => b.rating === r).length,
  }));
  const maxRatingCount = Math.max(...ratingDistribution.map((r) => r.count), 1);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="haze-teal relative overflow-hidden bg-cream py-12 sm:py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <p className="text-accent font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] mb-3">
              Personal Library
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-text mb-4">
              Reading Dashboard
            </h1>
            <p className="text-muted text-lg max-w-xl mx-auto mb-8">
              Track your reading, discover patterns, and keep your library organized.
            </p>
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* ── Recent Books ── */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text">
                Recent Books
              </h2>
              <p className="text-muted text-sm mt-1">
                {books.length} book{books.length !== 1 ? "s" : ""} in your library
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Filter */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)}
                className="text-sm border border-border rounded-lg px-3 py-1.5 bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="all">All</option>
                <option value="reading">Reading</option>
                <option value="completed">Completed</option>
                <option value="want-to-read">Want to Read</option>
              </select>
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="text-sm border border-border rounded-lg px-3 py-1.5 bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="recent">Most Recent</option>
                <option value="title">By Title</option>
                <option value="rating">By Rating</option>
              </select>
              {/* Add button */}
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold bg-accent text-text-on-ink hover:bg-accent-hover transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                </svg>
                Add Book
              </button>
            </div>
          </div>

          {/* ── Add Book Form ── */}
          {showAddForm && (
            <form
              onSubmit={handleAddBook}
              className="mb-8 p-6 rounded-xl border border-border bg-surface"
            >
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-text mb-4">
                Add a New Book
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="book-title" className="block text-sm font-medium text-text mb-1">
                    Title *
                  </label>
                  <input
                    id="book-title"
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-cream text-text focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g. The Last Economy"
                  />
                </div>
                <div>
                  <label htmlFor="book-author" className="block text-sm font-medium text-text mb-1">
                    Author
                  </label>
                  <input
                    id="book-author"
                    type="text"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-cream text-text focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g. Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="book-status" className="block text-sm font-medium text-text mb-1">
                    Status
                  </label>
                  <select
                    id="book-status"
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value as Book["status"])}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-cream text-text focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="want-to-read">Want to Read</option>
                    <option value="reading">Reading</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="book-pages" className="block text-sm font-medium text-text mb-1">
                    Pages
                  </label>
                  <input
                    id="book-pages"
                    type="number"
                    min="0"
                    value={newPages}
                    onChange={(e) => setNewPages(e.target.value)}
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-cream text-text focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="e.g. 350"
                  />
                </div>
              </div>
              <p className="text-muted text-xs mt-3">
                A cover thumbnail will be automatically fetched from Open Library.
              </p>
              <div className="flex gap-3 mt-4">
                <button
                  type="submit"
                  disabled={isLoadingCover}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-accent text-text-on-ink hover:bg-accent-hover transition-colors disabled:opacity-50"
                >
                  {isLoadingCover ? "Fetching cover..." : "Add Book"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-muted hover:text-text transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* ── Book Grid ── */}
          {sortedBooks.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-12 h-12 mx-auto text-muted/30 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <p className="text-muted">No books match this filter.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedBooks.map((book) => (
                <div
                  key={book.id}
                  className="rounded-xl border border-border bg-surface p-4 card-hover flex gap-4"
                >
                  {/* Cover */}
                  <div className="w-20 h-28 flex-shrink-0">
                    <BookCover book={book} />
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-text text-sm leading-tight truncate">
                      {book.title}
                    </h3>
                    <p className="text-muted text-xs mt-0.5 truncate">{book.author}</p>
                    <div className="mt-1.5">
                      <StatusBadge status={book.status} />
                    </div>
                    <div className="mt-1.5">
                      <StarRating
                        rating={book.rating}
                        onRate={(r) => handleRateBook(book.id, r)}
                      />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <select
                        value={book.status}
                        onChange={(e) => handleStatusChange(book.id, e.target.value as Book["status"])}
                        className="text-xs border border-border rounded px-1.5 py-0.5 bg-cream text-text focus:outline-none focus:ring-1 focus:ring-accent"
                        aria-label={`Change status for ${book.title}`}
                      >
                        <option value="want-to-read">Want to Read</option>
                        <option value="reading">Reading</option>
                        <option value="completed">Completed</option>
                      </select>
                      <button
                        onClick={() => handleDeleteBook(book.id)}
                        className="text-muted/50 hover:text-red-500 transition-colors ml-auto"
                        aria-label={`Remove ${book.title}`}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Reading Statistics ── */}
      <section className="bg-surface2 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-8 text-center">
            Reading Statistics
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-border bg-surface p-5 text-center">
              <p className="text-3xl font-bold text-accent">{books.length}</p>
              <p className="text-muted text-sm mt-1">Total Books</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5 text-center">
              <p className="text-3xl font-bold text-accent">{completedBooks.length}</p>
              <p className="text-muted text-sm mt-1">Completed</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5 text-center">
              <p className="text-3xl font-bold text-accent">{readingBooks.length}</p>
              <p className="text-muted text-sm mt-1">Currently Reading</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5 text-center">
              <p className="text-3xl font-bold text-accent">
                {totalPages > 0 ? totalPages.toLocaleString() : "—"}
              </p>
              <p className="text-muted text-sm mt-1">Pages Read</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="rounded-xl border border-border bg-surface p-5 text-center">
              <p className="text-3xl font-bold text-accent">
                {avgRating > 0 ? avgRating.toFixed(1) : "—"}
              </p>
              <p className="text-muted text-sm mt-1">Average Rating</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5 text-center">
              <p className="text-3xl font-bold text-accent">
                {books.filter((b) => b.status === "want-to-read").length}
              </p>
              <p className="text-muted text-sm mt-1">Want to Read</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rating Distribution ── */}
      <section className="bg-cream py-12 sm:py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-8 text-center">
            Rating Distribution
          </h2>
          <div className="max-w-md mx-auto space-y-3">
            {ratingDistribution.map(({ stars, count }) => (
              <div key={stars} className="flex items-center gap-3">
                <span className="text-sm font-medium text-text w-6 text-right">
                  {stars}
                </span>
                <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="flex-1 h-6 bg-surface2 rounded-full overflow-hidden border border-border">
                  <div
                    className="h-full bg-accent/70 rounded-full transition-all duration-500"
                    style={{ width: `${(count / maxRatingCount) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-muted w-6">{count}</span>
              </div>
            ))}
          </div>
          {books.filter((b) => b.rating === 0).length > 0 && (
            <p className="text-muted text-xs text-center mt-4">
              {books.filter((b) => b.rating === 0).length} book{books.filter((b) => b.rating === 0).length !== 1 ? "s" : ""} not yet rated
            </p>
          )}
        </div>
      </section>
    </>
  );
}
