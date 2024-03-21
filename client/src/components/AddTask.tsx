import { Button } from "./ui/button";

export function AddTask() {
  return (
    <div className="flex items-center gap-4 mb-4">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <Button size="sm" variant="outline">
        New Task
      </Button>
    </div>
  );
}
