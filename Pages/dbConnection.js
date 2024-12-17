// const sql = require('mssql');
const con = require('mssql');

export class DBConnection {
    constructor(page) {
        this.page = page;
    }
    async getconnection(query) {
        const dbConfig = {
            user: 'onedatadw_read',
            password: 'Onedata@123',
            server: 'onedatadw-prod.database.windows.net',
            database: 'onedatadw',
            options: {
                encrypt: true,
                trustServerCertificate: false,
                connectionTimeout: 60000, // 60 seconds
                requestTimeout: 1000000,  // 5 minutes
            },
            debug: true,
        };

        let pool;
        
        try {
            console.log('Attempting to connect to the database...');
            pool = await con.connect(dbConfig);
            console.log('Connected to the database.');
            console.time('queryTime');
            const startTime = Date.now();
            const result = await pool.request().query(query);
            const endTime = Date.now();
            // console.timeEnd('queryTime');
            const time = endTime - startTime;
            const timetaken = time / 1000 ; // time In sec    
            console.log('{Time Taken}:',timetaken);
            console.log('Query results:', result.recordset);
        } catch (error) {
            console.error('Error executing the query:', error);
        } finally {
            try {
                if (pool) await pool.close();
                console.log('Connection closed.');
            } catch (closeError) {
                console.error('Error closing the connection:', closeError);
            }
        } 
    }
}