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
  like = 0
  dislike= 0
  upVote (){
    this.upVote = this.upVote ;
  }
  downVote(){
    this.downVote= this.downVote;
  }
  constructor() { }

  ngOnInit() {
  }

}
