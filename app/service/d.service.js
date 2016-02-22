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
    var DService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DService = (function () {
                function DService() {
                    this._data = ['a', 'b', 'c'];
                }
                DService.prototype.getRString = function () {
                    var ran = Math.floor(Math.random() * this._data.length);
                    return this._data[ran];
                };
                DService.prototype.insert = function (value) {
                    this._data.push(value);
                };
                DService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DService);
                return DService;
            })();
            exports_1("DService", DService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UvZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkRTZXJ2aWNlIiwiRFNlcnZpY2UuY29uc3RydWN0b3IiLCJEU2VydmljZS5nZXRSU3RyaW5nIiwiRFNlcnZpY2UuaW5zZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQUE7b0JBRVlDLFVBQUtBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUNBLEdBQUdBLEVBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQVFsQ0EsQ0FBQ0E7Z0JBUEdELDZCQUFVQSxHQUFWQTtvQkFDSUUsSUFBSUEsR0FBR0EsR0FBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBRUEsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtnQkFDM0JBLENBQUNBO2dCQUNERix5QkFBTUEsR0FBTkEsVUFBT0EsS0FBWUE7b0JBQ2ZHLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUMzQkEsQ0FBQ0E7Z0JBVExIO29CQUFDQSxpQkFBVUEsRUFBRUE7OzZCQVVaQTtnQkFBREEsZUFBQ0E7WUFBREEsQ0FWQSxBQVVDQSxJQUFBO1lBVkQsK0JBVUMsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlL2Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8yMS5cclxuICovXHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERTZXJ2aWNle1xyXG4gICAgcHJpdmF0ZSBfZGF0YSA9IFsnYScsJ2InLCdjJ107XHJcbiAgICBnZXRSU3RyaW5nKCl7XHJcbiAgICAgICAgbGV0IHJhbiA9TWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqdGhpcy5fZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhW3Jhbl07XHJcbiAgICB9XHJcbiAgICBpbnNlcnQodmFsdWU6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9kYXRhLnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
