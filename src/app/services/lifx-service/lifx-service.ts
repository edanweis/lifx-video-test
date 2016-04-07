import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class LifxService {
  http: Http; 
  

  constructor(public http: Http) {
  };

  public check (token){
  	console.log("checking", token)
	  var headers = new Headers();
        headers.append('Authorization', "Bearer " + token);
  	
    return this.http.get('https://api.lifx.com/v1/lights/all', {headers: headers})

  }

  public logError(err) {
  	console.error('There was an error: ' + err);
}

}
