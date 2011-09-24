/**
 * @author KomTak
 */

// コールバック系include
Ti.include("../event/home_event.js");

var aliveLabel1 = Ti.UI.createLabel({
	text:'ボタンを押したら生存報告！！',
	top:100,
	color:'#000033',
	center:this
});
var aliveLabel2 = Ti.UI.createLabel({
	text:'端末を大きく振り上げる事でも生存報告できるぞ',
	top:150,
	color:'#000033',
	center:this
});
var aliveLabel3 = Ti.UI.createLabel({
	text:'つぶやく際に位置情報を付与するぞ',
	top:200,
	color:'#000033',
	center:this
});

var mapView = Ti.Map.createView({
    width: 320,
    height: 240,
    top: 120,
    mapType: Ti.Map.STANDARD_TYPE,
    region:{latitude:40.0, longitude:130, latitudeDelta:30, longitudeDelta:30},
    animate:true,
    regionFit:true,
});
mapView.hide();

var aliveButton = Ti.UI.createButton({
	title:'生存報告！！',
	bottom:0,
	width:'100%'
});
aliveButton.addEventListener('click', sayAlive());

// 余裕があれば加速度センサー
Ti.Accelerometer.removeEventListener('update',postByAccelerometer(aliveButton));

// コントロール配置
var win_home = Ti.UI.currentWindow;
win_home.add(aliveLabel1);
win_home.add(aliveLabel2);
win_home.add(aliveLabel3);
win_home.add(aliveButton);
// win_home.add(mapView);
