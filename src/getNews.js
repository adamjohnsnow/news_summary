const news = "http://content.guardianapis.com/sport?show-fields=all&api-key=6cefe839-68bb-4814-8884-53cedf5c4231";
const xhr = new XMLHttpRequest();
const method = "GET";

(function(exports){

  function getNews() {
    xhr.open(method, news, true);
    xhr.onreadystatechange = function(){
      apiResponse = JSON.parse(xhr.responseText)
      listener = new Listeners(apiResponse)
      return headlines = new Headlines(apiResponse);
    };
    xhr.send();
  };
  exports.getNews = getNews;
})(this);
