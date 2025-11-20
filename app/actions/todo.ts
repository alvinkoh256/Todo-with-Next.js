"use server"

import { Todo } from "../generated/prisma/client"
import { prisma } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addTodo(title: string) {
    let todo;
    todo = await prisma.todo.create({
        data: {
            title: title
        }
    })
    revalidatePath("/");
    return todo;
}

export async function deleteTodo(id: string) {
    let todo;
    todo = await prisma.todo.delete({
        where: {
            id: id
        }
    });
    revalidatePath("/");
    return todo;
}