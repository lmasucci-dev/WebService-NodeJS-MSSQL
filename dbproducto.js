var config = require('./dbconfig');
const sql = require('mssql');

async function getProducto() {
    try {
        let pool = await sql.connect(config);
        let productos = await pool.request().query("SELECT TOP 1 * FROM PRODUCTO");
        return productos.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducto : getProducto
}