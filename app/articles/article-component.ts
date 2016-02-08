import {Component} from "angular2/core";
import {Article} from "./article-model";

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    templateUrl:'app/articles/article-component.html',
    host: {
        class: 'row'
    }
})

export class ArticleComponent{
    article: Article;

    constructor(){
        this.article = new Article(
            'Angular 2',
            'http://angular.io',
            10
        );
    }
    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }
    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }
}