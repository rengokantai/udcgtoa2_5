import {Component} from 'angular2/core';
import {AComponent} from "./a.component";

//pass [myname] from parent component to child component.child component receive data from [input]
@Component({
    selector:'my-app',
    template:`
    <a-c></a-c>
    `,
    directives:[AComponent]

})
export class AppComponent {

}