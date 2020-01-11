<?php
header('content-type: application/json; charset=utf-8');
ini_set('display_errors',1);

/**
 * 科目のエンティティクラス
 *
 * @property int $id 科目ID
 * @property string $title 科目名
 * @property string $path 科目情報が保存されているテキストファイルへのパス
 * @method string getTitle()
 */
class Subject {
	private $id;
	private $title;
	private $path;
	/**
	 * コンストラクタ
	 *
	 * @param int $id 科目ID
	 */
	function __construct($id) {
		$this->id = $id;
		$this->path = '../data/subject/subject'.$id.'.txt';
		$this->title = file_get_contents($this->path);
	}

	/**
	 * 科目のタイトルを取得する
	 *
	 * @param int $id 科目ID
	 * @return string 科目名
	 */
	public function getTitle($id) {
		if($this->id === $id) {
			return $this->title;
		}
		return -1;
	}
}

$sb = [
	new Subject(0),
	new Subject(1),
	new Subject(2),
	new Subject(3),
	new Subject(4),
	new Subject(5),
	new Subject(6),
	new Subject(7),
	new Subject(8),
	new Subject(9)
];

if($_GET['method'] === 'getTitle') {
	$id = (int)$_GET['id'];
	$subject = [
		"title" => $sb[$id]->getTitle($id),
		"id" => $id
	];
	echo json_encode($subject);
}