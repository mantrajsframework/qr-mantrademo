"use strict";

const QRCode = require("qrcode");

module.exports = {
    /*
     * API qrcodegenerator.getqrcodeasurlimage
     * Returns the qr code for the url indicated as parameter in image format
     *
     */
    GetQRCodeAsUrlImage: async (MantraAPI, url) => {
        var opts = {
            errorCorrectionLevel: 'H',
            type: 'image/jpeg',
            width: 960,
            margin: 1,
            color: {
              dark:"#0C0C0C",
              light:"#FFFFFF"
            }
          };

        return GetQRCode( opts, url );
    }
}

async function GetQRCode( opts, urlToCodify ) {
    return new Promise( (resolve,reject) => {
        QRCode.toDataURL(urlToCodify, opts, function (err, url) {
            if (err) reject(err);
            else {
                resolve(url);
            }
        })
    });
}