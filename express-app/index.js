import express from "express"

const app = express();

app.get("/", (req, res) => res.send("Hello from express"))
app.get("/health", (req, res) => res.status(200).json({ msg: "API is healthy", status: "OK" }))

app.listen(4000, () => console.log("Application listen on port 4000"))