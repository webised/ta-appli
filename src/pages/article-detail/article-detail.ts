import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ArticleService } from "../../services/articles.service";
import { Article } from "../../models/Article";
import { Subscription } from "rxjs";

/**
 * Generated class for the ArticleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-article-detail',
  templateUrl: 'article-detail.html',
})
export class ArticleDetailPage {


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private articleService: ArticleService,
              private viewCtrl: ViewController) {
  }

  article: Article;
  post_title: string;
  post_content: any;
  title: any;
  post: any;
  content: any;
  id: number;
  articleSubscription: Subscription;
  re: any;
  re2: any;
  newstr: string;

  ngOnInit() {
    this.id = this.navParams.get('id');

    const observable = this.articleService.getDetailArticle(this.id);
    this.articleSubscription = observable.subscribe(
      (value) => {

        this.re = /height="[0-9]*"/g;
        this.newstr = value.post_content.replace(this.re, "");
        this.re2 = /width="[0-9]*"/g;
        this.content = this.newstr .replace(this.re2, "");

        this.article = {
          post_title: value.post_title,
          post_content: this.content
        };
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('terminé');

      }
    );
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
