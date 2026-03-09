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
  groupPhoto?: { src: string; alt: string };
}

function MemberCard({ member }: { member: BandMember }) {
  const [imgError, setImgError] = useState(false);
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="text-center group">
      <div className="relative w-44 h-44 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden border border-border">
        {member.photo && !imgError ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 176px, 224px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-ink/10 flex items-center justify-center">
            <span className="text-muted/50 text-3xl font-[family-name:var(--font-display)] font-bold">
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function MeetTheBand({
  members,
  groupPhoto,
}: MeetTheBandProps) {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 max-w-3xl mx-auto">
        {members.map((member) => (
          <MemberCard
            key={member.name}
            member={member}
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
