const mongoose = require('mongoose');

const dbConection = async () => {

    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect( process.env.DB_CONECTION );
        console.log('DB Online');

    } catch (error) {

        console.error(error);
        throw new Error('Error initializing DB'); 
    
    }
}

module.exports = {
    dbConection
};