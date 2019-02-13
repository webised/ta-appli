import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArticlesPage } from '../pages/articles/articles';
import { HttpClientModule } from "@angular/common/http";
import { ArticleService } from "../services/articles.service";
import { ArticleDetailPage } from "../pages/article-detail/article-detail";
import { MarquagePage } from "../pages/marquage/marquage";
import { MarquageService } from "../services/marquage.service";
import { MenuService } from "../services/menu.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArticlesPage,
    ArticleDetailPage,
    MarquagePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArticlesPage,
    ArticleDetailPage,
    MarquagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ArticleService,
    MarquageService,
    MenuService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {




}
