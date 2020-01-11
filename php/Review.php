<?php
header('content-type: application/json; charset=utf-8');
ini_set('display_errors',1);

/**
 * 科目毎のレビューのエンティティクラス
 *
 * @property int $subjectId 科目ID
 * @property string $text レビュー文
 * @property string $path レビューが保存されているテキストファイルへのパス
 * @method string getText()
 * @method void setText()
 */
class Review {
	private $subjectId;
	private $text;
	private $path;

	/**
	 * コンストラクタ
	 *
	 * @param int $subjectId 科目ID
	 */
	function __construct($subjectId) {
		$this->subjectId = $subjectId;
		$this->path = '../data/review/review'.$this->subjectId.'.txt';
		$this->text = file_get_contents($this->path);
	}

	/**
	 * レビュー文を取得する
	 *
	 * @return string レビュー文
	 */
	public function getText($id) {
		if($this->subjectId===$id) {
			return $this->text;
		}

		return '';
	}

	/**
	 * レビュー文を登録する
	 *
	 * @return void
	 */
	public function setText($text) {
		// テキストファイルの更新
		file_put_contents($this->path, $text);
	}
}