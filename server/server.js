const express = require ("express");
const app = express();
const PORT = 3001;


const rout = require("./routes/todo.routes");
app.use(express.json());

app.use("/api/todo", rout);
app.listen(PORT, () => {
   console.log("Server is listening on port" + PORT)
});