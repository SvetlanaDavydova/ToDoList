const express = require("express");
const app = express();
const PORT = 3001;


const todoRouter = require("./routes/todo.routes");
const categoryRouter = require("./routes/category.routes");

app.use(express.json());

app.use("/api/todo", todoRouter);
app.use("/api/category", categoryRouter);

app.listen(PORT, () => {
   console.log("Server is listening on port" + PORT)
});