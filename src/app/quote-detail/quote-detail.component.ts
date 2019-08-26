import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{ Quotes} from '../quotes';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quotes: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  quotesDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  vote = 0;
  upVote (){
    this.vote = this.vote +1;
  }
  unvote = 0;
  downVote(){
    this.unvote = this.unvote +1;
  }
  constructor() { }

  ngOnInit() {
  }

}
