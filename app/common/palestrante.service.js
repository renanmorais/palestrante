System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var PalestranteService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PalestranteService = (function () {
                function PalestranteService() {
                    this._palestrantes = [];
                    if (!PalestranteService.isCreating) {
                        throw new Error("You can't call new in Singleton instances! Call SingletonService.getInstance() instead.");
                    }
                }
                PalestranteService.getInstance = function () {
                    if (PalestranteService.instance == null) {
                        PalestranteService.isCreating = true;
                        PalestranteService.instance = new PalestranteService();
                        PalestranteService.isCreating = false;
                    }
                    return PalestranteService.instance;
                };
                /**
                 putPalestrante() {
                    this.palestrante1.id = 0;
                    this.palestrante1.nome = 'Primeiro Palestrante';
                    this.palestrante1.email = 'email@gmail.com';
                    this.palestrante1.nascimento = '11/05/2015';
                    this.palestrante1.cidade = 'Goiânia';
                    this.palestrante1.telefone = 6291016748;
                    this.palestrante1.qtdpalestras = '8';
                    this.palestrante1.assuntos = 'AngularJs; Android; Web';
                    this.palestrante1.facebook = 'www.facebook.com';
                    this.palestrante1.googleplus = 'www.google+.com';
                    this.palestrante1.twiter = 'www.twiter.com';
                    this.palestrante1.linkedin = 'www.linkedin.com';
            
                    this.palestrante2.id = 1;
                    this.palestrante2.nome = 'Segundo Palestrante';
                    this.palestrante2.email = 'emailrest@gmail.com';
                    this.palestrante2.nascimento = '11/05/2015';
                    this.palestrante2.cidade = 'Goiânia';
                    this.palestrante2.telefone = 6291016748;
                    this.palestrante2.qtdpalestras = '8';
                    this.palestrante2.assuntos = 'AngularJs; Android; Web';
                    this.palestrante2.facebook = 'www.facebook.com';
                    this.palestrante2.googleplus = 'www.google+.com';
                    this.palestrante2.twiter = 'www.twiter.com';
                    this.palestrante2.linkedin = 'www.linkedin.com';
            
            
                }
                 **/
                PalestranteService.prototype.savePalestrante = function (palestrante) {
                    this._palestrantes.push(palestrante);
                    return Promise.resolve(this._palestrantes);
                };
                PalestranteService.prototype.getPalestrantes = function () {
                    return Promise.resolve(this._palestrantes);
                };
                PalestranteService.isCreating = false;
                PalestranteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PalestranteService);
                return PalestranteService;
            })();
            exports_1("PalestranteService", PalestranteService);
        }
    }
});
//# sourceMappingURL=palestrante.service.js.map