export class Like {

    constructor(public _count ? : number, public _isSelected ? : boolean){
    }

    onClick(){
       this._count += (this._isSelected) ? -1 : 1; 
       this._isSelected = !this._isSelected;
    }

}