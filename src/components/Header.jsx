
import { UserCircle, CalendarDays, LogOut } from "lucide-react";

function Header({ currentUser, onLogout }) {
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

      <div className="flex flex-wrap items-center justify-end gap-4">
        <div className="hidden items-center gap-2 text-sm text-slate-500 sm:flex">
          <CalendarDays size={18} className="text-blue-500" />
          {today}
        </div>

        <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
          <div className="rounded-full bg-blue-600 p-2 text-white">
            <UserCircle size={23} />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              {currentUser?.loginId}
            </p>
            <p className="text-xs text-slate-500">
              {currentUser?.role}
            </p>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white hover:bg-red-700"
        >
          <LogOut size={17} />
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
