const { error } = require('console')
const fs = require('fs')



const crearArchivo = async(base =5, l=false, h=10)=>{
    try{
    
        let salida =''
        let consola=''
    
    
        for(let i=1; i<=h; i++){
            salida +=`${base}x ${i} = ${base *i}\n`
            consola +=`${base}${'x'.green}${i} ${'='.green} ${base *i}\n`
        }
        if (l === true){
            console.log('=============='.green)
            console.log(`tabla del ${base}`.blue)
            console.log('=============='.green)
            console.log(consola)
        }
       
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
    
        return `tabla-${base}.txt`
    }catch(error){throw error}
    }
    

module.exports={
    crearArchivo:crearArchivo
}