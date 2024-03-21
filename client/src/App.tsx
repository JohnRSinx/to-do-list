import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <Dashboard />
    </div>
  );
}
