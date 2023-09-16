$.getJSON('https://api.github.com/repos/heysarver/winwalls/contents/wallpapers/finals', function(data) {
  $.each(data, function(index, item) {
    if(item.type === 'file') {
      var imageUrl = item.download_url;
      var imageElement = $('<a href="' + imageUrl + '" data-lightbox="gallery"><img src="' + imageUrl + '" width="25%"></a>');
      $('#gallery').append(imageElement);
    }
  });
});
