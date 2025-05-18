const express = require('express');
const productRoutes = require('./routes/api/productRoute');

const app = express(); // ✅ Declare 'app' BEFORE using it

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes); // ✅ Use 'app' AFTER it's initialized

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

