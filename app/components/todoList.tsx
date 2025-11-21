"use client"
import { Todo } from "@/app/generated/prisma/client";
import { deleteTodo } from "../actions/todo";
import Alert from "./alert";
import { useState } from "react";
import { toast } from 'react-toastify';

export default function TodoList({ todos }: { todos: Todo[] }) {
    let content;
    if (todos.length === 0) {
        content = <tr><td className="col-span-2"><p className="text-gray-400">No Todos yet</p></td></tr>;
    } else {
        (content =
            todos.map((todoEach: Todo) => (
                <tr key={todoEach.id}>
                    <td>
                        <p>{todoEach.title}</p>
                    </td>
                    <td>
                        <p>{todoEach.priority}</p>
                    </td>
                    <td>
                        <button className="bg-blue-600 cursor-pointer m-2 pl-2 pr-2 pt-1 pb-1 rounded-xs" onClick={
                            () => {
                                deleteTodo(todoEach.id);
                                toast.success('Deleted task: ' + todoEach.title);
                            }
                        }>Delete</button>
                    </td>
                </tr>
            ))
        );
    }
    return (
        <div className="overflow-hidden rounded-sm">
            <table className="todo-table border-1 border-collapse">
                <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th></th>
                </tr>
                {content}
            </table>

        </div>
    )
}