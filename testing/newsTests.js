(function (exports) {
  console.log('Episode I: A News Hope')


  var mockApi = { "response": { "results": [{"id": 1, "webTitle": "News story one about stuff", "apiUrl": "http://news"},{"id": 2, "webTitle": "More stuff", "apiUrl": "http://news"}]}};
  var headlines = new Headlines(mockApi);

  var htmlTest = '<ul><li class="headline"><a href="#0">News story one about stuff</a></li><li class="headline"><a href="#1">More stuff</a></li></ul>';
  var htmlActual = document.getElementById('app').innerHTML;
  sameTheyAre('Generates two links from headines', htmlTest, htmlActual);


  var htmlString = '<ul><li><a href="#2" id="testlink">test</a></li></ul>';
  document.getElementById('app').innerHTML = htmlString;
  document.getElementById('testlink').click();
  myURL = "file:///Users/adamsnow/OneDrive/MacBook/Coding/weekly_projects/news/yodaRunner.html#2"
  sameTheyAre('changes page from onclick event', window.location.href, myURL)


})();
