import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Planet = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        star: { type: ObjectId, ref: "Star", required: true },
        galaxy: { type: ObjectId, ref: "Galaxy", required: true }

    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;