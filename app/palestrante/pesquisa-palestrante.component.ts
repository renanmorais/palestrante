/**
 * Created by renan on 29/12/15.
 */
import {Component} from 'angular2/core';
import {PalestranteService} from "../common/palestrante.service";
import {Palestrante} from "../common/palestrante.model";


@Component({
    selector: 'pesquisa.palestrante',
    templateUrl: 'app/palestrante/pesquisa-palestrante.component.html',
    styleUrls: ['app/palestrante/pesquisa-palestrante.component.css'],
    providers: [PalestranteService]

})

export class PesquisaPalestanteComponent {

    private palestrantes:Palestrante[] = [];
    public _palestranteService = PalestranteService.getInstance();

    constructor() {

    }

    ngOnInit() {
        this.getPalestrantes();
    }

    getPalestrantes() {
        this._palestranteService.getPalestrantes()
            .then(resolve => this.getPalestrantesSucess(resolve))
            .catch(error => this.getPalestranteError(error))
    }

    getPalestrantesSucess(resolve:any) {
        if (resolve) {
            this.palestrantes = resolve;
        }
    }

    getPalestranteError(error:any) {
        error()
        this.palestrantes = null;
    }

}