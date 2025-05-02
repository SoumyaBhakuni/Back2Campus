const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan"); // Added for logging
const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/AuthRoutes"); 
const eventRoutes = require("./routes/AuthEvents"); // Renamed for consistency
const jobRoutes = require("./routes/AuthJobs"); // Renamed for consistency

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev")); // Logs requests in development mode

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes); // Updated path
app.use("/api/jobs", jobRoutes);


const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
