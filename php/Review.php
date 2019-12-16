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
	 * レビュー文を取得する
	 *
	 * @return string レビュー文
	 */
	public function getText() {
		return;
	}

	/**
	 * レビュー文を登録する
	 *
	 * @return void
	 */
	public function setText($text) {
		return;
	}
}