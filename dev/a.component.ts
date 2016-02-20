/**
 * Created by Hernan Y.Ke on 2016/2/19.
 */
import {Component} from 'angular2/core';
import {SService} from "./service/s.service";
@Component({
    selector:'a-c',
    template:`
    <input type="text" #m>
    <button (click)="onLog(m.value)">send</button>`

})

export class AComponent{
    constructor(private _lS:SService){}
onLog(m:string){
    this._lS.l(m);
}
}
