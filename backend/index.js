const express=require('express');
const app=express();
const users=require('./routes/users.js');
const grocery=require('./routes/abarrote.js');
const domiciliary=require('./routes/Domiciliario.js');
const product=require('./routes/producto.js');
const car=require('./routes/carrito.js');
const port=process.env.PORT || 4001;
    app.use(express.json());
    app.use('/usuarios', users);
    app.use('/abarrote', grocery);
    app.use('/domiciliario', domiciliary);
    app.use('/producto', product);
    app.use('/carrito', car);
app.listen(app.get('port'), () => {
    console.log(`Running on port ${port}`);
});