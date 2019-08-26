export class Quotes {
    public showQuote: boolean;
    constructor(public id :number,  public quote:string ,public author:string){
        this.showQuote = false;
    }
}
