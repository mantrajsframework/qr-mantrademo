"use strict";

const QrcodegeneratorApiHandlers = require("./qrcodegeneratorApiHandlers");

class QrcodeStarter {
    async onStart(MantraAPI) {
        MantraAPI.Hooks("qrcodegenerator")
            .Api([{
                APIName: "getqrcodeasurlimage",
                APIHandler: QrcodegeneratorApiHandlers.GetQRCodeAsUrlImage
            }]);
    }
}

module.exports = () => {
    return {
        Start: new QrcodeStarter()
    };
}