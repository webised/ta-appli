import { HttpClient } from "@angular/common/http";
import  { Injectable } from "@angular/core";

@Injectable()
export class MenuService {

  constructor( private http: HttpClient){}

  menuList(){
    return this.http.get('http://tousarbitres.fr/wp-json/wp-menus/v1/menus/main');
  }

}