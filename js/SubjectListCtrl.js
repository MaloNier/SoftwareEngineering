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
				$.getJSON('../php/Subject.php', { method: 'getTitle', id: id},
					function(subject) {
						$('#subjects').append('<li><a class="subject" id="sub_'+subject['id']+'" href="#" click>'+subject['title']+'</a></li>');
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
	var src = new ShowReviewCtrl();
	subList = src.show(id);
	alert('subList:'+subList);
}

/**
 * レビューを投稿
 *
 * @param {int} id 科目ID
 * @return void
 */
SubjectListCtrl.prototype.new = function(id) {}