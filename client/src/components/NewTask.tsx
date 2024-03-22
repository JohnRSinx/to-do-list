import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogContent,
  Dialog,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TextIcon } from "./ui/text-icon";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";

interface NewTaksProps {
  text: string;
  getTasks: () => void;
}

const newTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
});

type NewTaskSchema = z.infer<typeof newTaskSchema>;

export function NewTask({ text, getTasks }: NewTaksProps) {
  const { register, handleSubmit } = useForm<NewTaskSchema>({
    resolver: zodResolver(newTaskSchema),
  });

  async function handleCreateNewTask(data: NewTaskSchema) {
    try {
      await api.post("/task", {
        title: data.title,
        description: data.description,
        status: "pending",
        isDelete: false,
      });
      getTasks();
    } catch (error) {
      console.log(error);
    }
  }

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
        <form
          className="grid gap-4 mt-4"
          onSubmit={handleSubmit(handleCreateNewTask)}
        >
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm" htmlFor="title">
              Título
            </Label>
            <Input
              id="title"
              placeholder="Escreva um título"
              {...register("title")}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              id="description"
              placeholder="Adicione uma descrição"
              {...register("description")}
            />
          </div>
          <DialogClose asChild>
            <Button type="submit">Criar</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
