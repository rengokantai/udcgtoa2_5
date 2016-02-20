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
                    this._last = '';
                }
                SService.prototype.l = function (m) {
                    console.log(m + this._last);
                    this._last = m;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2Uvcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlNTZXJ2aWNlIiwiU1NlcnZpY2UuY29uc3RydWN0b3IiLCJTU2VydmljZS5sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQTtnQkFBQUE7b0JBRVlDLFVBQUtBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUt2QkEsQ0FBQ0E7Z0JBSkdELG9CQUFDQSxHQUFEQSxVQUFFQSxDQUFRQTtvQkFDTkUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQzFCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFDQSxDQUFDQSxDQUFDQTtnQkFDakJBLENBQUNBO2dCQU5MRjtvQkFBQ0EsaUJBQVVBLEVBQUVBOzs2QkFPWkE7Z0JBQURBLGVBQUNBO1lBQURBLENBUEEsQUFPQ0EsSUFBQTtZQVBELCtCQU9DLENBQUEiLCJmaWxlIjoic2VydmljZS9zLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIZXJuYW4gWS5LZSBvbiAyMDE2LzIvMTkuXHJcbiAqL1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTU2VydmljZXtcclxuICAgIHByaXZhdGUgX2xhc3QgPSAnJztcclxuICAgIGwobTpzdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG0rdGhpcy5fbGFzdCk7XHJcbiAgICAgICAgdGhpcy5fbGFzdD1tO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
