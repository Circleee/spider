/*转义hmtl文件*/
exports.htmlDecode = (str) => {
	// str = unescape(str.replace(/\\u/g, "%u"));
	// str = str.replace(/&#(x)?(\w+);/g, function($, $1, $2) {
	// 	return String.fromCharCode(parseInt($2, $1 ? 16 : 10));
	// });
	return str;
};


// 去除字符串中的空格函数、  第二个参数穿‘g’ 会去掉所有的中间的空格
exports.trim = (str, is_global) => {
	var result;
	result = str.replace(/(^\s+)|(\s+$)/g, "");
	if (is_global.toLowerCase() == "g") {
		result = result.replace(/\s/g, "");
	}
	return result;
}
