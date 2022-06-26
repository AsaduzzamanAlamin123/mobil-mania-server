const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());




const uri = "mongodb+srv://dbuser1:cTTCXTa7tc65qowg@cluster0.lrlyib6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri);

async function run(){
    
    try{
        await client.connect();
        const mobileCollection = client.db("mobiles").collection("data");
        console.log('connected');

    }
    finally{

    }

}
run().catch(console.dir);

app.get('/',(req , res)=>{
    res.send('My server is running')
});

app.listen(port , ()=>{
    console.log('my server port is',port);
})
// dbuser1
// 