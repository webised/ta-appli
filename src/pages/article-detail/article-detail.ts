import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  art = { id:"4", post_content:"cccc", post_title:"titre", meta_value:"dd" };



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private articleService: ArticleService ) {
  }

  Post: any
  article: Article;
  post_title: string;
  post_content: any;
  title: any;
  post: any;
  content: any;
  id: number;
  articleSubscription: Subscription;

  ngOnInit() {
    this.id = this.navParams.get('id');
    this.article = {
      post_title: 'test',
      post_content: 'content'
    };
    const observable = this.articleService.getDetailArticle(this.id);
    this.articleSubscription = observable.subscribe(
      (value) => {
        this.article = {
          post_title: value.post_title,
          post_content: value.post_content
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


}
