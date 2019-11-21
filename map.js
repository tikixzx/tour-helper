
mapboxgl.accessToken = 'pk.eyJ1IjoidGlraXh6eCIsImEiOiJjazF1eW5jcXUxNnRrM2xuc3YxMjRqZHljIn0.VD3JHxAeK7LePYX3_6WFPg';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/tikixzx/ck22ttetacdph1cqp1obja4xk'
});


// 6. Show/hide layers
// See example at https://www.mapbox.com/mapbox-gl-js/example/toggle-layers/
 var layers = [  // an array of the layers you want to include in the layers control (layers to turn off and on)

        // [layerMachineName, layerDisplayName]
        // layerMachineName is the layer name as written in your Mapbox Studio map layers panel
        // layerDisplayName is the way you want the layer's name to appear in the layers control on the website
        ['cafe', 'cafe'],                      // layers[0]
        ['cville-parks', 'Parks'],                              // layers[1][1] = 'Parks'
        ['cville-bike-lanes', 'Bike Lanes'],     
        ['cville-bus-stops-heatmap', 'Bus Stop Heatmap'],
        ['background', 'Map background']
        // add additional live data layers here as needed
    ]; 

    // functions to perform when map loads
    map.on('load', function () {
        
        
        for (i=0; i<layers.length; i++) {

            // add a button for each layer
            $("#layers-control").append("<a href='#' class='active button-default' id='" + layers[i][0] + "'>" + layers[i][1] + "</a>"); // see http://api.jquery.com/append/
        }

        // show/hide layers when button is clicked
        $("#layers-control>a").on('click', function(e) {

                var clickedLayer = e.target.id;

                e.preventDefault();
                e.stopPropagation();

                var visibility = map.getLayoutProperty(clickedLayer, 'visibility');  // see https://www.mapbox.com/mapbox-gl-js/api/#map#getlayoutproperty
                console.log(visibility);

                if (visibility === 'visible') {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');  // see https://www.mapbox.com/mapbox-gl-js/api/#map#setlayoutproperty
                    $(e.target).removeClass('active');
                } else {
                    $(e.target).addClass('active');
                    map.setLayoutProperty(clickedLayer, 'visibility', 'visible'); // see https://www.mapbox.com/mapbox-gl-js/api/#map#setlayoutproperty
                }
        });
    });
