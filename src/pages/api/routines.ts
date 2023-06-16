import { RoutineModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/services/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  if (req.method === "GET") {
    const todos = await RoutineModel.find({}).limit(10).lean();
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    // creating a single todo
    // const body = req.body as CreateTodoBody;
    const todo = new RoutineModel({
      title: "test title",
      description: "description",
      exercises: [],
    });
    await todo.save();

    res.status(200).json(todo.toJSON());
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
