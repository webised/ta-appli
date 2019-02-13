import {Component, ViewChild, OnInit} from '@angular/core';
import { Platform, NavController, MenuController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArticlesPage } from "../pages/articles/articles";
import { MarquagePage } from "../pages/marquage/marquage";
import { HomePage } from '../pages/home/home';
import { MenuService } from "../services/menu.service";
import {ArticleDetailPage} from "../pages/article-detail/article-detail";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  homePage:any = HomePage;
  articlesPage:any = ArticlesPage;
  marquagePage:any = MarquagePage;
  menu:any;
  submenu: any;
  menuSubscription:any;
  type: any;

  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              private menuService: MenuService,
              private modalCtrl: ModalController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    const observable = this.menuService.menuList();
    this.menuSubscription = observable.subscribe(
      (value) => {
        this.submenu = this.menu = value;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log(this.submenu)
      }
    );
  }

  openPage(page: any) {
    this.content.setRoot(page);
    this.menuCtrl.close();
  }

  viewDetail(type, id: number) {
    if(type == "page") {
      let modal = this.modalCtrl.create(ArticleDetailPage, {id: id});
      modal.present();
    }
    if(type == "category") {
      this.content.setRoot(ArticlesPage, {id: 10});
      this.menuCtrl.close();
    }
  }
}

