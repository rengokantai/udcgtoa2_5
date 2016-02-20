System.register(['angular2/core', "./service/s.service", "./service/c.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, s_service_1, c_service_1;
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
            }],
        execute: function() {
            AComponent = (function () {
                function AComponent(_lS, _cS) {
                    this._lS = _lS;
                    this._cS = _cS;
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
                AComponent = __decorate([
                    core_1.Component({
                        selector: 'a-c',
                        template: "\n    <input type=\"text\" #m>\n    <button (click)=\"onLog(m.value)\">send</button>\n\n    <div>\n    <input type=\"text\" #a>\n    <input type=\"text\" #b>\n    <button (click)=\"onAdd(a.value,b.value)\">add</button>\n    <button (click)=\"onMulti(a.value,b.value)\">multi</button>\n    <p>{{res}}</p>\n    </div>\n\n    ",
                        providers: [s_service_1.SService, c_service_1.CService]
                    }), 
                    __metadata('design:paramtypes', [s_service_1.SService, c_service_1.CService])
                ], AComponent);
                return AComponent;
            })();
            exports_1("AComponent", AComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFDb21wb25lbnQiLCJBQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQUNvbXBvbmVudC5vbkxvZyIsIkFDb21wb25lbnQub25NdWx0aSIsIkFDb21wb25lbnQub25BZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQXFCSUEsb0JBQW9CQSxHQUFZQSxFQUFTQSxHQUFZQTtvQkFBakNDLFFBQUdBLEdBQUhBLEdBQUdBLENBQVNBO29CQUFTQSxRQUFHQSxHQUFIQSxHQUFHQSxDQUFTQTtnQkFBRUEsQ0FBQ0E7Z0JBQzVERCwwQkFBS0EsR0FBTEEsVUFBTUEsQ0FBUUE7b0JBQ1ZFLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNsQkEsQ0FBQ0E7Z0JBQ0dGLDRCQUFPQSxHQUFQQSxVQUFRQSxDQUFRQSxFQUFDQSxDQUFRQTtvQkFDckJHLElBQUlBLENBQUNBLEdBQUdBLEdBQUNBLEVBQUVBLEdBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEVBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN0Q0EsQ0FBQ0E7Z0JBRURILDBCQUFLQSxHQUFMQSxVQUFNQSxDQUFRQSxFQUFDQSxDQUFRQTtvQkFDbkJJLElBQUlBLENBQUNBLEdBQUdBLEdBQUNBLEVBQUVBLEdBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLEVBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNwQ0EsQ0FBQ0E7Z0JBL0JMSjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxLQUFLQTt3QkFDZEEsUUFBUUEsRUFBQ0EscVVBWVJBO3dCQUNEQSxTQUFTQSxFQUFDQSxDQUFDQSxvQkFBUUEsRUFBQ0Esb0JBQVFBLENBQUNBO3FCQUVoQ0EsQ0FBQ0E7OytCQWVEQTtnQkFBREEsaUJBQUNBO1lBQURBLENBaENBLEFBZ0NDQSxJQUFBO1lBaENELG1DQWdDQyxDQUFBIiwiZmlsZSI6ImEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzE5LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1NTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlL3Muc2VydmljZVwiO1xyXG5pbXBvcnQge0NTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlL2Muc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidhLWMnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI20+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkxvZyhtLnZhbHVlKVwiPnNlbmQ8L2J1dHRvbj5cclxuXHJcbiAgICA8ZGl2PlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2E+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjYj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQWRkKGEudmFsdWUsYi52YWx1ZSlcIj5hZGQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTXVsdGkoYS52YWx1ZSxiLnZhbHVlKVwiPm11bHRpPC9idXR0b24+XHJcbiAgICA8cD57e3Jlc319PC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczpbU1NlcnZpY2UsQ1NlcnZpY2VdXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFDb21wb25lbnR7XHJcbiAgICByZXM6c3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbFM6U1NlcnZpY2UscHJpdmF0ZSBfY1M6Q1NlcnZpY2Upe31cclxub25Mb2cobTpzdHJpbmcpe1xyXG4gICAgdGhpcy5fbFMubChtKTtcclxufVxyXG4gICAgb25NdWx0aShhOm51bWJlcixiOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5yZXM9XCJcIit0aGlzLl9jUy5tdWx0aSgrYSwrYik7XHJcbiAgICB9XHJcblxyXG4gICAgb25BZGQoYTpudW1iZXIsYjpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMucmVzPVwiXCIrdGhpcy5fY1MuYWRkKCthLCtiKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
