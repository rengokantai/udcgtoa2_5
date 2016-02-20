/**
 * Created by Hernan Y.Ke on 2016/2/19.
 */
import {Injectable} from 'angular2/core';
@Injectable()
export class SService{
    private _last = '';
    l(m:string){
        console.log(m+this._last);
        this._last=m;
    }
}