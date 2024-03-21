import { Dashboard } from "./components/Dashboard";

export function App() {
  return (
    <div
      key="1"
      className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <Dashboard />
    </div>
  );
}
