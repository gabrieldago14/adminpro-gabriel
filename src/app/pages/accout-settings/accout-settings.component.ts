import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';







@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: [
  ]
})
export class AccoutSettingsComponent implements OnInit {

  constructor( 
                    public _ajustes:SettingsService) { }

  ngOnInit(): void {
  }
  
  cambiarColor(tema:string, link:any){
    this.aplicarCheck(link);
    this._ajustes.aplicarTema( tema);
    
  }

  aplicarCheck( link: any ){
    let selectores: any = document.getElementsByClassName('selector');

    for (let ref of selectores){
      ref.classList.remove('working');
    }  
    link.classList.add('working');

  }
}
