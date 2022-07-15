import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config";
import APIroutes from "./api";
import db from "./shared/database/db";

const PORT = config.PORT || 5000;

export const startServer = async () => {
  const app = express();
  app.use(cors());
  app.use(morgan("dev"));
  app.use(express.json());

  await db();

  app.use("/api/v1", APIroutes());

  app.use("/", (req: Request, res: Response) => {
    res.send("API");
  });

  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
};

startServer();
