/**
 * Created by ddxx on 2016/12/15.
 */
var L = require('leaflet');
var esri = require('esri-leaflet');
var Proj4 = require('./proj4leaflet.js');

function createMap() {
    var crs = new Proj4.CRS("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs", {
        origin: [-400, 400],
        resolutions: [
            0.023794610058302804,
            0.00951784402332112,
            0.00475892201166056,
            0.0035691915087454206,
            0.00237946100583028,
            0.0017845957543727103,
            0.00118973050291514,
            5.9486525145757E-4,
            2.97432625728785E-4,
            1.5228550437313792E-4,
            7.614275218656896E-5,
            3.807137609328448E-5,
            1.903568804664224E-5,
            9.51784402332112E-6,
            4.75892201166056E-6,
            2.37946100583028E-6
        ]
    });
    var map = L.map('map',
        {
            crs: crs,
            zoom:3,
            minZoom:1,
            maxZoom:12,
            center:[101.74483413089341,30.009789865382047]
        }
        );
    esri.TiledMapLayer('http://10.87.61.14:6080/arcgis/rest/services/Momap/MapServer').addTo(map);
}

createMap();