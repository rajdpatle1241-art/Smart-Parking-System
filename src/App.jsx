
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Parking from "./components/Parking";
import MyBookings from "./components/MyBookings";
import ParkingHistory from "./components/ParkingHistory";
import AdminDashboard from "./components/AdminDashboard";
import Header from "./components/Header";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [currentUser, setCurrentUser] = useState(null);

  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem("parkEaseBookings");
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "parkEaseBookings",
      JSON.stringify(bookings)
    );
  }, [bookings]);

  const addBooking = (newBooking) => {
    setBookings((previous) => [newBooking, ...previous]);
  };

  const cancelBooking = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmed) return;

    setBookings((previous) =>
      previous.map((booking) =>
        booking.id === id
          ? { ...booking, status: "Cancelled" }
          : booking
      )
    );
  };

  if (!currentUser) {
    return <Login onLogin={setCurrentUser} />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
    <Sidebar
  activeTab={activeTab}
  setActiveTab={setActiveTab}
  currentUser={currentUser}
/>

      <main className="min-w-0 flex-1 overflow-y-auto p-8">
     <Header
  currentUser={currentUser}
  onLogout={() => setCurrentUser(null)}
/>

        {activeTab === "Dashboard" ? (
          <Dashboard />
        ) : activeTab === "Find Parking" ? (
         <Parking
  onBooking={addBooking}
  bookings={bookings}
  currentUser={currentUser}
/>
        ) : activeTab === "My Bookings" ? (
          <MyBookings
            bookings={bookings}
            onCancel={cancelBooking}
          />
        ) : activeTab === "Parking History" ? (
          <ParkingHistory bookings={bookings} />
      ) : activeTab === "Admin Dashboard" &&
  currentUser?.role === "Admin" ? (
  <AdminDashboard bookings={bookings} />
        ) : (
          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <h1 className="text-2xl font-bold text-slate-900">
              {activeTab}
            </h1>
            <p className="mt-2 text-slate-500">
              This section is coming soon.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
