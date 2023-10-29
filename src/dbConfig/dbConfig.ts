import mongoose from "mongoose";

const connect = ()=>{
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on('connected',()=>{
            console.log('connected to database');
            
        })

        connection.on('error',(err)=>{
            console.log(`connection error is ${err}`);
            process.exit();
        })
    } catch (error) {
        console.log(`error while connecting to database that is:${error}`);
        
    }
}

export default connect;