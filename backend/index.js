const express=require('express');
const app=express();
const routes=require('./routes/users');
const port=process.env.PORT || 4001;
app.use(express.json());
app.use('/rank', routes);
app.listen(app.get('port'), () => {
    console.log(`Running on port ${port}`);
});