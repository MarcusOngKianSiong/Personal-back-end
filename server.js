const express = require('express');
const cors = require('cors')
require('dotenv').config();
const {simpleTableManipulation,NotionOperations} = require('./custom-notion/interface.js')
const app = express()
const tableManagement = new simpleTableManipulation(process.env.project_table_id,{ table_width: process.env.table_width, has_column_header: process.env.has_column_header, has_row_header: process.env.has_row_header })


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


app.get('/projects',async (req,res)=>{
        // Have the table id ready
        const data = await tableManagement.extractSimpleTableContents();
        res.send(data);
})

app.listen(3001,()=>{
    console.log('server running....')
})