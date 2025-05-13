const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/conversation', async (req, res) => {
  const { userMessage } = req.body;

  try {
    const kbResponse = await axios.post('http://localhost:3000/api/knowledge', {
      question: userMessage
    });

    const reply = kbResponse.data.answer;
    res.json({ botReply: reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

app.listen(3001, () => {
  console.log('Conversation Flow API running on port 3001');
});
