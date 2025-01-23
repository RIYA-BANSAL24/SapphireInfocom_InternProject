// 6h38b3Cm5alHvQY9 => Password for mongodb
import mongoose from 'mongoose';

const Connection = () => {
    const DB_URI = `mongodb://riyabansal3365:6h38b3Cm5alHvQY9@cluster0-shard-00-00.6n4hr.mongodb.net:27017,cluster0-shard-00-01.6n4hr.mongodb.net:27017,cluster0-shard-00-02.6n4hr.mongodb.net:27017/?ssl=true&replicaSet=atlas-ubfyru-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
    try{
        mongoose.connect(DB_URI, { useNewUrlParser: true }); 
        console.log("DataBase connected successfully");
    } catch (error){
        console.log("Error while connecting with the address ", error.message);
    }
}

export default Connection;