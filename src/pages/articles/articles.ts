import {Component, ViewChild, OnInit} from '@angular/core';
import { ModalController, NavController, NavParams, MenuController } from 'ionic-angular';
import { ArticleService} from "../../services/articles.service";
import {Subscription} from "rxjs";
import { Article } from "../../models/Article";
import { ArticleDetailPage } from "../article-detail/article-detail";

/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage implements OnInit {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private articleService: ArticleService,
              private menuCtrl: MenuController,
              private modalCtrl: ModalController) {
  }
  articles: any;
  articleSubscription: Subscription;

   ngOnInit() {

    if(!!this.navParams.get('id')) {
      const observable = this.articleService.getArticleCategory(this.navParams.get('id'));
      this.articleSubscription = observable.subscribe(
        (value) => {
          this.articles = value;
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log(this.articles)
        }
      );
    }
    else {
      const observable = this.articleService.getArticlesFromServer();
      this.articleSubscription = observable.subscribe(
        (value) => {
          this.articles = value;
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log(this.articles)
        }
      );
     }
   }

  onToggleMenu() {
    this.menuCtrl.open();
  }
  viewDetail(id: number) {
    let modal = this.modalCtrl.create(ArticleDetailPage, {id: id});
    modal.present();
  }

}
