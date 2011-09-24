/**
 * @author KomTak
 */
// 定数系include
Ti.include("../event/constant.js");

var latitude;
var longitude;

function sayAlive() {
	return function(event) {
		// GPS情報取得
		// ローカルファイル読み込み(アカウント情報)
		// ローカルファイル読み込み(報告内容)
		// twitter投稿
		// alert(event);

		Titanium.Geolocation.purpose = 'Twitter投稿のため';
	    Titanium.Geolocation.getCurrentPosition(
	        function(e) {
	            if (!e.success || e.error)
	            {
	                alert('位置情報が取得できませんでした\n' + e + '\n'+ e.error);
	                
		            latitude = 35.6;
		            longitude = 139.5;
	            } else {
		            latitude = e.coords.latitude;
		            longitude = e.coords.longitude;
	            }
	            // var currentPos = Titanium.Map.createAnnotation(
	                // {
	                    // latitude:latitude,
	                    // longitude:longitude,
	                    // title:"現在地",
	                    // pincolor:Titanium.Map.ANNOTATION_GREEN,
	                    // animate:true
	                // }
	            // );
	            // mapview.addAnnotation(currentPos);
	            // mapview.show();
	            // mapview.setLocation(
	                // {
	                    // latitude:latitude,
	                    // longitude:longitude,
	                    // latitudeDelta:0.01,
	                    // longitudeDelta:0.01
	                // }
	            // );
	        }
	    );
	    
	    var message = '今！ここで！！生きています！！！';
		if(Ti.App.Properties.hasProperty(wordKey)) {
			message = Ti.App.Properties.getString(wordKey);
		}
		tweet(message);
	}
}

// TwitterAPI_Initialize
Ti.include("../lib/twitter_api.js");
Ti.include("twitterKeys.js");

function tweet(message) {
	
	//initialization_TwitterAPI
	Ti.App.twitterApi = new TwitterApi({
	    consumerKey:myConsumerKey,
	    consumerSecret:myConsumerSecret
	});
	var twitterApi = Ti.App.twitterApi;
	twitterApi.init();

    var params = {status: message};
    if (latitude && longitude) {
        params['lat']  = latitude;
        params['long'] = longitude;
    }
    twitterApi.statuses_update(
        {
            onSuccess: function(responce){
                alert('tweet success');
                Ti.API.info(responce);
            },
            onError: function(error){
                Ti.API.error(error);
            },
            parameters:params
        }
    );
}


// 加速度センサー
function postByAccelerometer(aliveButton) {
	// ある程度勢い良く上に上がったら
	return function(e) {
		if(Math.abs(e.x) > 1.2
		|| Math.abs(e.y) > 1.2
		|| Math.abs(e.z) > 1.2) {
			aliveButton.fireEvent('click');
		}
	};
}
