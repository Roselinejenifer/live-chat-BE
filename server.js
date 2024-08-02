const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat'); // Make sure this path is correct
const app = express();

require('dotenv').config();

mongoose.connect('mongodb+srv://Jas-13:123@jasper.cclnzjl.mongodb.net/livechat?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Enable CORS
app.use(cors({
  origin: '*', // Allow all origins, or specify the origin of your frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Authorization', 'Content-Type']
}));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes); // Register chat routes

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
