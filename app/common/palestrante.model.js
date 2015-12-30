System.register([], function(exports_1) {
    var Palestrante;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by renan on 29/12/15.
             */
            Palestrante = (function () {
                function Palestrante(id, nome, email, nascimento, cidade, telefone, qtdpalestras, assuntos, facebook, googleplus, twiter, linkedin) {
                    if (id === void 0) { id = 0; }
                    if (nome === void 0) { nome = null; }
                    if (email === void 0) { email = null; }
                    if (nascimento === void 0) { nascimento = null; }
                    if (cidade === void 0) { cidade = null; }
                    if (telefone === void 0) { telefone = 0; }
                    if (qtdpalestras === void 0) { qtdpalestras = null; }
                    if (assuntos === void 0) { assuntos = null; }
                    if (facebook === void 0) { facebook = null; }
                    if (googleplus === void 0) { googleplus = null; }
                    if (twiter === void 0) { twiter = null; }
                    if (linkedin === void 0) { linkedin = null; }
                    this.id = id;
                    this.nome = nome;
                    this.email = email;
                    this.nascimento = nascimento;
                    this.cidade = cidade;
                    this.telefone = telefone;
                    this.qtdpalestras = qtdpalestras;
                    this.assuntos = assuntos;
                    this.facebook = facebook;
                    this.googleplus = googleplus;
                    this.twiter = twiter;
                    this.linkedin = linkedin;
                }
                return Palestrante;
            })();
            exports_1("Palestrante", Palestrante);
        }
    }
});
//# sourceMappingURL=palestrante.model.js.map