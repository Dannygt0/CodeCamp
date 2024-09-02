const Connection = require('tedious').Connection;
const config ={
    server: "DanielMunoz",
    authentication: {
        type:'default',
        options: {
            userName:"ejemplo",
            password:"123456789"
        }
    },
    options:{
        port: 1433,
        database: "proyecto",
        trustServerCertificate: true
    }
}
const connection = new Connection(config);
connection.connect();
connection.on('connect',(err)=>{
    if(err){
        console.log("Error de Conexion");
        throw err;
    }
    executeStatement();
});
function executeStatement(){
    console.log("Conectado a la base de datos");
}