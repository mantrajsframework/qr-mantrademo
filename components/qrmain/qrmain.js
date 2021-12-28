"use strict";

class qrmainStarter {
    async onStart(Mantra) {
    }
}

module.exports = () => {
    return {
        Start: new qrmainStarter()
    };
}