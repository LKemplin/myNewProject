const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;


app.use(cors({origin: 'http://localhost:3000',}),);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./config/mongoose.config');

require('./routes/person.routes')(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));