
import {
  CarFront,
  Users,
  ParkingSquare,
  TrendingUp,
  Clock,
  MapPin,
  ArrowUpRight,
  Search,
} from "lucide-react";

const stats = [
  {
    title: "Total Parking Slots",
    value: "120",
    detail: "Across campus",
    icon: ParkingSquare,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Available Slots",
    value: "38",
    detail: "Ready to park",
    icon: CarFront,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Occupied Slots",
    value: "82",
    detail: "Currently in use",
    icon: Users,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Today's Bookings",
    value: "64",
    detail: "Campus parking",
    icon: TrendingUp,
    color: "bg-purple-100 text-purple-600",
  },
];

const recentBookings = [
  { id: "PK1024", name: "Rahul Sharma", vehicle: "MH 12 AB 1234", slot: "A-12", status: "Active" },
  { id: "PK1025", name: "Priya Patil", vehicle: "MH 14 CD 5678", slot: "B-08", status: "Active" },
  { id: "PK1026", name: "Amit Deshmukh", vehicle: "MH 12 EF 9012", slot: "C-15", status: "Completed" },
  { id: "PK1027", name: "Sneha Kulkarni", vehicle: "MH 12 GH 3456", slot: "A-20", status: "Active" },
];

function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium text-blue-600">CAMPUS PARKING</p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Dashboard Overview
        </h1>
        <p className="mt-2 text-slate-500">
          Monitor parking availability and manage your campus parking.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-xl p-3 ${stat.color}`}>
                  <Icon size={23} />
                </div>
                <ArrowUpRight size={19} className="text-slate-400" />
              </div>

              <p className="mt-5 text-sm text-slate-500">{stat.title}</p>
              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                {stat.value}
              </h2>
              <p className="mt-1 text-xs text-slate-400">{stat.detail}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 xl:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Parking Availability
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Current campus parking status
              </p>
            </div>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              ● System Online
            </span>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="rounded-xl bg-green-50 p-5">
              <p className="text-sm text-green-700">Available</p>
              <p className="mt-2 text-3xl font-bold text-green-700">38</p>
              <div className="mt-3 h-2 rounded-full bg-green-200">
                <div className="h-2 w-[32%] rounded-full bg-green-500" />
              </div>
            </div>

            <div className="rounded-xl bg-orange-50 p-5">
              <p className="text-sm text-orange-700">Occupied</p>
              <p className="mt-2 text-3xl font-bold text-orange-700">82</p>
              <div className="mt-3 h-2 rounded-full bg-orange-200">
                <div className="h-2 w-[68%] rounded-full bg-orange-500" />
              </div>
            </div>

            <div className="rounded-xl bg-blue-50 p-5">
              <p className="text-sm text-blue-700">Total Capacity</p>
              <p className="mt-2 text-3xl font-bold text-blue-700">120</p>
              <div className="mt-3 h-2 rounded-full bg-blue-200">
                <div className="h-2 w-full rounded-full bg-blue-500" />
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-2">
              <MapPin size={19} className="text-blue-600" />
              <h3 className="font-semibold text-slate-800">
                Campus Parking Zone
              </h3>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["A-01", "A-02", "A-03", "A-04", "B-01", "B-02", "B-03", "B-04"].map(
                (slot, index) => (
                  <div
                    key={slot}
                    className={`rounded-lg border p-3 text-center ${
                      [0, 3, 5].includes(index)
                        ? "border-orange-200 bg-orange-50 text-orange-700"
                        : "border-green-200 bg-green-50 text-green-700"
                    }`}
                  >
                    <CarFront size={20} className="mx-auto mb-1" />
                    <p className="text-sm font-semibold">{slot}</p>
                    <p className="mt-1 text-xs">
                      {[0, 3, 5].includes(index) ? "Occupied" : "Available"}
                    </p>
                  </div>
                )
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-5 text-xs text-slate-500">
              <span>🟢 Available</span>
              <span>🟠 Occupied</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">
            Quick Information
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Parking updates
          </p>

          <div className="mt-6 space-y-5">
            <div className="flex gap-3">
              <div className="rounded-lg bg-green-100 p-2 text-green-600">
                <CarFront size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Parking available
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  38 slots are currently available.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Booking reminder
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Arrive on time for your reserved slot.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="rounded-lg bg-purple-100 p-2 text-purple-600">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Campus occupancy
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  68% of parking capacity is occupied.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-blue-600 p-5 text-white">
            <h3 className="font-semibold">Need a parking spot?</h3>
            <p className="mt-2 text-sm text-blue-100">
              Find an available slot and reserve it in advance.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
              <Search size={17} />
              Find Parking
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between p-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Recent Bookings
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Latest parking reservations
            </p>
          </div>
          <span className="text-sm font-medium text-blue-600">
            4 Records
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-6 py-4">Booking ID</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Vehicle</th>
                <th className="px-6 py-4">Slot</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="border-t border-slate-100">
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {booking.id}
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {booking.name}
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {booking.vehicle}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {booking.slot}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        booking.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
