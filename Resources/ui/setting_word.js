/**
 * @author KomTak
 */

// コールバック系include
Ti.include("../event/setting_word_event.js");

var infoLabel = Ti.UI.createLabel({
	text:'生存報告用のメッセージを入力してね',
	top:50,
	color:'#000033',
	center:this
});

var wordText = Ti.UI.createTextField({
	hintText:'例：今！ここで！！生きています！！！',
	top:infoLabel.top + 100,
	width:'100%'
});

var saveWordButton = Ti.UI.createButton({
	title:'保存',
	bottom:0,
	width:'100%'
});
saveWordButton.addEventListener('click', saveWord(wordText));

// コントロール配置
var win_setting_word = Ti.UI.currentWindow;
win_setting_word.addEventListener('open', getWord(wordText));

win_setting_word.add(infoLabel);
win_setting_word.add(wordText);
win_setting_word.add(saveWordButton);
