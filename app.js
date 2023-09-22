const express = require("express");
const cors = require("cors");
const app = express();

// Allow requests from specific origins
const allowedOrigins = ["http://localhost:3000"]; // Add your React app's origin(s) here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// Rest of your server setup and routes...
