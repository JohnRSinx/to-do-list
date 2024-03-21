import { Button } from "@/components/ui/button";
import { DialogTrigger, DialogContent, Dialog } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TextIcon } from "./ui/text-icon";

interface NewTaksProps {
  text: string;
}

export function NewTask({ text }: NewTaksProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">{text}</Button>
      </DialogTrigger>
      <DialogContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
            <TextIcon className="w-6 h-6" />
          </div>
          <div className="grid gap-1.5">
            <h2 className="text-lg font-medium leading-none">Novo item</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Adicione detalhes opcionais ao seu item.
            </p>
          </div>
        </div>
        <div className="grid gap-4 mt-4">
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm" htmlFor="title">
              Título
            </Label>
            <Input id="title" placeholder="Escreva um título" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm" htmlFor="description">
              Descrição
            </Label>
            <Textarea id="description" placeholder="Adicione uma descrição" />
          </div>
          <Button>Criar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
