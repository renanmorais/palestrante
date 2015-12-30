import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {CadastroPalestranteComponent} from "./palestrante/cadastro-palestrante.component";
import {PesquisaPalestanteComponent} from "./palestrante/pesquisa-palestrante.component";
import {PalestranteService} from "./common/palestrante.service";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [PalestranteService],
})
@RouteConfig([
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/pesquisa-palestrante', name: 'PesquisaPalestrante', component: PesquisaPalestanteComponent},
    {path: '/cadastro-palestrante', name: 'CadastroPalestrante', component: CadastroPalestranteComponent}
])
export class AppComponent {
}