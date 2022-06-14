// Chuyển <Promise> của mongoose trả về thành object
import mongoose from "mongoose";
export function multipleMongooseToObject(mongooses) {
    return mongooses.map(mongoose => mongoose.toObject());
}
export function  mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose
}
