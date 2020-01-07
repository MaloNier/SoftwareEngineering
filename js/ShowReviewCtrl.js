/**
 * レビュー文を表示するコントロールクラス
 *
 * @method {void} show
 * @method {void} edit
 * @method {void} close
 */
function ShowReviewCtrl() {}

/**
 * レビュー文を表示
 * @param {int} id 科目ID
 * @return void
 */
ShowReviewCtrl.prototype.show = function(id) {
	var title = '';
	var review = '';

	$.ajaxSetup({async: false}); // 動作を同期に
	// 科目名を取得
	$.getJSON('../php/Subject.php', { method: 'getTitle', id: id},
		function(subject) {
			title = subject['title'];
		}
	);

	// 科目のレビューを取得
	$.getJSON('../php/Student.php', { method: 'getReviewText', id: id},
		function(reviewText) {
			review = reviewText;
		}
	)

	location.href = '../html/ShowReview.html'+
		'?id='+id+
		'&title='+title+
		'&review='+review;
	$.ajaxSetup({async: true}); // 動作を非同期に
}

/**
 * レビュー文を編集
 * @param {int} id 科目ID
 * @return void
 */
ShowReviewCtrl.prototype.edit = function(id) {
	var editReviewCtrl = new EditReviewCtrl();
	editReviewCtrl.edit(id);
}

/**
 * レビュー文表示を終了
 *
 * @return void
 */
ShowReviewCtrl.prototype.close = function() {}