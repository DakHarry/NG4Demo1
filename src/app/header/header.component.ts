import { TitleServiceService } from '../title-service.service';
import { Inject } from '@angular/core/core';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

export interface Person {
  firstName: string;
  lastName: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  title = 'Dak Blog';
  testServiceTitle = '';
  constructor(private serviceGlobalTitle:TitleServiceService) {
     this.title =  this.serviceGlobalTitle.title;
     this.testServiceTitle = this.serviceGlobalTitle.title;
   }
  

  
  @Output()
  changedKeyword = new EventEmitter<string>(); 

  ngOnInit() {
  }
  counter = 0;
  changeTitle(evt: MouseEvent) {
    this.title = "ChangeSuceed!";
    this.counter++;
    console.log(evt.clientX);
    this.changedKeyword.emit(this.title);
  }

  is_h3_highlight = true;

  getStyle(){
    return {'background-color': '#00ff00'};
  }
  changeH3(){
    this.is_h3_highlight = this.is_h3_highlight ? false : true;
  }
  

}
