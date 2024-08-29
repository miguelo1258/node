const fs = require('fs')
const { crearArchivo } = require('./helpers/multiplicar')
const argv= require('./config/yargs')
const colors = require('colors')

console.clear()
// const base =3



crearArchivo(argv.b, argv.l,argv.h).then(msg=> console.log(msg.rainbow, 'creado'.rainbow)).catch(
    error => console.log(error) 
)
