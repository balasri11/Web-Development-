const runCode = async () => {
    try {
        const response = await fetch("http://localhost:5000/run", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code }), // Sends user's code input
        });

        const data = await response.json();
        setOutput(data.output); // Show result on frontend
        setCode(""); // Clears the input after execution
    } catch (error) {
        console.error("Error executing code:", error);
        setOutput("Error executing code.");
    }
};
