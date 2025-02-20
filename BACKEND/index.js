const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// Database Connection
connectDB();

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/health", require("./routes/healthRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/upload", require("./routes/uploadRoutes"));

// Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
