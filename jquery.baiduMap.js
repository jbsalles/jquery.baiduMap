 /**
 * jquery.baidumap.js v0.1
 * Author: Jean-Baptiste Salles
 * Date: 7/28/2016
 */
 ;(function ( $ ) {
    $.fn.baiduMap = function(address) {
        var map = new BMap.Map(this[0]);    
        map.centerAndZoom(new BMap.Point(), 1);    
        var myGeo = new BMap.Geocoder();    
		myGeo.getPoint(address, function(point){    
        
		if (point) {    
              map.centerAndZoom(point, 16);    
              map.addOverlay(new BMap.Marker(point));    
           }    
        });
        return this;
    };
}( jQuery ));