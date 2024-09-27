const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/live-quiz', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello World');
});
const quizRoutes = require('./routes/quiz');
app.use('/api', quizRoutes);

// WebSocket setup
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('answer', (data) => {
    // Handle answer submission
    io.emit('answer', data); // Broadcast the answer to all clients
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
