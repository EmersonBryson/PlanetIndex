import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Moon = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        planet: { type: ObjectId, ref: "Planet", required: true },
        star: { type: ObjectId, ref: "Star", required: true },
        galaxy: { type: ObjectId, ref: "Galaxy", required: false }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon;