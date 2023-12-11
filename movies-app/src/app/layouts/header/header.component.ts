import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbg:any={}
  openSearchPopUp: boolean = false;
  @Input() movie:any

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }



onInputFocused(){
  this.openSearchPopUp = true;
  this.renderer.addClass(document.body,  'dark-overlay')
}

  //dissapearing header logic start
  @HostListener('document:scroll') scrollover(){

    if(document.body.scrollTop >0 || document.documentElement.scrollTop > 0){
      this.navbg = {
        'background-color':'#fff'
      } 
    }else{
      this.navbg = {}
    }
  }
  //dissapearing header logic end


  //reactive form start
 searchForm = new FormGroup({
    'movieName' : new FormControl(null)
  })

  //reactive form end

}
