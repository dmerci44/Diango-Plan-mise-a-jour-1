var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_polymanjabaphaseB_1 = new ol.format.GeoJSON();
var features_polymanjabaphaseB_1 = format_polymanjabaphaseB_1.readFeatures(json_polymanjabaphaseB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polymanjabaphaseB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polymanjabaphaseB_1.addFeatures(features_polymanjabaphaseB_1);
var lyr_polymanjabaphaseB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polymanjabaphaseB_1, 
                style: style_polymanjabaphaseB_1,
                popuplayertitle: 'poly manjaba phase B',
                interactive: true,
                title: '<img src="styles/legend/polymanjabaphaseB_1.png" /> poly manjaba phase B'
            });
var format_Manjaba_2 = new ol.format.GeoJSON();
var features_Manjaba_2 = format_Manjaba_2.readFeatures(json_Manjaba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manjaba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manjaba_2.addFeatures(features_Manjaba_2);
var lyr_Manjaba_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Manjaba_2, 
                style: style_Manjaba_2,
                popuplayertitle: 'Manjaba',
                interactive: true,
                title: '<img src="styles/legend/Manjaba_2.png" /> Manjaba'
            });
var format_RUISDIA_3 = new ol.format.GeoJSON();
var features_RUISDIA_3 = format_RUISDIA_3.readFeatures(json_RUISDIA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUISDIA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUISDIA_3.addFeatures(features_RUISDIA_3);
var lyr_RUISDIA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUISDIA_3, 
                style: style_RUISDIA_3,
                popuplayertitle: 'RUIS DIA',
                interactive: true,
                title: '<img src="styles/legend/RUISDIA_3.png" /> RUIS DIA'
            });
var format_diangopoly_4 = new ol.format.GeoJSON();
var features_diangopoly_4 = format_diangopoly_4.readFeatures(json_diangopoly_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_diangopoly_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_diangopoly_4.addFeatures(features_diangopoly_4);
var lyr_diangopoly_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_diangopoly_4, 
                style: style_diangopoly_4,
                popuplayertitle: 'diango poly',
                interactive: true,
                title: '<img src="styles/legend/diangopoly_4.png" /> diango poly'
            });
var format_numdiango_5 = new ol.format.GeoJSON();
var features_numdiango_5 = format_numdiango_5.readFeatures(json_numdiango_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_numdiango_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_numdiango_5.addFeatures(features_numdiango_5);
var lyr_numdiango_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_numdiango_5, 
                style: style_numdiango_5,
                popuplayertitle: 'num diango.',
                interactive: true,
                title: '<img src="styles/legend/numdiango_5.png" /> num diango.'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_polymanjabaphaseB_1.setVisible(true);lyr_Manjaba_2.setVisible(true);lyr_RUISDIA_3.setVisible(true);lyr_diangopoly_4.setVisible(true);lyr_numdiango_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_polymanjabaphaseB_1,lyr_Manjaba_2,lyr_RUISDIA_3,lyr_diangopoly_4,lyr_numdiango_5];
lyr_polymanjabaphaseB_1.set('fieldAliases', {'ma': 'ma', });
lyr_Manjaba_2.set('fieldAliases', {'conf': 'conf', });
lyr_RUISDIA_3.set('fieldAliases', {'F': 'F', });
lyr_diangopoly_4.set('fieldAliases', {'di': 'di', });
lyr_numdiango_5.set('fieldAliases', {'NN': 'NN', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_polymanjabaphaseB_1.set('fieldImages', {'ma': '', });
lyr_Manjaba_2.set('fieldImages', {'conf': '', });
lyr_RUISDIA_3.set('fieldImages', {'F': '', });
lyr_diangopoly_4.set('fieldImages', {'di': '', });
lyr_numdiango_5.set('fieldImages', {'NN': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_polymanjabaphaseB_1.set('fieldLabels', {'ma': 'no label', });
lyr_Manjaba_2.set('fieldLabels', {'conf': 'no label', });
lyr_RUISDIA_3.set('fieldLabels', {'F': 'inline label - always visible', });
lyr_diangopoly_4.set('fieldLabels', {'di': 'inline label - always visible', });
lyr_numdiango_5.set('fieldLabels', {'NN': 'inline label - visible with data', });
lyr_numdiango_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});