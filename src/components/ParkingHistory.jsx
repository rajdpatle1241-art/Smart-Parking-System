
import {
  CalendarDays,
  CarFront,
  Clock,
  MapPin,
  History,
} from "lucide-react";

function ParkingHistory({ bookings }) {
  const historyBookings = bookings.filter(
    (booking) =>
      booking.status === "Completed" ||
      booking.status === "Cancelled"
  );

  return (
    <div className="space-y-7">
      <div>
        <p className="text-sm font-semibold text-blue-600">
          PARKING RECORDS
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Parking History
        </h1>
        <p className="mt-2 text-slate-500">
          Review your completed and cancelled parking reservations.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="mb-6 flex items-center gap-3">
          <History className="text-blue-600" size={25} />
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Previous Reservations
            </h2>
            <p className="text-sm text-slate-500">
              {historyBookings.length} historical records
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {historyBookings.map((booking) => (
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
                    booking.status === "Completed"
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
            </div>
          ))}

          {historyBookings.length === 0 && (
            <div className="py-12 text-center">
              <History
                size={40}
                className="mx-auto text-slate-300"
              />
              <p className="mt-3 font-semibold text-slate-700">
                No parking history yet
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Completed or cancelled bookings will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ParkingHistory;
