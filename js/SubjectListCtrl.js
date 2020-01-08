/**
 * 履修科目一覧を表示するコントロールクラス
 *
 * @method {void} showList
 * @method {void} show
 * @method {void} new
 */
function SubjectListCtrl() {}

/**
 * 科目一覧を表示
 *
 * @return void
 */
SubjectListCtrl.prototype.showList = function() {
	$.ajaxSetup({async: false}); // 動作を同期に
	$.getJSON('../php/Student.php', { method: 'subjects'},
		function(json) {
			for(var id of json) {
				var review = '';
				// 科目のレビューを取得して有無を確認
				$.getJSON('../php/Student.php', { method: 'getReviewText', id: id},
					function(reviewText) {
						review = reviewText;
					}
				);

				// 表示
				$.getJSON('../php/Subject.php', { method: 'getTitle', id: id},
					function(subject) {
						if(review == '') {
							$('#subjects').append('<li class="list-group-item"><a class="subject" id="sub_'+subject['id']+'" href="#" click>'+subject['title']+'</a></li>');
						}
						else {
							$('#subjects').append('<li class="list-group-item"><a class="subject_reviewed" id="sub_'+subject['id']+'" href="#" click>'+subject['title']+'</a> <span class="badge badge-danger">レビューあり</span></li>');
						}
					}
				);
			}
		}
	);
	$.ajaxSetup({async: false}); // 動作を非同期に
}

/**
 * レビューを表示
 *
 * @param {int} id 科目ID
 * @return void
 */
SubjectListCtrl.prototype.show = function(id) {
	var src = new ShowReviewCtrl();
	src.show(id); // 科目名とレビューを取得
}

/**
 * レビューを投稿
 *
 * @param {int} id 科目ID
 * @return void
 */
SubjectListCtrl.prototype.new = function(id) {
	var erc = new EditReviewCtrl();
	erc.new(id);
}