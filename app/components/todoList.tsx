"use client"
import { Todo } from "@/app/generated/prisma/client";
import { deleteTodo } from "../actions/todo";


export default function TodoList({todos}:{todos:Todo[]}) {
    return (
        <div>
            {todos.length === 0 ? (
                <p>No todos yet</p>
            ) : (
                <ul>
                    {todos.map((todoEach: Todo) => (
                        <li key={todoEach.id}>{todoEach.title}
                        <button className="bg-blue-600" onClick={()=> deleteTodo(todoEach.id)}>Delete</button>
                        </li>
                        
                    ))}
                </ul>
            )}
        </div>
    )
}