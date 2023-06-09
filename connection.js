const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected:${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        console.log(process.env.dbURI);
        process.exit();
    }
};

module.exports = connectDB;