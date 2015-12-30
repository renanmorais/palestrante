System.register(['angular2/core', "../common/palestrante.service"], function(exports_1) {
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
    var core_1, palestrante_service_1;
    var PesquisaPalestanteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (palestrante_service_1_1) {
                palestrante_service_1 = palestrante_service_1_1;
            }],
        execute: function() {
            PesquisaPalestanteComponent = (function () {
                function PesquisaPalestanteComponent() {
                    this.palestrantes = [];
                    this._palestranteService = palestrante_service_1.PalestranteService.getInstance();
                }
                PesquisaPalestanteComponent.prototype.ngOnInit = function () {
                    this.getPalestrantes();
                };
                PesquisaPalestanteComponent.prototype.getPalestrantes = function () {
                    var _this = this;
                    this._palestranteService.getPalestrantes()
                        .then(function (resolve) { return _this.getPalestrantesSucess(resolve); })
                        .catch(function (error) { return _this.getPalestranteError(error); });
                };
                PesquisaPalestanteComponent.prototype.getPalestrantesSucess = function (resolve) {
                    if (resolve) {
                        this.palestrantes = resolve;
                    }
                };
                PesquisaPalestanteComponent.prototype.getPalestranteError = function (error) {
                    error();
                    this.palestrantes = null;
                };
                PesquisaPalestanteComponent = __decorate([
                    core_1.Component({
                        selector: 'pesquisa.palestrante',
                        templateUrl: 'app/palestrante/pesquisa-palestrante.component.html',
                        styleUrls: ['app/palestrante/pesquisa-palestrante.component.css'],
                        providers: [palestrante_service_1.PalestranteService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PesquisaPalestanteComponent);
                return PesquisaPalestanteComponent;
            })();
            exports_1("PesquisaPalestanteComponent", PesquisaPalestanteComponent);
        }
    }
});
//# sourceMappingURL=pesquisa-palestrante.component.js.map