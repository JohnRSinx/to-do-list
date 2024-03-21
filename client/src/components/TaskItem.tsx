import { Button } from "./ui/button";
import { FileEditIcon } from "./ui/file-edit-icon";

interface TaskItemProps {
  status: string;
}
export function TaskItem({ status }: TaskItemProps) {
  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Pending";
      case "in-progress":
        return "In Progress";
      case "completed":
        return "Completed";
      default:
        return "pending";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-red-500 dark:text-red-400";
      case "in-progress":
        return "text-yellow-500 dark:text-yellow-400";
      case "completed":
        return "text-green-500 dark:text-green-400";
      default:
        return "";
    }
  };

  return (
    <div className="border rounded-lg">
      <div className="flex items-center p-4 border-b last:border-0">
        <div className="flex-1 cursor-pointer">Call with Alice</div>
        <div className="flex items-center">
          <span className={`text-sm ${getStatusColor(status)}`}>
            {getStatusText(status)}
          </span>
        </div>
        <Button className="ml-auto" size="icon" variant="ghost">
          <FileEditIcon className="w-4 h-4" />
          <span className="sr-only">Edit</span>
        </Button>
      </div>
    </div>
  );
}
