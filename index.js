const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 10000;

// Health check
app.get('/', (req, res) => {
  res.send('AI Voice Agent Server is running!');
});

// 🔥 This is what answers the phone call
app.post('/voice', (req, res) => {
  const twiml = `
    <Response>
        <Say voice="alice">
            Hello. Thank you for calling. This is an AI assistant.
            We are testing automated call handling.
        </Say>
    </Response>
  `;

  res.type('text/xml');
  res.send(twiml);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
