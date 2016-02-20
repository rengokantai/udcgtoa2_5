System.register(['angular2/core', "./service/s.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, s_service_1;
    var AComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (s_service_1_1) {
                s_service_1 = s_service_1_1;
            }],
        execute: function() {
            AComponent = (function () {
                function AComponent(_lS) {
                    this._lS = _lS;
                }
                AComponent.prototype.onLog = function (m) {
                    this._lS.l(m);
                };
                AComponent = __decorate([
                    core_1.Component({
                        selector: 'a-c',
                        template: "\n    <input type=\"text\" #m>\n    <button (click)=\"onLog(m.value)\">send</button>",
                        providers: [s_service_1.SService]
                    }), 
                    __metadata('design:paramtypes', [s_service_1.SService])
                ], AComponent);
                return AComponent;
            })();
            exports_1("AComponent", AComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkFDb21wb25lbnQiLCJBQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQUNvbXBvbmVudC5vbkxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBVUlBLG9CQUFvQkEsR0FBWUE7b0JBQVpDLFFBQUdBLEdBQUhBLEdBQUdBLENBQVNBO2dCQUFFQSxDQUFDQTtnQkFDdkNELDBCQUFLQSxHQUFMQSxVQUFNQSxDQUFRQTtvQkFDVkUsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xCQSxDQUFDQTtnQkFiREY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBQ0EsS0FBS0E7d0JBQ2RBLFFBQVFBLEVBQUNBLHNGQUVzQ0E7d0JBQy9DQSxTQUFTQSxFQUFDQSxDQUFDQSxvQkFBUUEsQ0FBQ0E7cUJBRXZCQSxDQUFDQTs7K0JBT0RBO2dCQUFEQSxpQkFBQ0E7WUFBREEsQ0FkQSxBQWNDQSxJQUFBO1lBZEQsbUNBY0MsQ0FBQSIsImZpbGUiOiJhLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xOS5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtTU2VydmljZX0gZnJvbSBcIi4vc2VydmljZS9zLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonYS1jJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNtPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25Mb2cobS52YWx1ZSlcIj5zZW5kPC9idXR0b24+YCxcclxuICAgIHByb3ZpZGVyczpbU1NlcnZpY2VdXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sUzpTU2VydmljZSl7fVxyXG5vbkxvZyhtOnN0cmluZyl7XHJcbiAgICB0aGlzLl9sUy5sKG0pO1xyXG59XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
