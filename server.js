const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/Db");
const AuthRoute = require("./routes/AuthRoute");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const { default: helmet } = require("helmet");
const rateLimiter = require("./middlewares/rateLimiter");
const morgan = require("morgan");
const cors = require("cors");


dotenv.config();
const CareerRoutes = require("./routes/CareerRoute");
connectDB();
const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(rateLimiter);
app.use(morgan("combined"));

// Routes
app.use("/api/auth", AuthRoute);
app.use("/api/career", CareerRoutes);


// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});