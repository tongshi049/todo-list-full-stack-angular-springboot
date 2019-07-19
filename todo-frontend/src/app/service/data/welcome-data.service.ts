import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { API_URL } from 'src/app/app.contants';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient, 
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  executeHelloWorldBeanService() {
    //console.log("Execute Hello World Bean Service");
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  // http://localhost:8080/hello-world-bean/path-variable/teemo
  executeHelloWorldServiceWithPathVariable(name) {

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world-bean/path-variable/${name}`, 
      {headers: headers});
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'teemo';
  //   let password = '233';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

  //Access to XMLHttpRequest at 
  //'http://localhost:8080/hello-world-bean/path-variable/toomo' 
  //from origin 'http://localhost:4200' has been blocked by CORS policy: 
  //No 'Access-Control-Allow-Origin' header is present on the requested resource.


}
