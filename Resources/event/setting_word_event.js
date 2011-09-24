/**
 * @author KomTak
 */
// 定数系include
Ti.include("../event/constant.js");

function saveWord(wordText) {
	return function(event) {
		// 報告内容保存
		Ti.App.Properties.setString(wordKey, wordText.value);
		alert('報告内容を保存しました:' + wordText.value);
	}
}

function getWord(wordText) {
	return function(event) {
		// 報告内容復元
		if(Ti.App. Properties.hasProperty(wordKey)) {
			wordText.value = Ti.App.Properties.getString(wordKey);
		}
	}
}
