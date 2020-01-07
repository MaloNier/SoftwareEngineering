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
EditReviewCtrl.prototype.new = function(id) {}

/**
 * レビュー文を編集する
 *
 * @param {int} id 科目ID
 * @return {void}
 */
EditReviewCtrl.prototype.edit = function(id) {
	// 科目のタイトルを取得
	var title = '';
	$.getJSON('../php/Subject.php', { method: 'getTitle', id: id},
		function(subject) {
			title = subject['title'];
		}
	);

	// EditReview.htmlにQUERY_STRINGを付加してページ遷移
	location.href = '../html/EditReview.html'+
		'?id='+id+
		'&title='+title;
}

/**
 * レビュー文を投稿・保存する
 *
 * @param {int} id 科目ID
 * @param {string} text レビュー文
 * @return {void}
 */
EditReviewCtrl.prototype.save = function(id, text) {}

/**
 * レビュー文編集を中断する
 *
 * @return {void}
 */
EditReviewCtrl.prototype.cancel = function() {}