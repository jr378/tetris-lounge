"use client";

import Image from "next/image";
import { useState } from "react";

interface BandMember {
  name: string;
  role: string;
  photo?: string;
}

interface MeetTheBandProps {
  members: BandMember[];
  accentColor?: "amber" | "teal";
  groupPhoto?: { src: string; alt: string };
}

function MemberCard({
  member,
  accentColor,
}: {
  member: BandMember;
  accentColor: "amber" | "teal";
}) {
  const [imgError, setImgError] = useState(false);
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const borderColor =
    accentColor === "amber"
      ? "border-tetris-accent/40"
      : "border-nowhere-accent/40";

  return (
    <div className="text-center group">
      <div
        className={`relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-4 rounded-full overflow-hidden border-2 ${borderColor}`}
      >
        {member.photo && !imgError ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 144px, 176px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-charcoal/10 flex items-center justify-center">
            <span className="text-warm-gray/50 text-3xl font-[family-name:var(--font-display)] font-bold">
              {initials}
            </span>
          </div>
        )}
      </div>
      <p className="font-semibold text-sm sm:text-base">{member.name}</p>
      <p className="text-warm-gray text-xs sm:text-sm">{member.role}</p>
    </div>
  );
}

export function MeetTheBand({
  members,
  accentColor = "teal",
  groupPhoto,
}: MeetTheBandProps) {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 max-w-3xl mx-auto">
        {members.map((member) => (
          <MemberCard
            key={member.name}
            member={member}
            accentColor={accentColor}
          />
        ))}
      </div>

      {groupPhoto && (
        <div className="mt-12 rounded-xl overflow-hidden">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={groupPhoto.src}
              alt={groupPhoto.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      )}
    </div>
  );
}
