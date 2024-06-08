import express from "express";

const app = express();
app.use(express.json());
app.get("/main", () => {
  res.status(200).json({
    message: "Hello world!",
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
