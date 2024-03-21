import { RocketIcon } from "./ui/RocketIcon";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <RocketIcon className="text-blue-500 h-8 w-8" />
      <h1 className="text-4xl font-bold text-blue-500">todo</h1>
      <div />
    </header>
  );
}
