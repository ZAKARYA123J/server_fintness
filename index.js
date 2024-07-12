const express = require('express');
const cors = require('cors');
const membreRoutes = require('./router/membreRouter');
const salleRoutes = require('./router/salleRouter');
const inscrireRoutes=require('./router/inscrireRouter')
const app = express();
const port = 3000;

// Apply CORS middleware
app.use(cors());

// Use JSON middleware
app.use(express.json());

// Use the membre and salle routes
app.use('/membres', membreRoutes);
app.use('/salles', salleRoutes);
app.use('/inscrire',inscrireRoutes)
// Start the server and log the port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
