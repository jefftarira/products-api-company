import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://test:reload20@cluster0.ncqob.mongodb.net/companydb?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((db) => console.log('DB is connected'))
  .catch((error) => console.error(error));
