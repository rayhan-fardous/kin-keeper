import Image from "next/image";
import { ChartNoAxesColumn, Clock3, House, Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f8f8] px-12 pt-3.5">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <Image
          src="/logo.png"
          alt="KeenKeeper logo"
          width={141}
          height={32}
          priority
        />

        <nav className="flex items-center gap-0.5 rounded-[10px] border border-[#e4e7ec] bg-white p-1 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] bg-[#184d3d] px-3.5 text-[12px] font-medium text-white"
          >
            <House size={13} strokeWidth={2.2} />
            Home
          </button>
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <Clock3 size={13} strokeWidth={2.1} />
            Timeline
          </button>
          <button
            type="button"
            className="inline-flex h-9 items-center gap-1.5 rounded-[7px] px-3.5 text-[12px] font-medium text-[#6b7280]"
          >
            <ChartNoAxesColumn size={13} strokeWidth={2.1} />
            Stats
          </button>
        </nav>
      </div>

      <section className="mx-auto mt-14 max-w-5xl px-8 py-12">
        <div className="text-center">
          <h1 className="mt-4 text-4xl font-semibold text-[#111827] sm:text-5xl">
            Friends to keep close in your life
          </h1>
          <p className="mx-auto mt-4 max-w-170 text-base leading-7 text-[#6b7280]">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button
            type="button"
            className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full bg-[#184d3d] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(24,77,61,0.18)] transition hover:bg-[#163d32]"
          >
            <Plus size={16} strokeWidth={3} />
            Add a Friend
          </button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#e5e7eb] bg-[#f8fafc] p-6 text-center shadow-sm">
            <p className="text-3xl font-semibold text-[#184d3d]">10</p>
            <p className="mt-4 text-xs uppercase tracking-[0.26em] text-[#6b7280]">
              Total Friends
            </p>
          </div>
          <div className="rounded-xl border border-[#e5e7eb] bg-[#f8fafc] p-6 text-center shadow-sm">
            <p className="text-3xl font-semibold text-[#184d3d]">3</p>
            <p className="mt-4 text-xs uppercase tracking-[0.26em] text-[#6b7280]">
              On Track
            </p>
          </div>
          <div className="rounded-xl border border-[#e5e7eb] bg-[#f8fafc] p-6 text-center shadow-sm">
            <p className="text-3xl font-semibold text-[#184d3d]">6</p>
            <p className="mt-4 text-xs uppercase tracking-[0.26em] text-[#6b7280]">
              Need Attention
            </p>
          </div>
          <div className="rounded-xl border border-[#e5e7eb] bg-[#f8fafc] p-6 text-center shadow-sm">
            <p className="text-3xl font-semibold text-[#184d3d]">12</p>
            <p className="mt-4 text-xs uppercase tracking-[0.26em] text-[#6b7280]">
              Interactions This Month
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
