import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRouter from "./controllers/auth";
import tasksRouter from "./controllers/tasks";
import functionalitiesRouter from "./controllers/functionalities";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/tasks", tasksRouter);
app.use("/functionalities", functionalitiesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
