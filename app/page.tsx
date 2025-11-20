// import Image from "next/image";
import { prisma } from '@/app/lib/prisma';
import { Todo } from '@/app/generated/prisma/client';
import TodoForm from '@/app/components/toDoForm';
import TodoList from "@/app/components/todoList";

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <h1 className='text-3xl font-bold'>todo</h1>

      {/* <p className='text-gray-600'>Stay organised and productive</p> */}
      <TodoForm />
      <TodoList todos={todos}/>
    </div>
  );
}