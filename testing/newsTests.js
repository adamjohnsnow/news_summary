(function (exports) {
  console.log('Episode 1: Basic unit tests')


  var mockApi = { "response": { "content": [{"id": 1, "webTitle": "News story one about stuff", "apiUrl": "http://news"},{"id": 2, "webTitle": "More stuff", "apiUrl": "http://news"}]}};
  var headlines = new Headlines(mockApi);

  var htmlTest = '<ul><li><a href="#0">News story one about stuff</a></li><li><a href="#1">More stuff</a></li></ul>';
  var htmlActual = document.getElementById('app').innerHTML;
  sameTheyAre('Generates two links from headines', htmlTest, htmlActual);

})();
