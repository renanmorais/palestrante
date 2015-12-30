System.register(['angular2/core', "../common/palestrante.model", "../common/palestrante.service"], function(exports_1) {
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
    var core_1, palestrante_model_1, palestrante_service_1;
    var CadastroPalestranteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (palestrante_model_1_1) {
                palestrante_model_1 = palestrante_model_1_1;
            },
            function (palestrante_service_1_1) {
                palestrante_service_1 = palestrante_service_1_1;
            }],
        execute: function() {
            CadastroPalestranteComponent = (function () {
                function CadastroPalestranteComponent() {
                    this._palestranteService = palestrante_service_1.PalestranteService.getInstance();
                }
                CadastroPalestranteComponent.prototype.ngOnInit = function () {
                    this.palestrante = new palestrante_model_1.Palestrante();
                };
                CadastroPalestranteComponent.prototype.salvarPalestrante = function (p) {
                    var _this = this;
                    this._palestranteService.savePalestrante(this.palestrante)
                        .then(function (response) { return _this.palestranteSucesso(response); })
                        .catch(function (error) { return _this.palestranteError(error); });
                };
                CadastroPalestranteComponent.prototype.palestranteSucesso = function (response) {
                    this.palestrantes = response;
                    this.palestrante = new palestrante_model_1.Palestrante();
                    alert('deu certo' + response);
                };
                CadastroPalestranteComponent.prototype.palestranteError = function (error) {
                    alert('deu errado' + error);
                };
                CadastroPalestranteComponent = __decorate([
                    core_1.Component({
                        selector: 'cadastro.palestrante',
                        templateUrl: 'app/palestrante/cadastro-palestrante.component.html',
                        styleUrls: ['app/palestrante/cadastro-palestrante.component.css'],
                        providers: [palestrante_service_1.PalestranteService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CadastroPalestranteComponent);
                return CadastroPalestranteComponent;
            })();
            exports_1("CadastroPalestranteComponent", CadastroPalestranteComponent);
        }
    }
});
//# sourceMappingURL=cadastro-palestrante.component.js.map