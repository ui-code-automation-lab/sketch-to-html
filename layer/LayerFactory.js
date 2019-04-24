const BitmapLayer = require('./Bitmap');
const ShapePathLayer = require('./ShapePath');
const ShapeGroupLayer = require('./ShapeGroup');
const GroupLayer = require('./Group');
const CommonLayer = require('./Common');
const TextLayer = require('./Text');

class Layer {
    constructor () {
        this.layer = {};
        this.parentLayer = {};
        this.selector = '';
        this.imagePath = '';
    }

    getStyle () {
        let finalLayer;
        // console.log('this.layer',this.layer)
        if(ShapePathLayer.isShapePath(this.layer, this.parentLayer)) {
            finalLayer = new ShapePathLayer();
        } else if(this.layer.type == 'ShapeGroup') {
            finalLayer = new ShapeGroupLayer();
        } else if(this.layer.type == 'Group') {
            finalLayer = new GroupLayer();
        } else if(this.layer.type == 'Bitmap') {
            finalLayer = new BitmapLayer();
        } else if(this.layer.type == 'Text') {
            finalLayer = new TextLayer();
        } else if(this.layer.type == 'symbolInstance'){
            if(this.layer.symbolJson){
                let components = require('./../components/renderFactory');
                console.log(components,this.layer.symbolJson,this.layer)
                finalLayer = new components(this.layer.symbolJson.name);
            }else{
                finalLayer = new CommonLayer();
            }
        } else {
            
            finalLayer = new CommonLayer();
        }
        finalLayer.layer = this.layer;
        finalLayer.parentLayer = this.parentLayer;
        finalLayer.imagePath = this.imagePath;
        finalLayer.selector = this.selector;
        return finalLayer.getStyle();
    }

    getHtml (childString) {
        let finalLayer;
        if(ShapePathLayer.isShapePath(this.layer, this.parentLayer)) {
            finalLayer = new ShapePathLayer();
        } else if(this.layer.type == 'ShapeGroup') {
            finalLayer = new ShapeGroupLayer();
        } else if(this.layer.type == 'Group') {
            
            
            finalLayer = new GroupLayer();
        } else if(this.layer.type == 'Bitmap') {
            finalLayer = new BitmapLayer();
        } else if(this.layer.type == 'Text') {
            finalLayer = new TextLayer();
        } else if(this.layer.type == 'symbolInstance'){
            if(this.layer.symbolJson){
                let components = require('./../components/renderFactory');
                console.log(components,this.layer.symbolJson,this.layer)
                finalLayer = new components(this.layer.symbolJson.name);
            }else{
                finalLayer = new CommonLayer();
            }
        } else {
            finalLayer = new CommonLayer();
        }
        finalLayer.layer = this.layer;
        finalLayer.parentLayer = this.parentLayer;
        finalLayer.imagePath = this.imagePath;
        finalLayer.selector = this.selector;
        return finalLayer.getHtml(childString);
    }
}

module.exports = Layer;
