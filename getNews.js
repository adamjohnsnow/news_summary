const news = "http://content.guardianapis.com/politics?show-fields=headline&api-key=6cefe839-68bb-4814-8884-53cedf5c4231";
const xhr = new XMLHttpRequest();
const method = "GET";


(function(exports){
  function getNews() {
    xhr.open(method, news, true);
    xhr.onreadystatechange = function(){
        display = document.getElementById("news");
        const response = JSON.parse(xhr.responseText)
        display.innerHTML = console.log(response.response.results[0].webTitle)
    };
    xhr.send();
  };
  exports.getNews = getNews;
})(this);
