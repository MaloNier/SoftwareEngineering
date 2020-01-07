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
							$('#subjects').append('<li><a class="subject" id="sub_'+subject['id']+'" href="#" click>'+subject['title']+'</a></li>');
						}
						else {
							$('#subjects').append('<li><a class="subject" id="sub_'+subject['id']+'" href="#" click>'+subject['title']+'</a> <span class="badge badge-danger">レビューあり</span></li>');
						}
					}
				);
			}
		}
	);
}

/**
 * レビューを表示
 *
 * @param {int} id 科目ID
 * @return void
 */
SubjectListCtrl.prototype.show = function(id) {
	$.ajaxSetup({async: false}); // 動作を同期に

	var src = new ShowReviewCtrl();
	subList = src.show(id); // 科目名とレビューを取得
	location.href = '../html/ShowReview.html'+
		'?id='+subList['id']+
		'&title='+subList['title']+
		'&review='+subList['review'];

	$.ajaxSetup({async: true}); // 動作を非同期に
}

/**
 * レビューを投稿
 *
 * @param {int} id 科目ID
 * @return void
 */
SubjectListCtrl.prototype.new = function(id) {}