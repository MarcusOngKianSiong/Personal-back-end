const express = require('express');
const cors = require('cors')
const app = express()


app.use(cors({origin: '*'}))

app.get('/',(req,res)=>{
    console.log("Running the operation....")
    res.send({
        
        projectName: {
            description: 'Random project',
            link: 'https://google.com'
        }
    })
})


app.listen(3001,()=>{
    console.log('server running....')
})