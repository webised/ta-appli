import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Marquage } from "../../models/Marquage";
import { MarquageService } from "../../services/marquage.service";

/**
 * Generated class for the MarquagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-marquage',
  templateUrl: 'marquage.html',
})
export class MarquagePage {

  marquageForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private marquageService: MarquageService,
              private menuCtrl: MenuController ) {
  }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.marquageForm = this.formBuilder.group({
      lastname: [''],
      firstname: [''],
      adress: [''],
      adress2:  [''],
      city: [''],
      postalCode: [''],
      sport: [''],
      qty: ['']
     });
  }

  onSubmitForm() {
    let formValue = this.marquageForm.value;
    let  newMarquage = new Marquage(
      formValue['lastname'],
      formValue['firstname'],
      formValue['adress'],
      formValue['adress2'],
      formValue['city'],
      formValue['postalCode'],
      formValue['sport'],
      formValue['qty']
    );
    let marquage = {lastname: newMarquage.lastname, firstname: newMarquage.firstname, adress: newMarquage.adress, adress2: newMarquage.adress2,city: newMarquage.city,postalcode: newMarquage.postalCode,sport: newMarquage.sport,qty: newMarquage.qty};
    this.marquageService.addMarquage(marquage).subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );

  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
