import type { Metadata } from "next";
import BookDashboard from "./BookDashboard";

export const metadata: Metadata = {
  title: "Reading Dashboard",
  description:
    "Track your reading progress, rate books, and view your reading statistics.",
};

export default function DashboardPage() {
  return <BookDashboard />;
}
