const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Importing the routes
const envelopesRoutes = require('./routes/envelopes');

app.use(bodyParser.json());
app.use('/envelopes', envelopesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get("/", (req,res) => res.send ("Welcome to Docu sign API"));
