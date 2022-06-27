const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());




const uri = "mongodb+srv://dbuser1:cTTCXTa7tc65qowg@cluster0.lrlyib6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri);

async function run(){
    
    try{
        await client.connect();
        const mobileCollection = client.db("iphone").collection("data1");
        const mobileCollection1 = client.db("samsung").collection("data2");
        console.log('connected');


        // iphone
        app.get('/iphones', async(req , res)=>{
            const query = {};
            const cursor = mobileCollection.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })




        app.get('/iphones/:id' , async(req , res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result =await mobileCollection.findOne(query);
            res.send(result);

        })

        // samsung
        app.get('/samsungs', async(req , res)=>{
            const query = {};
            const cursor = mobileCollection1.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get('/samsungs/:id' , async(req , res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await mobileCollection1.findOne(query);
            res.send(result);
        })

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