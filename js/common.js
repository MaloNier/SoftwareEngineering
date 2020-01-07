/**
 * QUERY_STRINGをkeyとvalueの連想配列で取得する
 */
function getQueryString() {
	// QUERY_STRINGを分解
	var query_string = window.location.search;
	var query_array = [], length = 0, hash = '', query = '';

	// ?を取り除いて&で区切る
	hash = query_string.slice(1).split('&');
	length = hash.length;

	// query_stringをkeyとvalueに分けてquery_arrayに格納
	for(var i=0; i<length; i++) {
		query = hash[i].split('='); // keyとvalueに分ける
		query_array.push(query[0]);
		query_array[query[0]] = decodeURI(query[1]);
	}

	return query_array;
}