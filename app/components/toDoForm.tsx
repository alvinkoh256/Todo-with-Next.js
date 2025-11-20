"use client"
import { useState } from "react"
import {addTodo, deleteTodo} from '@/app/actions/todo';
import {toast} from "react-toastify";

export default function TodoForm() {
    const [title, setTitle] = useState("")
    return (
        <div>
            <input type="text" className="bg-white text-red-600 rounded-lg m-2 h-8" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button className="cursor-pointer bg-teal-500 rounded-sm pl-3 pr-3 pt-1 pb-1 hover:bg-violet-600 active:bg-blue-500" onClick={
                () => {
                if (title.trim() !== ""){
                    addTodo(title);
                    setTitle("");
                    toast.success('Added new to do: ' + title)
                } else {
                    toast.error('You need to write something!');
                }     
                console.log(title + ' todo added to DB');
                }}>Add Todo</button>
        </div>
    )
}