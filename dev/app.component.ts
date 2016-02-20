import {Component} from 'angular2/core';
import {AComponent} from "./a.component";
import {BComponent} from "./b.component";

//pass [myname] from parent component to child component.child component receive data from [input]
@Component({
    selector:'my-app',
    template:`
    <a-c></a-c>
    <b-c></b-c>
    `,
    directives:[AComponent,BComponent]

})
export class AppComponent {

}