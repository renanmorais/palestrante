/**
 * Created by renan on 29/12/15.
 */
import {Component} from 'angular2/core';
import {Palestrante} from "../common/palestrante.model";
import {PalestranteService} from "../common/palestrante.service";

@Component({
    selector:'cadastro.palestrante',
    templateUrl:'app/palestrante/cadastro-palestrante.component.html',
    styleUrls: ['app/palestrante/cadastro-palestrante.component.css'],
    providers:[PalestranteService]
})

export class CadastroPalestranteComponent {

    private palestrante: Palestrante;
    private palestrantes: Palestrante[];

    public _palestranteService = PalestranteService.getInstance();

    constructor(){ }

    ngOnInit() {
        this.palestrante = new Palestrante();
    }

    salvarPalestrante(p: Palestrante){
        this._palestranteService.savePalestrante(this.palestrante)
        .then(response => this.palestranteSucesso(response))
        .catch(error => this.palestranteError(error))
    }

    palestranteSucesso(response: any){
        this.palestrantes = response;
        this.palestrante = new Palestrante();
        alert('deu certo' + response);
    }

    palestranteError(error: any){
        alert('deu errado' + error);
    }
}