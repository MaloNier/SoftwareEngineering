<?php
header('content-type: application/json; charset=utf-8');
ini_set('display_errors',1);

require_once 'Review.php';
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
	public function getReviewText($id) {
		return $this->reviewArray[$id]->getText($id);
	}

	/**
	 * 指定された科目のレビューを登録する
	 *
	 * @param int $id 対象の科目id
	 * @param string $text 登録するレビュー文
	 * @return void
	 */
	public function setReviewText($id, $text) {
		$this->reviewArray[$id]->setText($text);
	}
}

$st = new Student();
$st->reviewArray = [
	new Review(0),
	new Review(1),
	new Review(2),
	new Review(3),
	new Review(4),
	new Review(5),
	new Review(6),
	new Review(7),
	new Review(8),
	new Review(9)
];

if($_GET['method'] === 'subjects') {
	echo json_encode($st->subjects());
}
else if($_GET['method'] === 'getReviewText') {
	$id = (int)$_GET['id'];
	$review = $st->getReviewText($id);
	echo json_encode($review);
}
else if($_GET['method'] === 'setReviewText') {
	$id = (int)$_GET['id'];
	$text = urldecode($_GET['text']);
	$st->setReviewText($id, $text);
}