$.getJSON('https://api.github.com/repos/heysarver/msplus-ai-wallpaper/wallpapers/', function(data) {
  $.each(data, function(index, item) {
    if(item.type === 'file') {
      var imageUrl = item.download_url;
      var imageElement = $('<a href="' + imageUrl + '" data-lightbox="gallery"><img src="' + imageUrl + '" width="200"></a>');
      $('#gallery').append(imageElement);
    }
  });
});
