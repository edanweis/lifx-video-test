import {Component} from 'angular2/core';
import {LifxService} from '../../services/lifx-service/lifx-service';
import {Http, HTTP_PROVIDERS} from 'angular2/http';


@Component({
  selector: 'token',
  template: require('./token.html'),
  styles: [require('./token.scss')],
  providers: [HTTP_PROVIDERS, LifxService],
  directives: [],
  pipes: []
})
export class Token {
  tokenvalue: string;
  LifxService: LifxService;
  timeoutId: any;
  error: boolean = false;
  response:Object = {status:"", result:"", statusText:"", url:""};
  result: Array<Object>;

  constructor(public LifxService: LifxService) {
    this.tokenvalue = "";    
  }

  public confirmToken(event, value){
  	// this.LifxService.check(value)
  	// console.log(value)
  	if (!value) { return; } 
    if (this.timeoutId) clearTimeout(this.timeoutId);    
    this.timeoutId = setTimeout(() => {   
        this.LifxService.check(value)
         .subscribe(
          data => {
            this.result = data.json();
            this.response = data;
            this.error = false;
            console.log(data)
            },
          err => {
            this.error = true;
            this.result = err.json();
            this.response = err;
          }
      )

    }, 1000); 
  }

}
