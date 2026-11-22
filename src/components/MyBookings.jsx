
import {
  CalendarDays,
  CarFront,
  Clock,
  MapPin,
  XCircle,
} from "lucide-react";

function MyBookings({ bookings, onCancel }) {
  const activeCount = bookings.filter(
    (booking) => booking.status === "Active"
  ).length;

  const completedCount = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  return (
    <div className="space-y-7">
      <div>
        <p className="text-sm font-semibold text-blue-600">
          RESERVATION MANAGEMENT
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          My Bookings
        </h1>
        <p className="mt-2 text-slate-500">
          View and manage your campus parking reservations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <CalendarDays className="text-blue-600" size={25} />
          <p className="mt-3 text-sm text-slate-500">Total Bookings</p>
          <h2 className="mt-1 text-3xl font-bold text-slate-900">
            {bookings.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <Clock className="text-green-600" size={25} />
          <p className="mt-3 text-sm text-slate-500">Active Bookings</p>
          <h2 className="mt-1 text-3xl font-bold text-green-600">
            {activeCount}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <CarFront className="text-purple-600" size={25} />
          <p className="mt-3 text-sm text-slate-500">Completed Bookings</p>
          <h2 className="mt-1 text-3xl font-bold text-purple-600">
            {completedCount}
          </h2>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            Reservation History
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Your parking booking details
          </p>
        </div>

        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-xl border border-slate-200 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    BOOKING ID
                  </p>
                  <h3 className="mt-1 font-bold text-slate-900">
                    {booking.id}
                  </h3>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    booking.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : booking.status === "Completed"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-3">
                  <CarFront className="text-blue-600" size={20} />
                  <div>
                    <p className="text-xs text-slate-400">Vehicle</p>
                    <p className="text-sm font-semibold text-slate-700">
                      {booking.vehicle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <div>
                    <p className="text-xs text-slate-400">Parking Slot</p>
                    <p className="text-sm font-semibold text-slate-700">
                      {booking.slot}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays className="text-blue-600" size={20} />
                  <div>
                    <p className="text-xs text-slate-400">Date</p>
                    <p className="text-sm font-semibold text-slate-700">
                      {booking.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="text-blue-600" size={20} />
                  <div>
                    <p className="text-xs text-slate-400">Time</p>
                    <p className="text-sm font-semibold text-slate-700">
                      {booking.time}
                    </p>
                  </div>
                </div>
              </div>

              {booking.status === "Active" && (
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <button
                    onClick={() => onCancel(booking.id)}
                    className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                  >
                    <XCircle size={17} />
                    Cancel Booking
                  </button>
                </div>
              )}
            </div>
          ))}

          {bookings.length === 0 && (
            <p className="py-10 text-center text-slate-500">
              No bookings found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
