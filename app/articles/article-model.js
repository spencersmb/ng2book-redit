System.register([], function(exports_1) {
    var Article;
    return {
        setters:[],
        execute: function() {
            Article = (function () {
                function Article(title, link, votes) {
                    this.title = title;
                    this.link = link;
                    this.votes = votes || 0;
                }
                Article.prototype.voteUp = function () {
                    this.votes += 1;
                };
                Article.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                return Article;
            })();
            exports_1("Article", Article);
        }
    }
});
//# sourceMappingURL=article-model.js.map