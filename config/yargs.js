const { option } = require('yargs')

const argv = require('yargs')
            .option('b',{
               alias:'base',
               type:'number',
               demandOption:true,
               describe:'Es la base de la tabla'

            }).option('l',{
                alias:'listar',
                type:'boolean',
                demandOption:false,
                default:false,
                describe:'muestra la tabla en consola'
 
             }).option('h',{
                alias:'hasta',
                type:'number',
                demandOption:false,
                default:10,
                describe:'hasta donde va la tabla'
 
             })
            .check((argv, options)=>{
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true
            })
            .argv


module.exports= argv