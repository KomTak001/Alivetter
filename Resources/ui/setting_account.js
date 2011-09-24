/**
 * @author KomTak
 */

// コールバック系include
Ti.include("../event/setting_account_event.js");

var infoLabel = Ti.UI.createLabel({
	text:'Twitterアカウント情報を入力してください',
	top:50,
	color:'#000033',
	center:this
});

var idLabel = Ti.UI.createLabel({
	text:'アカウントID：',
	top:100,
	color:'#000033',
	left:0,
	width:120
});
var passwdLabel = Ti.UI.createLabel({
	text:'パスワード：',
	top:150,
	color:'#000033',
	left:0,
	width:120
});

var idText = Ti.UI.createTextField({
	hintText:'twitterアカウント',
	top:idLabel.top,
	left:idLabel.width + 10
});
var passwdText = Ti.UI.createTextField({
	hintText:'twitterパスワード',
	top:passwdLabel.top,
	left:idLabel.width + 10,
	passwordMask:true
});

var saveAccountButton = Ti.UI.createButton({
	title:'保存',
	bottom:0,
	width:'100%'
});
saveAccountButton.addEventListener('click', saveAccount(idText, passwdText));

// コントロール配置
var win_setting_account = Ti.UI.currentWindow;
win_setting_account.add(infoLabel);
win_setting_account.add(idLabel);
win_setting_account.add(idText);
win_setting_account.add(passwdLabel);
win_setting_account.add(passwdText);
win_setting_account.add(saveAccountButton);
