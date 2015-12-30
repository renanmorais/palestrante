System.register(['angular2/core', 'angular2/router', './home/home.component', "./palestrante/cadastro-palestrante.component", "./palestrante/pesquisa-palestrante.component", "./common/palestrante.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, cadastro_palestrante_component_1, pesquisa_palestrante_component_1, palestrante_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (cadastro_palestrante_component_1_1) {
                cadastro_palestrante_component_1 = cadastro_palestrante_component_1_1;
            },
            function (pesquisa_palestrante_component_1_1) {
                pesquisa_palestrante_component_1 = pesquisa_palestrante_component_1_1;
            },
            function (palestrante_service_1_1) {
                palestrante_service_1 = palestrante_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [palestrante_service_1.PalestranteService],
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/pesquisa-palestrante', name: 'PesquisaPalestrante', component: pesquisa_palestrante_component_1.PesquisaPalestanteComponent },
                        { path: '/cadastro-palestrante', name: 'CadastroPalestrante', component: cadastro_palestrante_component_1.CadastroPalestranteComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map