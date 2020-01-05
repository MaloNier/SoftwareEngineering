<?php
/**
 * 科目毎のレビューのエンティティクラス
 *
 * @property int $subjectId 科目ID
 * @property string $text レビュー文
 * @property array $tempReview 課題を満たすためのとりあえずのレビュー
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
		$this->text = $review;
	}

	/**
	 * レビュー文を取得する
	 *
	 * @return string レビュー文
	 */
	public function getText($id) {
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