const express =require('express')
const mongoose = require('mongoose');
const config =require('./config/dev');
const FakeDb = require('./fake-db');
const productRoutes =require('./routes/products')
const path =require('path')
mongoose.connect(config.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    ()=>{
        if(process.env.NODE_ENV !== 'production'){
            const fakeDb = new FakeDb()
            //fakeDb.initDb()
        }
    }
)

const app = express()

app.use('/api/v1/products',productRoutes)

if(process.env.NODE_ENV === 'production'){
    const appPath =path.join(__dirname,'..','dist','angular-test')
    app.use(express.static(appPath))
    app.get("*",function(req,res){
        res.sendFile(path.resolve(appPath,'index.html'))
    })
}

const PROT = process.env.PROT||'3001'

app.listen(PROT,function(){
    console.log('I am runig')
})
//mongodb+srv://dbReserve:<password>@newdb.qotgzno.mongodb.net/?retryWrites=true&w=majority