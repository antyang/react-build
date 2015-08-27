// options = { thumbnailData [{},{},{}] }
var React = require('react');
var ThumbnailList = require('./thumbnail-list');


var options = {
	thumbnailData: [{
		title: "Send",
		number: 132,
		header: "Sven",
		description: 'GodMode1',
		imageUrl: 'http://41.media.tumblr.com/562a3044627d12917c6349f1482f3b1e/tumblr_mjp9bhI0f61r413h3o1_400.jpg'
	},{
		title: "Go",
		number: 31,
		header: "Axe",
		description: 'GodMode2',
		imageUrl: 'http://41.media.tumblr.com/f5a6c15fb4c51fab2cb0a6b7b151e973/tumblr_mmy44oNnuJ1r413h3o1_400.jpg'
	}]
};
// console.log('lol')

// react, please render this class
var element = React.createElement(ThumbnailList, options);
// react, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));
