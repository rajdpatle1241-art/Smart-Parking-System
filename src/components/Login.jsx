
import { useState } from "react";
import { CarFront, User, Lock, GraduationCap } from "lucide-react";

function Login({ onLogin }) {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginId.trim() || !password.trim()) {
      setError("Please enter Login ID and Password.");
      return;
    }

    // Demo Admin credentials
    if (loginId.trim().toLowerCase() === "admin") {
      if (password === "ParkEase@123") {
        onLogin({
          loginId: "admin",
          role: "Admin",
        });
      } else {
        setError("Invalid Admin password.");
      }
      return;
    }

    // Student, Faculty and Visitor login
    onLogin({
      loginId: loginId.trim(),
      role,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
            <CarFront size={34} className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white">ParkEase</h1>

          <p className="mt-2 text-sm text-slate-400">
            Smart Campus Parking Management
          </p>

          <p className="mt-6 text-xl font-semibold text-white">
            Welcome Back!
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Login to access campus parking
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Login ID
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">
              <User size={18} className="text-slate-400" />

              <input
                type="text"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                placeholder="Enter your Login ID"
                className="w-full border-0 bg-transparent p-3 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">
              <Lock size={18} className="text-slate-400" />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="w-full border-0 bg-transparent p-3 text-white outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Select Your Role
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">
              <GraduationCap size={19} className="text-slate-400" />

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-transparent p-3 text-white outline-none"
              >
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="Visitor">Visitor</option>
              </select>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-400">{error}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login to Dashboard
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-500">
          MIT-ADT University | Smart Parking System
        </p>
      </div>
    </div>
  );
}

export default Login;
