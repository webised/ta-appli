import { Subject } from "rxjs";
import { HttpClient} from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Article } from "../models/Article";


@Injectable()
export class ArticleService {

  private observable;
  private articles;

  constructor(private httpClient: HttpClient) { }

  getArticlesFromServer() {
    return  this.httpClient.get<any[]>('http://localhost/ta-api/web/app_dev.php/articles');
  }
  getDetailArticle(id) {
    return this.httpClient.get<Article>('http://localhost/ta-api/web/app_dev.php/article/'+id);
  }
  getArticleCategory(id) {
    return this.httpClient.get<any[]>('http://www.tousarbitres.fr/wp-json/wp/v2/posts?order=desc&_embed&categories='+id);
  }

}