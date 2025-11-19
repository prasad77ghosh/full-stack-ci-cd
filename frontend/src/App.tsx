import { Route, Routes, Navigate } from "react-router";
import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/layout/Navbar";
import MathTreeApp from "./pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

export default function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-14">
        <Routes>
          <Route path="/" element={<MathTreeApp />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* 👇 Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Toaster position="top-right" richColors closeButton={true} />
    </div>
  );
}
