
import { useState } from "react";
import {
  CarFront,
  MapPin,
  Clock,
  CalendarDays,
  CheckCircle2,
  ParkingSquare,
} from "lucide-react";

const initialSlots = Array.from({ length: 20 }, (_, index) => ({
  id: `A-${String(index + 1).padStart(2, "0")}`,
  status: [2, 5, 8, 12, 16, 18].includes(index)
    ? "Occupied"
    : "Available",
}));

function Parking({ onBooking, bookings, currentUser }) {
  const slots = initialSlots.map((slot) =>
    bookings.some(
      (booking) =>
        booking.slot === slot.id &&
        booking.status === "Active"
    )
      ? { ...slot, status: "Occupied" }
      : slot
  );
const [selectedSlot, setSelectedSlot] = useState(null);
const [vehicleNumber, setVehicleNumber] = useState("");
const [booking, setBooking] = useState(null);
const [durationHours, setDurationHours] = useState(1);

const isVisitor = currentUser?.role === "Visitor";
const parkingRate = 20;
const totalAmount = isVisitor ? durationHours * parkingRate : 0;

  const availableCount = slots.filter(
    (slot) => slot.status === "Available"
  ).length;

  const handleBooking = () => {
    if (!selectedSlot || !vehicleNumber.trim()) {
      alert("Please select a parking slot and enter your vehicle number.");
      return;
    }
    if (isVisitor) {
  const paymentConfirmed = window.confirm(
    `Visitor Parking Payment\n\nDuration: ${durationHours} hour(s)\nTotal Amount: ₹${totalAmount}\n\nConfirm simulated payment?`
  );

  if (!paymentConfirmed) {
    return;
  }
}



const newBooking = {
  id: `PK${Date.now().toString().slice(-6)}`,
  slot: selectedSlot,
  vehicle: vehicleNumber.toUpperCase(),
  date: new Date().toLocaleDateString("en-IN"),
  time: "Campus parking session",
  status: "Active",
  userId: currentUser.loginId,
  userRole: currentUser.role,
  durationHours: isVisitor ? durationHours : 0,
  amount: totalAmount,
paymentStatus: isVisitor ? "Paid (Demo)" : "Not Required",
};

setBooking(newBooking);
onBooking(newBooking);

    setSelectedSlot(null);
    setVehicleNumber("");
  };

  return (
    <div className="space-y-7">
      <div>
        <p className="text-sm font-semibold text-blue-600">
          CAMPUS PARKING
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Find Parking
        </h1>
        <p className="mt-2 text-slate-500">
          Select your preferred parking slot and reserve it.
        </p>
      </div>

      {booking && (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-green-600" size={28} />
            <div>
              <h2 className="font-bold text-green-800">
                Booking Confirmed!
              </h2>
              <p className="mt-1 text-sm text-green-700">
                Your parking slot has been reserved successfully.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <p className="text-sm text-green-800">
              Booking ID: <strong>{booking.id}</strong>
            </p>
            <p className="text-sm text-green-800">
              Parking Slot: <strong>{booking.slot}</strong>
            </p>
            <p className="text-sm text-green-800">
              Vehicle: <strong>{booking.vehicle}</strong>
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <ParkingSquare className="text-blue-600" size={25} />
          <p className="mt-3 text-sm text-slate-500">Total Slots</p>
          <h2 className="text-3xl font-bold text-slate-900">20</h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <CheckCircle2 className="text-green-600" size={25} />
          <p className="mt-3 text-sm text-slate-500">Available Slots</p>
          <h2 className="text-3xl font-bold text-green-600">
            {availableCount}
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <CarFront className="text-orange-600" size={25} />
          <p className="mt-3 text-sm text-slate-500">Occupied Slots</p>
          <h2 className="text-3xl font-bold text-orange-600">
            {20 - availableCount}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 xl:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Select Your Parking Slot
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Parking Zone A · Ground Floor
              </p>
            </div>

            <span className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={17} className="text-blue-600" />
              MIT-ADT Campus
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-5 text-xs font-medium text-slate-600">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded bg-green-500" />
              Available
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded bg-orange-500" />
              Occupied
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded bg-blue-600" />
              Selected
            </span>
          </div>

          <div className="mt-7 rounded-xl bg-slate-100 p-3 text-center text-sm font-semibold text-slate-600">
            ENTRY / EXIT
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {slots.map((slot) => {
              const isSelected = selectedSlot === slot.id;
              const isOccupied = slot.status === "Occupied";

              return (
                <button
                  key={slot.id}
                  disabled={isOccupied}
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`flex flex-col items-center justify-center rounded-xl border p-4 transition ${
                    isSelected
                      ? "border-blue-600 bg-blue-600 text-white shadow-lg"
                      : isOccupied
                      ? "cursor-not-allowed border-orange-200 bg-orange-50 text-orange-600"
                      : "border-green-200 bg-green-50 text-green-700 hover:border-green-500"
                  }`}
                >
                  <CarFront size={25} />
                  <span className="mt-2 text-sm font-bold">
                    {slot.id}
                  </span>
                  <span className="mt-1 text-xs">
                    {isSelected
                      ? "Selected"
                      : slot.status}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Booking Details
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Complete your reservation
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Selected Parking Slot
              </label>
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                <ParkingSquare className="text-blue-600" />
                <span className="font-semibold text-slate-800">
                  {selectedSlot || "No slot selected"}
                </span>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Vehicle Number
              </label>
              <input
                type="text"
                value={vehicleNumber}
                onChange={(e) => setVehicleNumber(e.target.value)}
                placeholder="e.g. MH12AB1234"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="rounded-xl bg-blue-50 p-4">
              <div className="flex items-center gap-3 text-blue-700">
                <CalendarDays size={19} />
                <span className="text-sm font-medium">Booking Date</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-800">
                Today
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <div className="flex items-center gap-3 text-slate-600">
                <Clock size={19} />
                <span className="text-sm font-medium">Reservation</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-800">
                Campus parking session
              </p>
            </div>
            {isVisitor && (
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Parking Duration (Hours)
    </label>

    <select
      value={durationHours}
      onChange={(e) => setDurationHours(Number(e.target.value))}
      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((hours) => (
        <option key={hours} value={hours}>
          {hours} {hours === 1 ? "Hour" : "Hours"}
        </option>
      ))}
    </select>
  </div>
)}

            <button
              onClick={handleBooking}
              disabled={!selectedSlot || !vehicleNumber.trim()}
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {isVisitor ? (
  <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
    <h3 className="font-semibold text-orange-800">
      Visitor Parking Charges
    </h3>

    <div className="mt-3 flex justify-between text-sm text-slate-700">
      <span>Rate per hour</span>
      <span>₹20</span>
    </div>

    <div className="mt-2 flex justify-between text-sm text-slate-700">
      <span>Duration</span>
      <span>{durationHours} Hours</span>
    </div>

    <div className="mt-3 flex justify-between border-t border-orange-200 pt-3 font-bold text-orange-800">
      <span>Total Amount</span>
      <span>₹{totalAmount}</span>
    </div>
  </div>
) : (
  <div className="rounded-xl bg-green-50 p-4 text-sm font-semibold text-green-700">
    {currentUser?.role} Parking — Free
  </div>
)}
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parking;
