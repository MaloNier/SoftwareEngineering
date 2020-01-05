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
	$.when(
		$.getJSON('../php/Subject.php', { method: 'getTitle', id: id}),
		//$.getJSON('../php/Student.php', { method: 'getReviewText', id: id})
	)
	.done(
		function(subject, reviewText) {
			title = subject['title'];
			alert('title:'+title);

			review = reviewText;
			alert('review:'+review);
		}
	);
	//$.ajaxSetup({async: true});
	return [title, review];
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