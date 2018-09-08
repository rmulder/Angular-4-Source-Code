export class Point{

    constructor(public x?:number,public y?:number){
    }
    draw() {
        console.log('X : ' + this.x + ', Y : ' + this.y);

    }

    getXvalue(){
        return this.x;
    }
    setXvalue(value){
        if(value <0) 
        throw new Error('Value should not be less than zero');
        this.x = value;
    }
}

export let nameConstant = 'Saravana Prasanth';