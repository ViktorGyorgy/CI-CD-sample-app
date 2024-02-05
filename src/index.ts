import express from 'express';
import bodyParserErrorHandler from 'express-body-parser-error-handler';
import userRouter from './routers/userRouter';

const app = express();
const port = 3000;

app.use(express.json(),);
app.use(bodyParserErrorHandler());
app.use('/users/', userRouter,);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`,);
},);

app.get("/", (req, res) =>{
  res.send("Hello");
});