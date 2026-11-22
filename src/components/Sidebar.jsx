
import {
  LayoutDashboard,
  CarFront,
  CalendarCheck,
  History,
  Settings,
  CircleHelp,
  ParkingSquare,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Admin Dashboard", icon: LayoutDashboard, adminOnly: true },
  { name: "Find Parking", icon: CarFront },
  { name: "My Bookings", icon: CalendarCheck },
  { name: "Parking History", icon: History },
];

function Sidebar({ activeTab, setActiveTab, currentUser }) {
  const visibleMenuItems = menuItems.filter(
    (item) => !item.adminOnly || currentUser?.role === "Admin"
  );

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-200 bg-white px-5 py-6">
      <div className="mb-10 flex items-center gap-3">
        <div className="rounded-xl bg-blue-600 p-2 text-white">
          <ParkingSquare size={25} />
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-900">ParkEase</h1>
          <p className="text-xs text-slate-500">Smart Parking System</p>
        </div>
      </div>

      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Main Menu
      </p>

      <nav className="flex-1 space-y-2">
        {visibleMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon size={19} />
              {item.name}
            </button>
          );
        })}
      </nav>

      <div className="space-y-2 border-t border-slate-200 pt-5">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-slate-100">
          <Settings size={19} />
          Settings
        </button>
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-slate-100">
          <CircleHelp size={19} />
          Help & Support
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
