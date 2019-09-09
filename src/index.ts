interface Person {
    name: string;
    age: number;
}


class User implements Person {
    age: number;
    name: string;

    constructor() {
        this.name = 'Petya';
        this.age = 40;
    }

    private logInfo() {
        console.log(this.name + ' ' + this.age);
    }
}
