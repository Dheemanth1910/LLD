enum Role {
    ADMIN = 1 , 
    GUEST = 2
}

interface User {
    name : string ,
    role : Role
}

export interface Report{
    view() : string;
}

export class ReportProxy implements Report{
    private realReport? : Report ;
    constructor( private user : User ) {
        this.realReport = undefined;
    }
    view(): string {
        if(this.user.role == Role.GUEST){
            return "No sufficient Permission to view Report"
        }
        if ( !this.realReport ) this.realReport = new RealReport();
        return this.realReport?.view();
    }
}

class RealReport implements Report{
    private content;
    constructor(){
        console.log(" Expensive Operation loading in constructor");
        this.content = " Content Loaded after expensive operation";
    }
    view(): string {
        return this.content;
    }
}
