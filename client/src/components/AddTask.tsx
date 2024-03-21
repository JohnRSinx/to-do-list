import { PlusIcon } from "./ui/PlusIcon";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function AddTask() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Input
          className="flex-1 py-2 px-4 rounded-md bg-[#262626] border border-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Adicione uma nova tarefa"
        />
        <Button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md">
          Criar
          <PlusIcon className="ml-2" />
        </Button>
      </div>
    </>
  );
}
