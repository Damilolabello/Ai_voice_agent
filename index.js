const express = require('express');
const app = express();

// VERY IMPORTANT: use Render's port
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('AI Voice Agent Server is running!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
