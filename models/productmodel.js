import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    producttitle: {
      type: String,
      required: true,
      trim: true,
    },
    productbrand:{
        type: String,
        required:true
    },
    productmodel:{
        type: String,
        required:true 
    },
    description: {
      type: String,
      required: true,
    },
    productimage: {
      type: String,
      required: true,
    },
    rentprice:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    
  },{timestamps:true});
  
  const Product = mongoose.model("Product", productSchema);
  export default Product;