import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
  quotes = [];

  constructor(private _http: Http) {
    this.getQuotes();
   }

   getQuotes(){ 
     return this._http.get('/quotes')
   }

   sendIt(){ 
     return this.quotes;
   }

   addQuote(thequote) { 
     this._http.post('/new', thequote).subscribe(
       data => { 
         console.log('success! quote is added!');
     });
   }

}
