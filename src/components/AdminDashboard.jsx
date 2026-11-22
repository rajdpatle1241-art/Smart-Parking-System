
import {
  ParkingSquare,
  CheckCircle2,
  CarFront,
  CalendarCheck,
  Activity,
} from "lucide-react";

function AdminDashboard({ bookings }) {
  const totalSlots = 20;

const occupiedSlots =
  6 +
  bookings.filter(
    (booking) => booking.status === "Active"
  ).length;

const studentBookings = bookings.filter(
  (booking) => booking.userRole === "Student"
).length;

const facultyBookings = bookings.filter(
  (booking) => booking.userRole === "Faculty"
).length;

const visitorBookings = bookings.filter(
  (booking) => booking.userRole === "Visitor"
).length;

const visitorRevenue = bookings
  .filter(
    (booking) =>
      booking.userRole === "Visitor" &&
      booking.paymentStatus === "Paid (Demo)"
  )
  .reduce((total, booking) => total + (booking.amount || 0), 0);

  const availableSlots = totalSlots - occupiedSlots;

  const activeBookings = bookings.filter(
    (booking) => booking.status === "Active"
  ).length;

  const stats = [
    {
      title: "Total Parking Slots",
      value: totalSlots,
      icon: ParkingSquare,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Available Slots",
      value: availableSlots,
      icon: CheckCircle2,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Occupied Slots",
      value: occupiedSlots,
      icon: CarFront,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      title: "Active Bookings",
      value: activeBookings,
      icon: CalendarCheck,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="space-y-7">
      <div>
        <p className="text-sm font-semibold text-blue-600">
          ADMINISTRATION
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Admin Dashboard
        </h1>
        <p className="mt-2 text-slate-500">
          Monitor campus parking occupancy and reservations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className={`w-fit rounded-xl p-3 ${stat.bg}`}>
                <Icon className={stat.color} size={25} />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
  <div className="rounded-2xl border border-slate-200 bg-white p-5">
    <p className="text-sm text-slate-500">Student Bookings</p>
    <h2 className="mt-2 text-3xl font-bold text-blue-600">
      {studentBookings}
    </h2>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-white p-5">
    <p className="text-sm text-slate-500">Faculty Bookings</p>
    <h2 className="mt-2 text-3xl font-bold text-purple-600">
      {facultyBookings}
    </h2>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-white p-5">
    <p className="text-sm text-slate-500">Visitor Bookings</p>
    <h2 className="mt-2 text-3xl font-bold text-orange-600">
      {visitorBookings}
    </h2>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-white p-5">
    <p className="text-sm text-slate-500">Visitor Revenue</p>
    <h2 className="mt-2 text-3xl font-bold text-green-600">
      ₹{visitorRevenue}
    </h2>
  </div>
</div>

              <p className="mt-4 text-sm text-slate-500">
                {stat.title}
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                {stat.value}
              </h2>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Parking Occupancy
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Current reservation-based occupancy
          </p>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-orange-500 transition-all"
              style={{
                width: `${(occupiedSlots / totalSlots) * 100}%`,
              }}
            />
          </div>

          <div className="mt-4 flex justify-between text-sm">
            <span className="font-medium text-orange-600">
              {Math.round((occupiedSlots / totalSlots) * 100)}% Occupied
            </span>
            <span className="font-medium text-green-600">
              {Math.round((availableSlots / totalSlots) * 100)}% Available
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <Activity className="text-blue-600" size={24} />
            <h2 className="text-xl font-bold text-slate-900">
              System Overview
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between border-b border-slate-100 pb-3">
              <span className="text-sm text-slate-500">
                Total Reservations
              </span>
              <strong>{bookings.length}</strong>
            </div>

            <div className="flex justify-between border-b border-slate-100 pb-3">
              <span className="text-sm text-slate-500">
                Cancelled Reservations
              </span>
              <strong>
                {bookings.filter(
                  (booking) => booking.status === "Cancelled"
                ).length}
              </strong>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-slate-500">
                Completed Reservations
              </span>
              <strong>
                {bookings.filter(
                  (booking) => booking.status === "Completed"
                ).length}
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">
          Recent Reservations
        </h2>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="px-3 py-3">Booking ID</th>
                <th className="px-3 py-3">Vehicle</th>
                <th className="px-3 py-3">Slot</th>
                <th className="px-3 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings.slice(0, 5).map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b border-slate-100"
                >
                  <td className="px-3 py-4 font-semibold text-slate-800">
                    {booking.id}
                  </td>
                  <td className="px-3 py-4 text-slate-600">
                    {booking.vehicle}
                  </td>
                  <td className="px-3 py-4 text-slate-600">
                    {booking.slot}
                  </td>
                  <td className="px-3 py-4">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}

              {bookings.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="py-8 text-center text-slate-500"
                  >
                    No reservations available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
