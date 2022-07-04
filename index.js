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
         const mobileCollection2 = client.db("oppo").collection("data3");
         const mobileCollection3 = client.db("xiomi").collection("data4");
         const mobileCollection4 = client.db("vivo").collection("data5");
         const mobileCollection5 = client.db("realme").collection("data6");
         const mobileCollection6 = client.db("walton").collection("data7");
         const mobileCollection7 = client.db("symphony").collection("data8");
         const mobileCollection8 = client.db("tecno").collection("data9");
         const mobileCollection9 = client.db("oneplus").collection("data10");
         const mobileCollection10 = client.db("itel").collection("data11");
         const mobileCollection11 = client.db("infinix").collection("data12");
       
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
        
        app.post('/iphone', async(req , res)=>{
            const newUser= req.body;
            const result = await mobileCollection.insertOne(newUser);
            res.send(result)
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

        app.post('/samsung', async(req , res)=>{
            const newUser= req.body;
            const result = await mobileCollection1.insertOne(newUser);
            res.send(result)
        })


        // Oppo
        app.get('/oppos', async(req , res)=>{
            const query = {};
            const cursor = mobileCollection2.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })


        app.get('/oppos/:id' , async(req , res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result =await mobileCollection2.findOne(query);
            res.send(result);

        })

        app.post('/oppo', async(req , res)=>{
            const newUser= req.body;
            const result = await mobileCollection2.insertOne(newUser);
            res.send(result)
        })

        // xiomii

        app.get('/xiomis', async(req , res)=>{
            const query = {};
            const cursor = mobileCollection3.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/xiomis/:id' , async(req , res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result =await mobileCollection3.findOne(query);
            res.send(result);

        })


        app.post('/xiomi', async(req , res)=>{
            const newUser= req.body;
            const result = await mobileCollection3.insertOne(newUser);
            res.send(result)
        })


        // vivo

        app.get('/vivos', async(req , res)=>{
            const query = {};
            const cursor = mobileCollection4.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/vivos/:id' , async(req , res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result =await mobileCollection4.findOne(query);
            res.send(result);

        })



        app.post('/vivo', async(req , res)=>{
            const newUser= req.body;
            const result = await mobileCollection4.insertOne(newUser);
            res.send(result)
        })

        // realme
        app.get('/realmes', async(req , res)=>{
            const query = {};
            const cursor = mobileCollection5.find(query);
            const result = await cursor.toArray();
            res.send(result);
        })
        app.get('/realmes/:id' , async(req , res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result =await mobileCollection5.findOne(query);
            res.send(result);

        })

        app.post('/realme', async(req , res)=>{
            const newUser= req.body;
            const result = await mobileCollection5.insertOne(newUser);
            res.send(result)
        })

        // Walton
        app.get('/waltons' , async(req , res)=>{
            const query = {};
            const cursor = mobileCollection6.find(query);
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get('/waltons/:id' , async(req , res)=>{
            const id = req.params.id;
            const query = {_id : ObjectId(id)};
            const result = await mobileCollection6.findOne(query);
            res.send(result)

        });

        app.post('/walton' , async(req , res)=>{
            const newUser = req.body;
            const result = await mobileCollection6.insertOne(newUser);
            res.send(result);
        })


        // symphony

        app.get('/symphonys' , async(req , res)=>{
            const query = {};
            const cursor = mobileCollection7.find(query);
            const result = await cursor.toArray();
            res.send(result)
        });

        app.get('/aynohonys/:id', async(req , res)=>{
            const id = req.params.id;
            const query = { _id: ObjectId(id)}
            const result = await mobileCollection7.findOne(query);
            res.send(result);
        });

        app.post('/symphony' , async(req , res)=>{
            const newUser = req.body;
            const result =await mobileCollection7.insertOne(newUser);
            res.send(result)
        })

        // tecno
        app.get('/tecnos', async(req , res)=>{
            const query = {};
            const cursor = mobileCollection8.find(query);
            const result = await cursor.toArray();
            res.send(result)
        });

        app.get('/tecnos/:id' , async(req , res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result = await mobileCollection8.findOne(query);
            res.send(result);
        });

        app.post('/tecno' , async(req , res)=>{
            const newUser = req.body;
            const result = await mobileCollection8.insertOne(newUser);
            res.send(result);
        })


        // one plus
        app.get('/onePluses', async(req , res)=>{
            const query={};
            const cursor = mobileCollection9.find(query);
            const result = await cursor.toArray();
            res.send();
        });

        app.get('/oneplueses/:id' , async(req ,res)=>{
            const id = req.params.id;
            const query = { _id: ObjectId(id)};
            const result = await mobileCollection9.findOne(query);
            res.send(result);

        })

        app.post('/oneplus' , async(req , res)=>{
            const newUser = req.body;
            const result = await mobileCollection9.insertOne(newUser);
            res.send(result);
        })

        
        // itel
        app.get('/itels' ,async(req , res)=>{
            const query = {};
            const cursor = mobileCollection10.find(query);
            const result = await cursor.toArray();
            res.send(result);
        });
        app.get('/itels/:id' , async(req , res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await mobileCollection10.findOne(query);
            res.send(result);
        });

        app.post('/itel' , async(req , res)=>{
            const newUser = req.body;
            const result = await mobileCollection10.insertOne(newUser);
            res.send(result);
        });

        // infinix
        app.get('/infinixs' ,async(req , res)=>{
            const query = {};
            const cursor = mobileCollection11.find(query);
            const result = await cursor.toArray();
            res.send(result);
        });
        app.get('/infinixs/:id' , async(req , res)=>{

            const id = req.params.id;
            
            const query = {_id: ObjectId(id)};
            const result = await mobileCollection11.findOne(query);
            console.log(result);
            res.send(result);
        });


        app.post('/infinix' , async(req , res)=>{
            const newUser = req.body;
            const result = await mobileCollection11.insertOne(newUser);
            res.send(result);
        });
        


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