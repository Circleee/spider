const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const {
	htmlDecode,
	trim
} = require('./tool.js');
const sendMail = require('./mail.js');


let url = 'https://movie.douban.com/top250?start='


let obj = {
	data: new Date,
	url: url,
	list: []
}

let index = 0;

let spider = () => {
	if (index == 11) {
		clearInterval(time)
		fs.writeFile('./a.json', JSON.stringify(JSON.stringify(obj)), (err) => {
			if (err) {
				console.log(err);
			}
		})
	} else {
		let start = index * 25;
		console.log(url + start);
		request(url + start, (err, res, body) => {
			index = index + 1;
			if (err) {} else {
				let $ = cheerio.load(body, {
					decodeEntities: false
				});
				$('.grid_view .item').map((index, item) => {
					movieObj = {
						name: $(item).find('.title').html(),
						star: $(item).find('.rating_num').html(),
						quote: $(item).find('.inq').html(),
						img: $(item).find('.pic img').attr('src'),
						director: trim($(item).find('.bd p').text(), 'g'),
					}
					obj.list.push(movieObj);
				});
			}
		})
	}

}
let time = setInterval(() => {
	spider()
}, 3000)