const express=require('express');
const app=express();
const routes=require('./routes');
const users=require('.routes/users');
const grocery=require('routes/abarrote');
const domiciliary=require('routes/domicliario');
const product=require('routes/producto');
const car=require('routes/carrito');
const port=process.env.PORT || 4001;
app.use(express.json());
app.use('/rank', routes);
app.use('/usuarios', users);
app.use('/abarrote', grocery);
app.use('/domiciliario', domiciliary);
app.use('/producto', product);
app.use('/carrito', car);
app.listen(app.get('port'), () => {
    console.log(`Running on port ${port}`);
});
