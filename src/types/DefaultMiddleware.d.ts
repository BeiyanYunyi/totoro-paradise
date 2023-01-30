import express from "express";

type DefaultMiddleware = (
  req: express.Request,
  res: express.Response,
  next: () => unknown
) => void | Promise<void>;

export default DefaultMiddleware;
