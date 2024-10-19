import mongoose from "mongoose";

const Connection= async () => {
    const URL = `mongodb+srv://dikshita:<userpassword>@google-doc-clone.neto1op.mongodb.net/?retryWrites=true&w=majority&appName=Google-Doc-Clone`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}