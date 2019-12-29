<?php
/**
 * 科目毎のレビューのエンティティクラス
 *
 * @property int $subjectId 科目ID
 * @property string $text レビュー文
 * @method string getText()
 * @method void setText()
 */
class Review {
	private $subjectId;
	private $text;

	/**
	 * コンストラクタ
	 *
	 * @param int $subjectId 科目ID
	 * @param string $review レビュー文
	 */
	function __construct($subjectId, $review) {
		$this->subjectId = $subjectId;
		$this->review = $review;
	}

	/**
	 * レビュー文を取得する
	 *
	 * @return string レビュー文
	 */
	public function getText() {
		return $text;
	}

	/**
	 * レビュー文を登録する
	 *
	 * @return void
	 */
	public function setText($text) {
		$this->text = $text;
	}
}

$sbReview = [
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