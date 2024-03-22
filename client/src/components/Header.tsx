import { FrameIcon } from "./ui/frame-icon";

export function Header() {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 justify-center">
      <a
        className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
        href="#"
      >
        <FrameIcon className="w-6 h-6" />
        <span className="text-3xl text-zinc-700">Todo</span>
      </a>
    </header>
  );
}
