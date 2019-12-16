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
					function(title) {
						$('#subjects').append('<li>'+title+'</li>');
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
	
}

/**
 * レビューを投稿
 *
 * @param {int} id 科目ID
 * @return void
 */
SubjectListCtrl.prototype.new = function(id) {}