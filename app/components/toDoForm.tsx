"use client"
import { useState } from "react"
import {addTodo, deleteTodo} from '@/app/actions/todo';

export default function TodoForm() {
    const [title, setTitle] = useState("")
    return (
        <div>
            <input type="text" className="bg-white text-red-600" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className="cursor-pointer" onClick={
                () => {addTodo(title);
                alert(title + ' todo added to DB');
                }}>Add Todo</button>
        </div>
    )
}