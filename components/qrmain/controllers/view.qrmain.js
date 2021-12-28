"use strict";

module.exports = {
    mainview: async (req,res) => {
        const Mantra = res.MantraAPI;

        Mantra.RenderView( "qrmain.mainview" );
    },

    showqrcode: async (req,res) => {
        const Mantra = res.MantraAPI;
        const url = req.query.url;

        const qrCode = await Mantra.api.qrcodegenerator.getqrcodeasurlimage( Mantra, url );

        Mantra.AddCss("qrmain.qrstyles")
              .AddRenderValue("qrcode", qrCode)
              .RenderView( "qrmain.showqrcode");
    }
}
