<?php
/**
 * 科目のエンティティクラス
 *
 * @property int $id 科目ID
 * @property string $title 科目名
 * @method string getTitle()
 */
class Subject {
	private $id;
	private $title;

	/**
	 * 科目のタイトルを取得する
	 *
	 * @param int $id 科目ID
	 * @return string 科目名
	 */
	public function getTitle($id) {
		return;
	}
}