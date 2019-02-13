import { Marquage } from "../models/Marquage";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { catchError, map, tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','crossDomain': 'true', 'Postman-Token': 'ab475a72-bbb9-be0a-b0ef-46d882f51684' })
};
@Injectable()
export class MarquageService {
 // private marquage: any;

  /*private marquage = {
    "firstname": "nicolas",
    "lastname": "gbenou",
    "adress": "rue des brisants",
    "adress2": "bat d",
    "city": "Biscarrosse",
    "postalcode": "40600",
    "sport": "2",
    "qty": "3"
  };*/

  constructor( private http: HttpClient){}

  addMarquage(marquage) {
    console.log(marquage);
    return this.http.post('http://localhost/ta-api/web/app_dev.php/marquages', marquage, httpOptions);
  }

}