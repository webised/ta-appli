import { Component, ViewChild, OnInit } from '@angular/core';
import {MenuController, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import { ArticleService } from "../../services/articles.service";
import { Article } from "../../models/Article";
import { Subscription } from "rxjs";
import {ArticleDetailPage} from "../article-detail/article-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private articleService: ArticleService,
              private menuCtrl: MenuController,
              private modalCtrl: ModalController) {
  }
  articles: Article[];
  articleSubscription: Subscription;

  ngOnInit() {

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

  onToggleMenu() {
    this.menuCtrl.open();
  }
  viewDetail(id: number) {
    let modal = this.modalCtrl.create(ArticleDetailPage, {id: id});
    modal.present();
  }

}
