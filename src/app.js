const express = require("express");
const cors = require('cors');
const { contactRouter } = require("./contact/contact.router");

const app = express();
app.use(express.json());
app.use(cors({origin: "*"}));

app.use("/api/contacts", contactRouter);
const PORT = 3300;

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
  });