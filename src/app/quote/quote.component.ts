import { Component, OnInit } from '@angular/core';
import{Quotes}from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[]=[
   new Quotes (1,'The best thing about future is that it comes one day' ,'Abraham lincon '),
   new Quotes(2,'Motivation is the art of getting people to do what you want them to do because they want to do it', 'Dwight D. Eisenhow'),
   new Quotes (3,'It does not matter how slowly you go as long as you do not stop','Lynda flower')
  ]

  toggleDetails(index){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }
  deleteQuotes(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`sure!!You want to delete quote?`)

      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
    }

  constructor() { }

  ngOnInit() {
  }

}
