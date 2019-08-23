export class Quotes {
    showQuote: boolean;
    constructor(public id :number,  public quote:string ,public author:string){
        this.showQuote = false;
    }
}
