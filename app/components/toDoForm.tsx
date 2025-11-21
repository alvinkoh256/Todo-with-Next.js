"use client"
import { useState } from "react"
import { addTodo, deleteTodo } from '@/app/actions/todo';
import { toast } from "react-toastify";

export default function TodoForm() {
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("Low")
    return (
        <div>
            <input type="text" className="bg-white text-red-600 rounded-lg m-2 h-8" value={title} onChange={(e) => setTitle(e.target.value)} />
            <select className="bg-white m-2 text-black rounded-lg h-8" value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>

            <button className="cursor-pointer bg-teal-500 rounded-sm pl-3 pr-3 pt-1 pb-1 m-2 hover:bg-violet-600 active:bg-blue-500" onClick={
                () => {
                    if (title.trim() !== "") {
                        addTodo(title, priority);
                        setTitle("");
                        toast.success('Added new task: ' + title + ' - ' + priority + ' priority.')
                    } else {
                        toast.error('You need to write something!');
                    }
                }}>Add Todo</button>
        </div>
    )
}