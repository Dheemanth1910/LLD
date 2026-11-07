export interface Coffee {
  cost(): number;
  description(): string;
}

export class BaseCoffee implements Coffee{
    cost(): number {
        return 50;
    }
    description(): string {
        return 'A Shot of Espresso';
    }
}
