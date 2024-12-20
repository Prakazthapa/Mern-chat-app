import express from "express";
import { chats } from "./data/data.js";
import { config } from "dotenv";
import cors from "cors";
config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running successfully!");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
