const crypto = require('crypto');

let encrypter = {
    getId() {
        const value = Date.now() + Math.floor(Math.random() * 1E8);
        const hash = crypto.createHash('md5')
            .digest('hex');
        return hash;
    },
    encryptSecret(secret) {
        const cipher = 'trycenter';
        const hash = crypto.createHmac('sha256', cipher)
            .update(secret)
            .digest('hex');
        return hash;
    }
}

module.exports = encrypter;