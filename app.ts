import { bootstrap } from "angular2/platform/browser";
import {Component} from "angular2/core";
import {ArticleComponent} from "./app/articles/article-component";
import {Article} from "./app/articles/article-model";

@Component({
    selector: 'reddit',
    templateUrl: 'app/app.tmpl.html',
    directives:[ArticleComponent]
})

class RedditApp{
    articles: Article[];

    constructor(){
        this.articles = [
            new Article('Angular 2', 'http://angular.io', 3),
            new Article('Fullstack', 'http://fullstack.io', 2),
            new Article('Angular Homepage', 'http://angular.io', 1),
        ]
    }
    addArticle(title: HTMLInputElement, link: HTMLInputElement): void{
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    }
}


bootstrap(RedditApp);