System.register(['angular2/core', "./a.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, a_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (a_component_1_1) {
                a_component_1 = a_component_1_1;
            }],
        execute: function() {
            //pass [myname] from parent component to child component.child component receive data from [input]
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <a-c></a-c>\n    ",
                        directives: [a_component_1.AComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQSxrR0FBa0c7WUFDbEc7Z0JBQUFBO2dCQVVBQyxDQUFDQTtnQkFWREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBQ0EsUUFBUUE7d0JBQ2pCQSxRQUFRQSxFQUFDQSx5QkFFUkE7d0JBQ0RBLFVBQVVBLEVBQUNBLENBQUNBLHdCQUFVQSxDQUFDQTtxQkFFMUJBLENBQUNBOztpQ0FHREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQVZBLEFBVUNBLElBQUE7WUFWRCx1Q0FVQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7QUNvbXBvbmVudH0gZnJvbSBcIi4vYS5jb21wb25lbnRcIjtcclxuXHJcbi8vcGFzcyBbbXluYW1lXSBmcm9tIHBhcmVudCBjb21wb25lbnQgdG8gY2hpbGQgY29tcG9uZW50LmNoaWxkIGNvbXBvbmVudCByZWNlaXZlIGRhdGEgZnJvbSBbaW5wdXRdXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8YS1jPjwvYS1jPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6W0FDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
