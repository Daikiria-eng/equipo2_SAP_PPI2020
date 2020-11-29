const express=require('express');
const cors=require('cors');
const app=express();
const users=require('./routes/users');
const grocery=require('./routes/abarrote');
const domiciliary=require('./routes/Domiciliario');
const product=require('./routes/producto');
const car=require('./routes/carrito');
app.use(cors({origin: '*'}));
app.set('port', process.env.PORT || 4001);
    app.use(express.json());
    app.use('/usuarios', users);
    app.use('/abarrote', grocery);
    app.use('/domiciliario', domiciliary);
    app.use('/producto', product);
    app.use('/carrito', car);
app.listen(app.get('port'), () => {
    console.log(`Running on port ` + app.get('port'));
});