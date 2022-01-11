"use strict";

const Underscore = require("underscore");
const Shortid = require("shortid");
const ExtractValues = require("extract-values");
const Moment = require("moment");
const UUID = require("uuid");

module.exports = {
    Underscore: () => { return Underscore; },

    Shortid: () => { return Shortid; },

    Extractvalues: () => { return ExtractValues; },

    Moment: () => { return Moment; },

    UUIDv1: () => { return UUID.v1; },

    WaitSeconds: (seconds) => {
        return async function(seconds) {
            return new Promise((resolved, reject) => {
                setTimeout(() => { resolved(); }, seconds * 1000);
            });        
        }
    },

    ComponentsConfig: () => {
        return global.Mantra.MantraConfig.ComponentsConfig;
    },

    Prettyjson: (json) => {
        return (json) => JSON.stringify(json, null, 2);
    },
 
    /*
     * Returns the IP from the request object
     */
    GetIpFromRequest: (req) => {
        return (req) => {
            let requestIp = req.ip;
        
            if (requestIp.substr(0, 7) == "::ffff:") {
                requestIp = requestIp.substr(7)
            }
            
            return requestIp;
        }       
    }
}