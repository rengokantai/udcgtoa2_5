/**
 * Created by Hernan Y.Ke on 2016/2/19.
 */
import {Injectable} from 'angular2/core';
@Injectable()
export class CService{
    add(a:number,b:number){
        return a+b;
    }
    multi(a:number,b:number){
        return a*b;
    }
}