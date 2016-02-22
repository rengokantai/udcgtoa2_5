/**
 * Created by Hernan Y.Ke on 2016/2/19.
 */
import {Component} from 'angular2/core';
import {SService} from "./service/s.service";
import {CService} from "./service/c.service";
import {DService} from "./service/d.service";
@Component({
    selector:'a-c',
    template:`
    <input type="text" #m>
    <button (click)="onLog(m.value)">send</button>

    <div>
    <input type="text" #a>
    <input type="text" #b>
    <button (click)="onAdd(a.value,b.value)">add</button>
    <button (click)="onMulti(a.value,b.value)">multi</button>
    <p>{{res}}</p>
    </div>
    <div>
    <input type="text" #newdata>
    <button (click)="onInsert(newdata.value)">insert</button>
    <button (click)="onGetData()"> string</button>
    <p>{{data}}</p>
    </div>

    `,
    providers:[SService,CService,DService]

})

export class AComponent{
    res:string;
    data:string;
    constructor(private _lS:SService,private _cS:CService,private _dS:DService){}
onLog(m:string){
    this._lS.l(m);
}
    onMulti(a:number,b:number){
        this.res=""+this._cS.multi(+a,+b);
    }

    onAdd(a:number,b:number){
        this.res=""+this._cS.add(+a,+b);
    }
    onGetData(){
        this.data=this._dS.getRString();
    }
    onInsert(data:string){
        this._dS.insert(data);
    }
}
