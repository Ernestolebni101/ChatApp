const _db = require('mongoose');
_db.Promise = global.Promise;

const connection = async (url) => {
    await _db.connect(url, {
        useNewUrlParser: true,
    });
    console.log('[db-connection]: Succesfully connected');
}

module.exports = connection;