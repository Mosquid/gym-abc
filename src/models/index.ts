// models/index.ts
import { Routine } from "@/models/Routine";
import { getModelForClass } from "@typegoose/typegoose";

export const RoutineModel = getModelForClass(Routine, {
  schemaOptions: {
    timestamps: true,
    collection: "routines",
  },
});
