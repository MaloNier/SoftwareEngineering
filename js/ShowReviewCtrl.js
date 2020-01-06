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

	//$.ajaxSetup({async: false});
	// 科目名を取得
	$.getJSON('../php/Subject.php', { method: 'getTitle', id: id},
		function(subject) {
			title = subject['title'];
			// alert('title: '.title);
		}
	);

	// 科目のレビューを取得
	$.getJSON('../php/Student.php', { method: 'getReviewText', id: id},
		function(reviewText) {
			review = reviewText;
			// alert('review: '.review);
		}
	)
	//$.ajaxSetup({async: true});
	return {title: title, review: review};
}

/**
 * レビュー文を編集
 * @param {int} id 科目ID
 * @return void
 */
ShowReviewCtrl.prototype.edit = function(id) {}

/**
 * レビュー文表示を終了
 *
 * @return void
 */
ShowReviewCtrl.prototype.close = function() {}