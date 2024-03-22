import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { GetTaskById } from "./components/GetTaskById";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/:id" element={<GetTaskById />} />
    </Routes>
  );
}
