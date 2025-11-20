"use server"

import { Todo } from "../generated/prisma/client"
import { prisma } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addTodo(title: string) {
    await prisma.todo.create({
        data: {
            title: title
        }
    })
    revalidatePath("/");
}

export async function deleteTodo(id: string) {
    await prisma.todo.delete({
        where: {
            id: id
        }
    });
    revalidatePath("/");
}