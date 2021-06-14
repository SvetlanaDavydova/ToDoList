import express from "express";
import todoRouter  from "./routes/todo.routes";
import categoryRouter from "./routes/category.routes";

const app = express();
const PORT = 3001;

app.use(express.json());

app.use("/api/todo", todoRouter);
app.use("/api/category", categoryRouter);

app.listen(PORT, () => {
   console.log("Server is listening on port" + PORT)
});