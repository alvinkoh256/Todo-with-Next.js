"use client"
import { Todo } from "@/app/generated/prisma/client";
import { deleteTodo } from "../actions/todo";
import Alert from "./alert";
import { useState } from "react";
import {toast} from 'react-toastify';

export default function TodoList({ todos }: { todos: Todo[] }) {
    let content;
    if (todos.length === 0) {
        content = <p>No todos yet</p>;
    } else {
        (content =
            <ul>
                {todos.map((todoEach: Todo) => (
                    <li key={todoEach.id}>
                        <p className="inline">{todoEach.title}</p>
                        <button className="bg-blue-600 cursor-pointer m-2 pl-2 pr-2 pt-1 pb-1 rounded-xs" onClick={
                            () => {
                                deleteTodo(todoEach.id);
                                toast.success(todoEach.title + ' deleted');
                        }
                        }>Delete</button>
                    </li>))}
            </ul>);
    }
    return (
        <div>
            {content}
        </div>
    )
}