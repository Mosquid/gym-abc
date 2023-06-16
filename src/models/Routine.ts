import { prop } from "@typegoose/typegoose";
import mongoose from "mongoose";
import { Exercise } from "./Exercise";

export class Routine {
  @prop({
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  })
  public _id: mongoose.Types.ObjectId;
  public id: string;

  @prop()
  public title: string;

  @prop({ type: () => [Exercise] })
  public exercises: Array<Exercise>;

  @prop({ default: () => new Date() })
  public createdAt: Date;
}
