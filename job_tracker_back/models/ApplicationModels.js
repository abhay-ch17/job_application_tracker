import { application } from "express";
import mongoose, { Schema } from "mongoose";

const applicationSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    company: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
      default: "Applied",
    },
    dateApplied: Date,
    link: String,
    notes: String
  },
  {
    timeStamps: true,
  },
);

export const applicationModel = mongoose.model(
  "application",
  applicationSchema,
);
