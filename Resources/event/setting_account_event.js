/**
 * @author KomTak
 */

function saveAccount(idText, passwdText) {
	return function(event) {
		// ローカルファイル保存(アカウント情報)
		alert('id:' + idText.value + '\n' + 'passwd:' + passwdText.value);
	}
}
