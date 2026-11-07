import { Coffee } from "./coffee-interface";

export abstract class CoffeeDecorator implements Coffee{
    // protected wrapped : Coffee;
    // constructor(decorator : Coffee) {
    //     this.wrapped = decorator;
    // }
    constructor(protected wrapped:Coffee){}
    cost(): number {
        return this.wrapped.cost();
    } 
    description(): string {
        return this.wrapped.description();
    }
} 


export class MilkDecorator extends CoffeeDecorator{
    cost(): number {
        return this.wrapped.cost() + 15 ;
    }
    description(): string {
        return this.wrapped.description() + ' With Added Milk';
    }
}


export class SugarDecorator extends CoffeeDecorator{
    cost() : number {
        return this.wrapped.cost() + 5 ;
    }
    description(): string {
        return this.wrapped.description() + ' With Added Sugar';
    }
}

export class CaramelDecorator extends CoffeeDecorator{
    cost(): number {
        return this.wrapped.cost() + 20;
    }
    description(): string {
        return this.wrapped.description() + ' With Added Caramel';
    }
}