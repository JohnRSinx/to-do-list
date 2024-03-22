import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Router } from "./route";

export function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
