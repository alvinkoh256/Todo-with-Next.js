"use client"

import { Todo } from "../generated/prisma/client"

// concept:
// alert pops up on the bottom right whenever a todo is added or removed.
// whenever add/delete is performed, show alert function will be called.

// component logic:
// this component will be the structure of the alert
// it takes in the alert text as prop from the alert function

// advanced feature:
// allow undo

export default function Alert({ title, action }: { title: string; action: "add" | "delete" }) {
    let content;
    if (action == "add") {
        content = <p>You have added a task: + <strong>{title}</strong>;</p>
    } else {
        content = <p>You have deleted a task: + <strong>{title}</strong>;</p>
    }

    return (
        <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded shadow-lg">
            {content}
        </div>
    )
}