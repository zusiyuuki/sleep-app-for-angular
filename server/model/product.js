const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    coverimge:String,
    name:{type: String,required:true, max:[60,'最大60文字までです']},
    price:Number,
    description:String,
    heding1:String,
    heding2:String,
    heding3:String,
    hedingdescription1:String,
    hedingdescription2:String,
    hedingdescription3:String,
});

module.exports =mongoose.model('product',ProductSchema)