<?php
header('content-type: application/json; charset=utf-8');
ini_set('display_errors',1);

require 'Review.php';
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
		return $this->tempReview[$id].getText($id);
	}

	/**
	 * 指定された科目のレビューを登録する
	 *
	 * @param int $id 対象の科目id
	 * @param string $text 登録するレビュー文
	 * @return void
	 */
	public function setReview($id, $text) {
		return;
	}
}

$st = new Student();
$st->tempReview = [
	new Review(0, 'temp00'),
	new Review(1, 'temp01'),
	new Review(2, 'temp02'),
	new Review(3, 'temp03'),
	new Review(4, 'temp04'),
	new Review(5, 'temp05'),
	new Review(6, 'temp06'),
	new Review(7, 'temp07'),
	new Review(8, 'temp08'),
	new Review(9, 'temp09')
];

if($_GET['method'] === 'subjects') {
	echo json_encode($st->subjects());
}
else if($_GET['method'] === 'getReviewText') {
	$id = $_GET['id'];
	$review = $st->getReview($id);
	echo json_encode($review);
}
exit();