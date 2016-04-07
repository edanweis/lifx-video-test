/// <reference path="../../../../typings/main/ambient/youtube/index.d.ts" />
import {Component, OnInit} from 'angular2/core';



@Component({
  selector: 'youtube',
  template: require('./youtube.html'),
  styles: [require('./youtube.scss')],
  providers: [],
  directives: [],
  pipes: []
})
export class Youtube implements OnInit {
  

  mysrc = "http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1";

  constructor() {
    // Do stuff  
    
  }

   
  ngOnInit() {
    
  }

}
