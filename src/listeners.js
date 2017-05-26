function Listeners(api) {
  var contentArray = api.response.results;

(function changeCurrentPage() {
  window.addEventListener("hashchange", showArticle);
})();

function showArticle() {
  changePath(window.location);
};

function changePath(location) {
  var articleId = Number(location.hash.split("#")[1]);
  var htmlString = "<img src="+ contentArray[articleId].fields.thumbnail +" >"
  document.getElementById("app").innerHTML = htmlString + contentArray[articleId].fields.body;
};

};
