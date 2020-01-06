<?php
header('content-type: application/json; charset=utf-8');
ini_set('display_errors',1);

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
	 * コンストラクタ
	 *
	 * @param int $id 科目ID
	 * @param string $title 科目名
	 */
	function __construct($id, $title) {
		$this->id = $id;
		$this->title = $title;
	}

	/**
	 * 科目のタイトルを取得する
	 *
	 * @param int $id 科目ID
	 * @return string 科目名
	 */
	public function getTitle($id) {
		if ($this->id == $id) {
			return $this->title;
		}
		return 0;
	}
}

$sb = [
	new Subject(0, 'インターネット技術'),
	new Subject(1, '情報システム基盤技術'),
	new Subject(2, 'ウェブデザイン演習'),
	new Subject(3, 'プログラミング言語'),
	new Subject(4, 'HCIデザイン'),
	new Subject(5, 'アルゴリズム設計'),
	new Subject(6, '科学技術英語A'),
	new Subject(7, 'システム要求分析・評価法'),
	new Subject(8, 'データマイニング'),
	new Subject(9, 'データサイエンス概論'),
];

if($_GET['method'] === 'getTitle') { // sd_1
	$id = $_GET['id'];
	$subject = [
		"title" => $sb[$id]->getTitle($id),
		"id" => $id
	];
	echo json_encode($subject);
}