import React, { useState } from "react";

const CodeEditor = () => {
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");

    const runCode = async () => {
        try {
            const response = await fetch("http://localhost:5000/run", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code }),
            });

            const data = await response.json();
            setOutput(data.output);
        } catch (error) {
            console.error("Error executing code:", error);
            setOutput("Error executing code.");
        }
    };

    return (
        <div>
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Write your code here..."
            />
            <button onClick={() => setCode("")} style={{ padding: "8px", margin: "10px", background: "#f44336", color: "white", border: "none", cursor: "pointer" }}>
    Clear Code ❌
</button>

        </div>
    );
};

export default CodeEditor;

