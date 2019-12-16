<?php
/**
 * 学生のエンティティクラス
 *
 * @property int $sutudentNo 学生番号
 * @method int[] $subjects()
 * @method string getReview()
 * @method void setReview()
 */
class Student {
	private studentNo = 0;

	/**
	 * 履修している科目のidリストを返す
	 *
	 * @return int[] 履修している科目のidリスト
	 */
	public function subjects() {
		return;
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