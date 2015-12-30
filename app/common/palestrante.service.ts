/**
 * Created by renan on 29/12/15.
 */
import {Injectable} from 'angular2/core';
import {Palestrante} from "./palestrante.model";


@Injectable()
export class PalestranteService {
    private _palestrantes: Palestrante[] = [];

    static instance:PalestranteService;
    static isCreating:boolean = false;


    constructor() {
        if (!PalestranteService.isCreating) {
            throw new Error("You can't call new in Singleton instances! Call SingletonService.getInstance() instead.");
        }
    }

    static getInstance() {
        if (PalestranteService.instance == null) {
            PalestranteService.isCreating = true;
            PalestranteService.instance = new PalestranteService();
            PalestranteService.isCreating = false;
        }

        return PalestranteService.instance;
    }

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

    savePalestrante(palestrante:Palestrante) {
        this._palestrantes.push(palestrante);
        return Promise.resolve(this._palestrantes);
    }

    getPalestrantes() {
        return Promise.resolve(this._palestrantes);
    }

}
