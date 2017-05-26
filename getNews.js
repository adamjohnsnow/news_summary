// (function(exports){
//
//   function printNews(){
//     curl "localhost:8080"
//   -H "X-AYLIEN-TextAPI-Application-ID: APPLICATION_ID" \
//   -H "X-AYLIEN-TextAPI-Application-Key: SECRET_APPLICATION_KEY"
//   -d sentences_number=3\
//   -d url = "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=6cefe839-68bb-4814-8884-53cedf5c4231"
//   };
//
//   exports.printNews = printNews;
//
// })(this);
//
// printNews()

const news = "http://content.guardianapis.com/politics?show-fields=body&api-key=6cefe839-68bb-4814-8884-53cedf5c4231";
const xhr = new XMLHttpRequest();
const method = "GET";


(function(exports){

  function getNews() {


    console.log(xhr.readyState, "readyState 1")
    xhr.open(method, news, false);
    console.log(xhr.readyState, "readyState 2")
    xhr.onreadystatechange = function(){
      console.log(xhr.readyState, "readyState 3")
        display = document.getElementById("news");
        display.innerHTML = xhr.responseText
      console.log(xhr.readyState, "readyState 4")
    };

    console.log(xhr.readyState, "readyState 5")

    xhr.send();

    console.log(xhr.readyState, "readyState 6")

  };

  exports.getNews = getNews;

})(this);
