/**
 * レビュー文の編集を行うコントロールクラス
 *
 * @method {void} new
 * @method {void} edit
 * @method {void} save
 * @method {void} cancel
 */
function EditReviewCtrl() {}

/**
 * 新規レビュー文を投稿する
 *
 * @param {int} id 科目ID
 * @return {void}
 */
EditReviewCtrl.prototype.new = function(id) {
		// 科目のタイトルを取得
		$.ajaxSetup({async: false}); // 動作を同期に
		var title = '';
		$.getJSON('../php/Subject.php', { method: 'getTitle', id: id},
			function(subject) {
				title = subject['title'];
			}
		);

		// EditReview.htmlにQUERY_STRINGを付加してページ遷移
		location.href = '../html/EditReview.html'+
			'?id='+id+
			'&title='+title+
			'&review=';
		$.ajaxSetup({async: true}); // 動作を非同期に
}

/**
 * レビュー文を編集する
 *
 * @param {int} id 科目ID
 * @return {void}
 */
EditReviewCtrl.prototype.edit = function(id) {
	// 科目のタイトルを取得
	$.ajaxSetup({async: false}); // 動作を同期に
	var title = '';
	$.getJSON('../php/Subject.php', { method: 'getTitle', id: id},
		function(subject) {
			title = subject['title'];
		}
	);

	// 科目のレビューをhtmlから取得
	var review = $('#review').html();

	// EditReview.htmlにQUERY_STRINGを付加してページ遷移
	location.href = '../html/EditReview.html'+
		'?id='+id+
		'&title='+title+
		'&review='+review;
	$.ajaxSetup({async: true}); // 動作を非同期に
}

/**
 * レビュー文を投稿・保存する
 *
 * @param {int} id 科目ID
 * @param {string} text レビュー文
 * @return {void}
 */
EditReviewCtrl.prototype.save = function(id, text) {
	$.ajaxSetup({async: false}); // 動作を同期に

	$.getJSON('../php/Student.php', { method: 'setReviewText', id: id, text: text}, function() {});
	if(text==='') { // 何もレビューが書かれていない場合
		alert('Please Enter Some Review.')
	}
	else { // 何かしらのレビューが書かれている場合
	alert('new Review: '+text);
	location.href = '../html/SubjectList.html';
	}

	$.ajaxSetup({async: true}); // 動作を非同期に

}

/**
 * レビュー文編集を中断する
 *
 * @return {void}
 */
EditReviewCtrl.prototype.cancel = function() {
	location.href = '../html/SubjectList.html';
}