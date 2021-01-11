require('dotenv/config');
const express = require('express');
const {connect} =  require('./utils/connection');
const v1Router = require('./src/v1/index');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1',v1Router);

connect().then(()=>{
    app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));
}).catch(err=>{
    console.error(err);
})