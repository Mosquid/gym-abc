import { prop } from "@typegoose/typegoose";
import mongoose from "mongoose";

export class Exercise {
  @prop({ type: mongoose.Schema.Types.ObjectId })
  public _id: mongoose.Types.ObjectId;
  public id: string;

  @prop()
  public title: string;

  @prop()
  public description: string;

  @prop()
  public sets: number;

  @prop()
  public reps: number;

  @prop()
  public weight: number;
}
