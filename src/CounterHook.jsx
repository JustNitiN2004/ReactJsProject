import { useState } from "react";

function CounterHook() {
    const [counter, setCounter] = useState(0);
    const [mes, setMes] = useState("");

    const [user] = useState([
        { name: "Nitin", gender: "Male", age: 20 },
        { name: "Kamil", gender: "Male", age: 23 },
        { name: "Khushi", gender: "Female", age: 28 },
    ]);

    const increment = () => {
        if (counter >= 10) {
            setMes("Limit reached! Maximum is 10.");
        } else {
            setCounter(counter + 1);
            setMes("");
        }
    };

    const decrement = () => {
        if (counter <= 0) {
            setMes("Limit reached! Minimum is 0.");
        } else {
            setCounter(counter - 1);
            setMes("");
        }
    };

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif",boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", }}>
            <h2>Counter using Hook</h2>
            <button
                onClick={increment}
                style={{
                    padding: "10px 20px",
                    margin: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                +
            </button>
            <button
                onClick={decrement}
                style={{
                    padding: "10px 20px",
                    margin: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                -
            </button>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Count: {counter}</p>
            <p style={{ color: "red", fontWeight: "bold" }}>{mes}</p>

                
            <h2>Object Hook</h2>

            <table
                style={{
                    width: "50%",
                    margin: "0 auto",
                    borderCollapse: "collapse",
                    textAlign: "center",
                    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
                }}
            >
                <thead>
                    <tr style={{ background: "#007BFF", color: "white" }}>
                        <th style={{ border: "1px solid black", padding: "10px" }}>Name</th>
                        <th style={{ border: "1px solid black", padding: "10px" }}>Gender</th>
                        <th style={{ border: "1px solid black", padding: "10px" }}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((val, index) => (
                        <tr
                            key={index}
                            style={{
                                background: index % 2 === 0 ? "#ffffff" : "#f9f9f9",
                            }}
                        >
                            <td style={{ border: "1px solid black", padding: "10px" }}>{val.name}</td>
                            <td style={{ border: "1px solid black", padding: "10px" }}>{val.gender}</td>
                            <td style={{ border: "1px solid black", padding: "10px" }}>{val.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CounterHook;
