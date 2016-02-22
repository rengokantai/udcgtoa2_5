/**
 * Created by Hernan Y.Ke on 2016/2/21.
 */
import {Injectable} from'angular2/core';

@Injectable()
export class DService{
    private _data = ['a','b','c'];
    getRString(){
        let ran =Math.floor( Math.random() *this._data.length);
        return this._data[ran];
    }
    insert(value:string){
        this._data.push(value);
    }
}