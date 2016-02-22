System.register(['angular2/core', "./service/s.service", "./service/c.service", "./service/d.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, s_service_1, c_service_1, d_service_1;
    var AComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (s_service_1_1) {
                s_service_1 = s_service_1_1;
            },
            function (c_service_1_1) {
                c_service_1 = c_service_1_1;
            },
            function (d_service_1_1) {
                d_service_1 = d_service_1_1;
            }],
        execute: function() {
            AComponent = (function () {
                function AComponent(_lS, _cS, _dS) {
                    this._lS = _lS;
                    this._cS = _cS;
                    this._dS = _dS;
                }
                AComponent.prototype.onLog = function (m) {
                    this._lS.l(m);
                };
                AComponent.prototype.onMulti = function (a, b) {
                    this.res = "" + this._cS.multi(+a, +b);
                };
                AComponent.prototype.onAdd = function (a, b) {
                    this.res = "" + this._cS.add(+a, +b);
                };
                AComponent.prototype.onGetData = function () {
                    this.data = this._dS.getRString();
                };
                AComponent.prototype.onInsert = function (data) {
                    this._dS.insert(data);
                };
                AComponent = __decorate([
                    core_1.Component({
                        selector: 'a-c',
                        template: "\n    <input type=\"text\" #m>\n    <button (click)=\"onLog(m.value)\">send</button>\n\n    <div>\n    <input type=\"text\" #a>\n    <input type=\"text\" #b>\n    <button (click)=\"onAdd(a.value,b.value)\">add</button>\n    <button (click)=\"onMulti(a.value,b.value)\">multi</button>\n    <p>{{res}}</p>\n    </div>\n    <div>\n    <input type=\"text\" #newdata>\n    <button (click)=\"onInsert(newdata.value)\">insert</button>\n    <button (click)=\"onGetData()\"> string</button>\n    <p>{{data}}</p>\n    </div>\n\n    ",
                        providers: [s_service_1.SService, c_service_1.CService, d_service_1.DService]
                    }), 
                    __metadata('design:paramtypes', [s_service_1.SService, c_service_1.CService, d_service_1.DService])
                ], AComponent);
                return AComponent;
            })();
            exports_1("AComponent", AComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFDb21wb25lbnQiLCJBQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQUNvbXBvbmVudC5vbkxvZyIsIkFDb21wb25lbnQub25NdWx0aSIsIkFDb21wb25lbnQub25BZGQiLCJBQ29tcG9uZW50Lm9uR2V0RGF0YSIsIkFDb21wb25lbnQub25JbnNlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQTRCSUEsb0JBQW9CQSxHQUFZQSxFQUFTQSxHQUFZQSxFQUFTQSxHQUFZQTtvQkFBdERDLFFBQUdBLEdBQUhBLEdBQUdBLENBQVNBO29CQUFTQSxRQUFHQSxHQUFIQSxHQUFHQSxDQUFTQTtvQkFBU0EsUUFBR0EsR0FBSEEsR0FBR0EsQ0FBU0E7Z0JBQUVBLENBQUNBO2dCQUNqRkQsMEJBQUtBLEdBQUxBLFVBQU1BLENBQVFBO29CQUNWRSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDbEJBLENBQUNBO2dCQUNHRiw0QkFBT0EsR0FBUEEsVUFBUUEsQ0FBUUEsRUFBQ0EsQ0FBUUE7b0JBQ3JCRyxJQUFJQSxDQUFDQSxHQUFHQSxHQUFDQSxFQUFFQSxHQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDdENBLENBQUNBO2dCQUVESCwwQkFBS0EsR0FBTEEsVUFBTUEsQ0FBUUEsRUFBQ0EsQ0FBUUE7b0JBQ25CSSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFDQSxFQUFFQSxHQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDcENBLENBQUNBO2dCQUNESiw4QkFBU0EsR0FBVEE7b0JBQ0lLLElBQUlBLENBQUNBLElBQUlBLEdBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO2dCQUNwQ0EsQ0FBQ0E7Z0JBQ0RMLDZCQUFRQSxHQUFSQSxVQUFTQSxJQUFXQTtvQkFDaEJNLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUMxQkEsQ0FBQ0E7Z0JBNUNMTjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxLQUFLQTt3QkFDZEEsUUFBUUEsRUFBQ0EsNGdCQWtCUkE7d0JBQ0RBLFNBQVNBLEVBQUNBLENBQUNBLG9CQUFRQSxFQUFDQSxvQkFBUUEsRUFBQ0Esb0JBQVFBLENBQUNBO3FCQUV6Q0EsQ0FBQ0E7OytCQXNCREE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQTdDQSxBQTZDQ0EsSUFBQTtZQTdDRCxtQ0E2Q0MsQ0FBQSIsImZpbGUiOiJhLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xOS5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTU2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9zLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDU2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9jLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEU2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9kLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonYS1jJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNtPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25Mb2cobS52YWx1ZSlcIj5zZW5kPC9idXR0b24+XHJcblxyXG4gICAgPGRpdj5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNhPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2I+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkFkZChhLnZhbHVlLGIudmFsdWUpXCI+YWRkPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbk11bHRpKGEudmFsdWUsYi52YWx1ZSlcIj5tdWx0aTwvYnV0dG9uPlxyXG4gICAgPHA+e3tyZXN9fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNuZXdkYXRhPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25JbnNlcnQobmV3ZGF0YS52YWx1ZSlcIj5pbnNlcnQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uR2V0RGF0YSgpXCI+IHN0cmluZzwvYnV0dG9uPlxyXG4gICAgPHA+e3tkYXRhfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOltTU2VydmljZSxDU2VydmljZSxEU2VydmljZV1cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQUNvbXBvbmVudHtcclxuICAgIHJlczpzdHJpbmc7XHJcbiAgICBkYXRhOnN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xTOlNTZXJ2aWNlLHByaXZhdGUgX2NTOkNTZXJ2aWNlLHByaXZhdGUgX2RTOkRTZXJ2aWNlKXt9XHJcbm9uTG9nKG06c3RyaW5nKXtcclxuICAgIHRoaXMuX2xTLmwobSk7XHJcbn1cclxuICAgIG9uTXVsdGkoYTpudW1iZXIsYjpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMucmVzPVwiXCIrdGhpcy5fY1MubXVsdGkoK2EsK2IpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWRkKGE6bnVtYmVyLGI6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLnJlcz1cIlwiK3RoaXMuX2NTLmFkZCgrYSwrYik7XHJcbiAgICB9XHJcbiAgICBvbkdldERhdGEoKXtcclxuICAgICAgICB0aGlzLmRhdGE9dGhpcy5fZFMuZ2V0UlN0cmluZygpO1xyXG4gICAgfVxyXG4gICAgb25JbnNlcnQoZGF0YTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX2RTLmluc2VydChkYXRhKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
