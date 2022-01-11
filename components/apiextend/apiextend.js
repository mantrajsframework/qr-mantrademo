"use strict";

const ApiextendHandlers = require("./apiextendHandlers");

class ApiextendStarter {
    async onStart(MantraAPI) {
        MantraAPI.Hooks("apiextend")
            .ApiExtend([{
                Name: "Underscore",
                Handler: ApiextendHandlers.Underscore
            }, {
                Name: "Shortid",
                Handler: ApiextendHandlers.Shortid
            }, {
                Name: "Extractvalues",
                Handler: ApiextendHandlers.Extractvalues
            }, {
                Name: "Moment",
                Handler: ApiextendHandlers.Moment
            }, {
                Name: "UUIDv1",
                Handler: ApiextendHandlers.UUIDv1
            }, {
                Name: "WaitSeconds",
                Handler: ApiextendHandlers.WaitSeconds
            }, {
                Name: "ComponentsConfig",
                Handler: ApiextendHandlers.ComponentsConfig
            }, {
                Name: "PrettyJson",
                Handler: ApiextendHandlers.Prettyjson
            }, {
                Name: "GetIpFromRequest",
                Handler: ApiextendHandlers.GetIpFromRequest
            }]);
    }
}

module.exports = () => {
    return {
        Start: new ApiextendStarter()
    };
}