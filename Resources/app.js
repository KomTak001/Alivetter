// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#FFFFDD');

// menu作成(Android専用)
var activity = Ti.Android.currentActivity;
activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;

	// ----------------------------------------------------------------------
	// home用menu
    var menuItem_home = menu.add({
    	title: "home"
    });
    menuItem_home.addEventListener("click", function(e) {
    	var win_home = Ti.UI.createWindow({
    		url:'ui/home.js',
    		title:'Alivetter',
    		backgroundColor:'#FFFFDD'
    	});
    	win_home.open();
    });
	// ----------------------------------------------------------------------
	// ----------------------------------------------------------------------
	// アカウント情報設定用menu
    // var menuItem_setting_account = menu.add({
    	// title: "twitter"
    // });
    // menuItem_setting_account.addEventListener("click", function(e) {
    	// var win_setting_account = Ti.UI.createWindow({
    		// url:'ui/setting_account.js',
    		// title:'Alivetter',
    		// backgroundColor:'#FFFFDD'
    	// });
    	// win_setting_account.open();
    // });
	// ----------------------------------------------------------------------
	// ----------------------------------------------------------------------
	// 報告内容設定用menu
    var menuItem_setting_word = menu.add({
    	title: "報告内容"
	});
    menuItem_setting_word.addEventListener("click", function(e) {
    	var win_setting_word = Ti.UI.createWindow({
    		url:'ui/setting_word.js',
    		title:'Alivetter',
    		backgroundColor:'#FFFFDD'
    	});
    	win_setting_word.open();
    });
	// ----------------------------------------------------------------------
};

// home画面表示
var win_home = Ti.UI.createWindow({
	url:'ui/home.js',
	title:'Alivetter'
});
win_home.open();
