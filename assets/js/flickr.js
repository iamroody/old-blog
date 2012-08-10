function jsonFlickrApi(rsp) {
	 if (rsp.stat != "ok"){
	  return;
	 }
	  	 
	var images = "";
	for(var x=0; x<parseInt(rsp.photos.total); x++){   
	 	photo = rsp.photos.photo[x];
	 	t_url = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "m.jpg";
	 	p_url = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
	 	images = images + '<li class="image"><a target="blank" href="' + p_url + '"><img alt="' + photo.title + '"src="' + t_url +'"/></a></li>';
	} 
  
	console.log(images)

	$(".images").html(images);
	$('.image img').adipoli({
		'startEffect' : 'transparent',
    	'hoverEffect' : 'boxRandom'
	});
}