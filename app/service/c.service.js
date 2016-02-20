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
    var CService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CService = (function () {
                function CService() {
                }
                CService.prototype.add = function (a, b) {
                    return a + b;
                };
                CService.prototype.multi = function (a, b) {
                    return a * b;
                };
                CService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CService);
                return CService;
            })();
            exports_1("CService", CService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UvYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkNTZXJ2aWNlIiwiQ1NlcnZpY2UuY29uc3RydWN0b3IiLCJDU2VydmljZS5hZGQiLCJDU2VydmljZS5tdWx0aSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUFBO2dCQVFBQyxDQUFDQTtnQkFOR0Qsc0JBQUdBLEdBQUhBLFVBQUlBLENBQVFBLEVBQUNBLENBQVFBO29CQUNqQkUsTUFBTUEsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2ZBLENBQUNBO2dCQUNERix3QkFBS0EsR0FBTEEsVUFBTUEsQ0FBUUEsRUFBQ0EsQ0FBUUE7b0JBQ25CRyxNQUFNQSxDQUFDQSxDQUFDQSxHQUFDQSxDQUFDQSxDQUFDQTtnQkFDZkEsQ0FBQ0E7Z0JBUExIO29CQUFDQSxpQkFBVUEsRUFBRUE7OzZCQVFaQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0FSQSxBQVFDQSxJQUFBO1lBUkQsK0JBUUMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlL2Muc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xOS5cclxuICovXHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENTZXJ2aWNle1xyXG4gICAgYWRkKGE6bnVtYmVyLGI6bnVtYmVyKXtcclxuICAgICAgICByZXR1cm4gYStiO1xyXG4gICAgfVxyXG4gICAgbXVsdGkoYTpudW1iZXIsYjpudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiBhKmI7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
