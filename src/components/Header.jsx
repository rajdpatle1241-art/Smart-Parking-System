
import { Bell, Search, UserCircle, CalendarDays } from "lucide-react";

function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          MIT-ADT University
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Smart Campus Parking Management
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden items-center gap-2 text-sm text-slate-500 sm:flex">
          <CalendarDays size={18} className="text-blue-500" />
          {today}
        </div>

        <button className="relative rounded-xl border border-slate-200 p-3 text-slate-500 transition hover:bg-slate-100">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500" />
        </button>

        <div className="flex items-center gap-3 border-l border-slate-200 pl-5">
          <div className="rounded-full bg-blue-600 p-2 text-white">
            <UserCircle size={23} />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">
              Student User
            </p>
            <p className="text-xs text-slate-500">
              Campus Member
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
