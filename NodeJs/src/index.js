const express = require('express');
const app = express();

app.set('port', 3050);

app.use(express.json());
app.use(require('./routes/taskRouter'));



app.listen(app.get('port'), ()=>{
    console.log('Server on port 3050')
});