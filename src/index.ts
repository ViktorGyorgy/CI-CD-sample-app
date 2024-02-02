import express from "express";
import userRouter from "./routers/userRouter";

const app = express();
const port = 3000;

app.use(express.json(),);
app.use('/users/', userRouter,);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`,);
},);
