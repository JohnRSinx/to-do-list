import { Badge } from "./ui/badge";

export function StatusSummaryTask() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">Tarefas criadas</h2>
          <Badge variant="secondary">5</Badge>
        </div>
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">Concluídas</h2>
          <Badge variant="secondary">2 de 5</Badge>
        </div>
      </div>
    </>
  );
}
