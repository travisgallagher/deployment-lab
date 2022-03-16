const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express(); 

app.use(express.json());
app.use(cors());

// app.use(express.static(path.join(__dirname, "../public"))); 
// app.use("/images", express.static(path.join(__dirname, "../images")))

const port = process.env.PORT || 4005; 

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
}); 