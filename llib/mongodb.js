import mongoose, { mongo } from "mongoose";
import {dbName} from '../constants/constants';

// export const connectMongoDB = async () => {
//     try {
//       await mongoose.connect(`${process.env.MONGO_URL}/${dbName}}`);
//       console.log(process.env.MONGO_URL);
//       console.log("Connected to MongoDB");
//     } catch (error) {
//         console.log("Error connecting to MongoDB: ", error);
//     }
// };


  export const connectMongoDB = async () => {
  try {
      await mongoose
          .connect(`${process.env.MONGO_URL}`, {
              dbName:dbName
          })
          .then((connections) => {
              console.log(`Database connected`, connections.connection.host);
          });
  } catch (error) {
      console.log("Mongodb Connnection Error", error.message);
  }
};

