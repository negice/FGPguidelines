export default class Swiper {
    /**
    * Plugin init
    * @function init
    * @param {Object} mapApi the viewer api
    */
    private layerNb: number = 0; 
    init(mapApi: any) {
        this.mapApi = mapApi;

        // get swiper config
        this.config = this._RV.getConfig('plugins').swiper;
        this.config.language = this._RV.getCurrentLang();

        this.mapApi.layersObj.layerAdded.subscribe((addedLayer: any) => {
            // check if loaded layer is inside the config
            this.config.layers.find((layer) => { if (layer.id === addedLayer.id) { this.layerNb++; }});
        });

        // get ESRI LayerSwipe dependency
        let myBundlePromise = (<any>window).RAMP.GAPI.esriLoadApiClasses([['esri/dijit/LayerSwipe', 'layerSwipe']]);
        myBundlePromise.then(myBundle => {
            const inter = setInterval(() => {
                // if all layers require by the plugin are loaded, start it
                if (this.layerNb === this.config.layers.length) {
                    this.setSwiper(myBundle, this.config);
                    clearInterval(inter);
                }
            }, 500);
        });
    }

    /**
    * Set the swiper
    * @function setSwiper
    * @param {Object} myBundle the ESRI dependecy
    * @param {Config} swiper the swiper configuration
    */
    setSwiper(myBundle: any, swiper: config): void {
        // add layers
        const layers = [];
        let len = swiper.layers.length;
        while (len--) {
            layers.push(this.mapApi.esriMap.getLayer(swiper.layers[len].id));
        }

        // add swiper div
        this.mapApi.mapDiv.find('rv-shell').find('.rv-esri-map').prepend('<div id="rv-swiper-div"></div>');

        // create swiper
        const swipeWidget = new myBundle.layerSwipe({
            type: swiper.type,
            map: this.mapApi.esriMap,
            layers: layers
        }, 'rv-swiper-div');

        let that = this;
        swipeWidget.on('load', function() {
            const item = that.mapApi.mapDiv.find('#rv-swiper-div .vertical')[0];

            // set tabindex and WCAG keyboard offset
            item.tabIndex = -3;
            item.addEventListener('keydown', that.closureFunc(function(swipeWidget, item, off, evt) {
                let value = parseInt(item.style.left);
                const width = parseInt(that.mapApi.mapDiv.find('#rv-swiper-div').width()) - 10;

                if (evt.keyCode === 37 && value >= 0) {
                    // left 37
                    value = (value > off) ? value -= off : 0;
                } else if (evt.keyCode === 39 && value <= width) {
                    // right 39
                    value = (value <= width - off) ? value += off : width;
                }
                item.style.left = String(value + 'px');
                swipeWidget.swipe();
            }, swipeWidget, item, swiper.keyboardOffset));

            // change text if french
            if (that._RV.getCurrentLang() === 'fr-CA') {
                item.title = 'Faites glisser pour voir les couches sous-jacentes';
            }
        });

        swipeWidget.startup();
    }

    /**
    * Closure function to manage variables scope
    * @function closureFunc
    * @param {Function} fn function to applyt the closure to
    * @param {Object[]} params array of variables to set
    */
    closureFunc = function(fn: any, ...params: number[]) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            // Clone the array (with slice()) and append additional arguments
            // to the existing arguments.
            var newArgs = args.slice();
            newArgs.push.apply(newArgs, arguments);
            return fn.apply(this, newArgs);
        };
    }
}

interface config {
    type: string,
    keyboardOffset: number,
    layers: layer[]
}

interface layer {
    id: string
}

export default interface Swiper {
    mapApi: any,
    _RV: any,
    config: any
}

(<any>window).swiper = Swiper;