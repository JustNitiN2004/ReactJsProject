import React, { useState, useEffect } from "react";

function Todo() {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);

    // Load saved tasks from local storage on mount
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    // Save tasks to local storage whenever tasks update
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTodo = () => {
        if (text.trim() === "") return;

        // Prevent duplicate tasks
        if (tasks.includes(text.trim())) {
            alert("Task already exists!");
            return;
        }

        setTasks([...tasks, text.trim()]);
        setText("");
    };

    const editTodo = (index) => {
        let updatedText = prompt("Edit Todo:", tasks[index]);
        if (updatedText !== null && updatedText.trim() !== "") {
            let updatedTasks = [...tasks];
            updatedTasks[index] = updatedText.trim();
            setTasks(updatedTasks);
        }
    };

    const deleteTodo = (index) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            let updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks(updatedTasks);
        }
    };

    return (
        
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" ,boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",color:"black"}}>
            
            <h2 style={{color: "rgb(106, 72, 72)"}}> Todo App</h2>
            <br />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter task..."
                style={{
                    padding: "10px",
                    width: "250px",
                    marginRight: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                }}
            />
            <button
                onClick={addTodo}
                style={{
                    padding: "10px 15px",
                    cursor: "pointer",
                    background: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                     
                }}
            >
                 Add
            </button>

            <ul style={{ marginTop: "20px", padding: "0", listStyleType: "none",color: "black", }}>
                {tasks.length === 0 ? (
                    <p style={{color: "black" }}>No tasks yet. Start adding some!</p>
                ) : (
                    tasks.map((task, index) => (
                        <li
                            key={index}
                            style={{
                                background: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                                padding: "10px",
                                border: "1px solid #ddd",
                                marginBottom: "5px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderRadius: "5px",
                                color: "black"
                            }}
                        >
                            {task}
                            <div>
                                <button
                                    onClick={() => editTodo(index)}
                                    style={{
                                        marginLeft: "10px",
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                        background: "#FFA500",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        
                                    }}
                                >
                                     Edit
                                </button>
                                <button
                                    onClick={() => deleteTodo(index)}
                                    style={{
                                        marginLeft: "5px",
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                        background: "#DC3545",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                    }}
                                >
                                     Delete
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Todo;
