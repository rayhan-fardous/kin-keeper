import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock3,
  MessageSquare,
  Phone,
  Video,
  House,
  ChartNoAxesColumn,
} from "lucide-react";
import { notFound } from "next/navigation";
import friends from "../../../data/friends.json";
import QuickCheckIn from "@/components/QuickCheckIn";
import RecentInteractions from "@/components/RecentInteractions";

const statusStyles = {
  overdue: "bg-[#EF4444] text-white",
  "almost due": "bg-[#EFAD44] text-white",
  "on-track": "bg-[#184d3d] text-white",
};

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export default async function FriendDetails({ params }) {
  const id = Number((await params).id);
  const friend = friends.find((item) => item.id === id);

  if (!friend) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f6f8f8] px-4 pb-16 pt-4 md:px-12 md:pb-24 md:pt-3.5">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between  gap-4 sm:flex-row sm:gap-0">
        <Image
          src="/logo.png"
          alt="KeenKeeper logo"
          width={141}
          height={32}
          priority
        />

        <nav className="flex items-center gap-0.5 rounded-[10px] border border-[#e5e7eb] bg-white p-1 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <Link
            href="/"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#184d3d] px-3.5 text-[12px] font-medium text-white"
          >
            <House size={13} strokeWidth={2.2} />
            Home
          </Link>
          <Link
            href="/timeline"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <Clock3 size={13} strokeWidth={2.1} />
            Timeline
          </Link>
          <Link
            href="/stats"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <ChartNoAxesColumn size={13} strokeWidth={2.1} />
            Stats
          </Link>
        </nav>
      </div>

      <section className="mx-auto mt-10 max-w-5xl">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1.95fr]">
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 sm:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-28 w-28 overflow-hidden rounded-full bg-[#f3f4f6]">
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6">
                <p className="text-2xl font-semibold text-[#111827]">
                  {friend.name}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  <span
                    className={`rounded-full px-2 py-1 text-xs uppercase font-semibold ${statusStyles[friend.status]}`}
                  >
                    {friend.status.replace("-", " ")}
                  </span>
                  {friend.tags.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#ecfdf5] px-2 py-1 text-xs uppercase font-semibold text-[#166534]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mx-auto mt-6 max-w-65 text-sm leading-6 text-[#6b7280]">
                "{friend.bio}"
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.22em] text-[#9ca3af]">
                Preferred: email
              </p>
              <p className="mt-2 text-sm font-medium text-[#111827]">
                {friend.email}
              </p>
            </div>

            <div className="mt-10 grid gap-3">
              <button className="rounded-sm border border-[#e5e7eb] bg-white py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#f8fafc]">
                Snooze 2 Weeks
              </button>
              <button className="rounded-sm border border-[#e5e7eb] bg-white py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#f8fafc]">
                Archive
              </button>
              <button className="rounded-sm border border-[#fee2e2] bg-[#fff1f2] py-3 text-sm font-semibold text-[#b91c1c] transition hover:bg-[#fee2e2]">
                Delete
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 text-center">
                <p className="text-2xl font-medium text-[#184d3d]">
                  {friend.days_since_contact}
                </p>
                <p className="mt-2 text-sm text-[#6b7280]">
                  Days Since Contact
                </p>
              </div>
              <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 text-center">
                <p className="text-2xl font-medium text-[#184d3d]">
                  {friend.goal}
                </p>
                <p className="mt-2 text-sm text-[#6b7280]">Goal (Days)</p>
              </div>
              <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 text-center">
                <p className="text-2xl font-medium text-[#184d3d]">
                  {formatDate(friend.next_due_date)}
                </p>
                <p className="mt-2 text-sm text-[#6b7280]">Next Due</p>
              </div>
            </div>

            <div className="rounded-xl border border-[#e5e7eb] bg-white p-6">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-md font-bold text-[#184d3d]">
                    Relationship Goal
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#111827]">
                    <span className="text-[#6b7280]">Connect every</span>{" "}
                    {friend.goal} days
                  </p>
                </div>
                <button className="rounded-xl border border-[#e5e7eb] bg-[#f8fafc] px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-[#eef2ff]">
                  Edit
                </button>
              </div>
            </div>

            <QuickCheckIn friend={friend} />
            <RecentInteractions friend={friend} />
          </div>
        </div>
      </section>
    </main>
  );
}
