var App = (function() {

  

  // This function puts the video on the page
  function embedVideo(video) {
    console.log(video);
    $(".videoContent")
      .append(unescape(video.html))
      // Target your .container, .wrapper, .post, etc.
      // responsive videos within iframe
      .fitVids();
  }

  //append Vimeo Script
  function appendVimeoScript(url) {
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', url);
    document.getElementsByTagName('head').item(0).appendChild(js);
  }

  // This function loads the data from Vimeo
  function init() {
     
    $("a.external").on("click", function(event){
      event.preventDefault();
      // Change "_blank" to something like "newWindow" to load all links in the same new window
      var newWindow = window.open(this.getAttribute('href'), '_blank');
      newWindow.focus();
      return false;

    });
     
    // Call our init function when the page loads
    if ($(".videoContent").length > 0) {
      
      //iPhone not playing video
      var deviceAgent = navigator.userAgent.toLowerCase();
      var isIdevice = deviceAgent.match(/(iphone|ipod|ipad)/) || false;

      if (isIdevice !== false) {
        $(".videoContent")
          .addClass("row-fluid")
          .find(".video")
          .append('<div class="span12"><a href="https://s3-eu-west-1.amazonaws.com/publicjocrimages/rebecca_%26_jonathan_-_1_june_2013_480x270.mp4" class="inviteVideo">click here to play invitation</a></div>');
        return;
      }
      //Video page
      /*VIMEO video piece */
      // This is the URL of the video you want to load
      var videoUrl,// = 'http://www.vimeo.com/7100569';
        // This is the oEmbed endpoint for Vimeo (we're using JSON)
        // (Vimeo also supports oEmbed discovery. See the PHP example.)
        endpoint = 'http://www.vimeo.com/api/oembed.json',
        scriptUrl,
        // Tell Vimeo what function to call
        callback = 'window.App.embedVideo';


      $(".videoContent").find(".video").each(function(index, element) {
        // Put together the URL
        videoUrl = $(element).data("video-url");
        scriptUrl = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback;
        appendVimeoScript(scriptUrl);
      });
      
      
    }

  }

  

  return {
    init : init,
    embedVideo : embedVideo
  };

})();

$(function() {
  App.init();
});

  // // confirmations
  // $('.confirm').submit(function (e) {
  //   e.preventDefault();
  //   var self = this;
  //   var msg = 'Are you sure?';
  //   bootbox.confirm(msg, 'cancel', 'Yes! I am sure', function (action) {
  //     if (action) {
  //       $(self).unbind('submit');
  //       $(self).trigger('submit');
  //     }
  //   });
  // });

  // $('#tags').tagsInput({
  //   'height':'60px',
  //   'width':'280px'
  // });


  

  
  


