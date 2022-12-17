import express from "express";
import cors from "cors";
import PostsRoute from "./routes/PostsRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(PostsRoute);

app.listen(5000, ()=> console.log('Server up and running...'));