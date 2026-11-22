# 🚗 Smart Parking Management System

A web-based Smart Parking Management System developed for **MIT-ADT University, Pune**, to simplify campus parking management through digital slot availability, parking reservations, and occupancy monitoring.

## 📌 Project Overview

Finding an available parking space on a busy campus can be time-consuming and frustrating. Students, faculty, and visitors often face difficulties identifying vacant parking slots, resulting in unnecessary delays and congestion.

The Smart Parking Management System provides a centralized web interface where users can view parking slot availability, reserve slots, manage bookings, and monitor parking occupancy.

## ✨ Key Features

- **Dashboard:** Overview of parking capacity, availability, occupancy, and recent bookings.
- **Find Parking:** View parking slots and identify available spaces.
- **Slot Reservation:** Select an available slot and book it using a vehicle number.
- **My Bookings:** View active, completed, and cancelled reservations.
- **Booking Cancellation:** Cancel an active parking reservation.
- **Parking History:** View previous and cancelled bookings.
- **Admin Dashboard:** Monitor parking occupancy, available slots, and recent reservations.
- **Persistent Bookings:** Booking information is stored in browser local storage and remains available after refreshing the page.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Development server and build tool |
| Tailwind CSS | UI styling |
| JavaScript | Application logic |
| Lucide React | Icons |
| HTML5 | Application structure |
| CSS3 | Custom styling |
| Git & GitHub | Version control |
| Vercel | Deployment and hosting |

## 🖥️ Application Modules

### 1. User Dashboard
Displays parking statistics, including total slots, available slots, occupied slots, and recent bookings.

### 2. Find Parking
Displays parking slots with their availability status. Users can select an available slot and enter their vehicle registration number to create a reservation.

### 3. My Bookings
Displays reservation details, including booking ID, vehicle number, slot number, date, and booking status.

### 4. Parking History
Maintains a view of cancelled and completed reservations.

### 5. Admin Dashboard
Provides an overview of parking occupancy, active reservations, and parking slot statistics.

## 🏗️ Project Structure

```text
Smart-Parking-System/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── AdminDashboard.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Header.jsx
│   │   ├── MyBookings.jsx
│   │   ├── Parking.jsx
│   │   ├── ParkingHistory.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

**Prerequisites**
- Node.js
- npm
- Git

**1. Clone the repository**

```bash
git clone https://github.com/rajdpatle1241-art/Smart-Parking-System.git
```

**2. Navigate to the project directory**

```bash
cd Smart-Parking-System
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Visit the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 🚀 Live Deployment

The application is deployed using Vercel.

**Live Website:** https://smart-parking-system.vercel.app

**GitHub Repository:** https://github.com/rajdpatle1241-art/Smart-Parking-System

## 🔄 Agile Development Approach

The project follows Agile Software Development principles and uses the Scrum framework.

- **Product Backlog:** Features and requirements were organized according to priority.
- **Sprint Planning:** Work was divided into manageable development tasks.
- **Task Distribution:** Responsibilities were assigned among team members.
- **Development:** Application modules were developed incrementally.
- **Testing:** Core booking, cancellation, navigation, and persistence workflows were tested.
- **Deployment:** The production build was deployed through Vercel.

## 👥 Project Team

| Team Member | Role |
|---|---|
| Abhinav Deshmukh | Product Owner |
| Aryan Patle | Scrum Master |
| Aryan Kamthe | Frontend Developer |
| Kaustubh Patil | Backend, Database & Testing |

## ⚠️ Current Implementation Notes

- Parking occupancy includes simulated initial slot data.
- Reservations are stored using browser `localStorage`.
- Booking data is browser-specific and is not synchronized between different users or devices.
- Live IoT parking sensors, online payment integration, and a centralized backend database are not currently implemented.

These integrations can be considered for future development.

## 🔮 Future Enhancements

- Real-time parking availability using IoT sensors.
- Backend integration with a centralized database.
- User authentication and role-based access.
- Online payment gateway integration.
- QR-code-based parking entry and exit.
- Email and SMS booking notifications.
- Advanced parking analytics and reports.

## 📄 Academic Information

**Institution:** MIT-ADT University, Pune  
**Project:** Smart Parking Management System  
**Subject:** Agile Software Development  
**Methodology:** Agile Scrum

---

*Developed as an academic project to demonstrate Agile principles and modern web application development.*