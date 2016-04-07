/// <reference path="../../typings/main/ambient/youtube/index.d.ts" />
import {Component} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import '../style/app.scss';
import {Youtube} from './components/youtube/youtube';
import {Token} from './components/token/token';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS],
  directives: [Token, Youtube],
  pipes: [],
  styles: [require('./app.scss')],
  template: require('./app.html')
})

export class App {
  mysrc: string = "http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1";
  
  constructor() {

  }
}
