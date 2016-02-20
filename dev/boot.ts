import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {SService} from "./service/s.service";

//noinspection TypeScriptValidateTypes
bootstrap(AppComponent,[SService]);
