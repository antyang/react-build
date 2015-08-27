// options = { thumbnailData [{},{},{}] }
var options = {
	thumbnailData: [{
		title: "Send",
		number: 32,
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
}


// react, please render this class
var element = React.createElement(ThumbnailList, options);
// react, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'))

var Badge = React.createClass({displayName: "Badge",
// this.props // {}
	render: function(){
		return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
			this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
		)
	}
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
	render: function(){
		var list = this.props.thumbnailData.map(function(thumbnailProps){
			return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
		});
		return React.createElement("div", null, 
			list
		)
	}
})
var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function(){
		return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
			React.createElement("div", {className: "thumbnail"}, 
		   	React.createElement("img", {src: this.props.imageUrl}), 
	   		React.createElement("div", {class: "caption"}, 
	     			React.createElement("h3", null, this.props.header), 
	     			React.createElement("p", null, this.props.description), 
	     			React.createElement("p", null, 
		     			React.createElement(Badge, {title: this.props.title, number: this.props.number})
	     			)
	   		)
	 		)
 		)
	}
})