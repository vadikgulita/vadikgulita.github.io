$(document).on('click', '.video-overlay', function() {
	var $video = $('#video'),
		src = $video.attr('src');
 
	$video.attr('src', src + '?autoplay=1');
});