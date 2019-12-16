<?php
header('content-type: application/json; charset=utf-8');
ini_set('display_errors',1);

/**
 * 学生のエンティティクラス
 *
 * @property int $sutudentNo 学生番号
 * @method int[] $subjects()
 * @method string getReview()
 * @method void setReview()
 */
class Student {
	private $studentNo = 0;

	/**
	 * 履修している科目のidリストを返す
	 *
	 * @return int[] 履修している科目のidリスト
	 */
	public function subjects() {
		$idArray = [0,1,2,3,4,5,6,7,8,9];
		return $idArray;
	}

	/**
	 * 指定された科目のレビューを取得する
	 *
	 * @param int $id 対象の科目id
	 * @return string 対象の科目のレビュー
	 */
	public function getReview($id) {
		return;
	}

	/**
	 * 指定された科目のレビューを登録する
	 *
	 * @param int $id 対象の科目id
	 * @param string $text 登録するレビュー文
	 * @return void
	 */
	public function setReview($d, $text) {
		return;
	}
}

$st = new Student();

if($_GET['method'] === 'subjects') {
	echo json_encode($st->subjects());
}
else {
	echo json_encode(array('error'=>"unknown_method"));
}
exit();