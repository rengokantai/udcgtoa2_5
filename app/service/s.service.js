System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SService = (function () {
                function SService() {
                }
                SService.prototype.l = function (m) {
                    console.log(m);
                };
                SService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SService);
                return SService;
            })();
            exports_1("SService", SService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2Uvcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlNTZXJ2aWNlIiwiU1NlcnZpY2UuY29uc3RydWN0b3IiLCJTU2VydmljZS5sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7Z0JBS0FDLENBQUNBO2dCQUhHRCxvQkFBQ0EsR0FBREEsVUFBRUEsQ0FBUUE7b0JBQ05FLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNuQkEsQ0FBQ0E7Z0JBSkxGO29CQUFDQSxpQkFBVUEsRUFBRUE7OzZCQUtaQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0FMQSxBQUtDQSxJQUFBO1lBTEQsK0JBS0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlL3Muc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xOS5cclxuICovXHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNTZXJ2aWNle1xyXG4gICAgbChtOnN0cmluZyl7XHJcbiAgICAgICAgY29uc29sZS5sb2cobSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
