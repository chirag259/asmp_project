import  mongoose,{Schema} from "mongoose";

const orderItemSchema=new Schema({
    quantity:{
        type: Number,
        required:true
    },
    orderItemid:{
        type:Number,
        required:true
    }
},{timestamps:true});

const orderSchema= new mongoose.Schema({

    orderPrice:{
        type:Number, 
        required:true },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderDate:{
        type:Number,
        required:true 
    } ,
    orderItems:{
        type:[orderItemSchema]
    },
    Address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING",
        required:true
    }
},{timestamps:true});

const Order=mongoose.model("Order",orderSchema)
export default Order;