import { NewTask } from "./NewTask";
import { Button } from "./ui/button";
import { FrameIcon } from "./ui/frame-icon";
import { Input } from "./ui/input";
import { SearchIcon } from "./ui/search-icon";

export function Header() {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
      <a
        className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4"
        href="#"
      >
        <FrameIcon className="w-6 h-6" />
        <span className="sr-only">Acme Inc</span>
      </a>
      <form className="flex-1 ml-auto">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            placeholder="Search tasks..."
            type="search"
          />
        </div>
      </form>
      <NewTask text={"Nova Tarefa"} />
    </header>
  );
}
