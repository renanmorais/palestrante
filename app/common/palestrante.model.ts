/**
 * Created by renan on 29/12/15.
 */
export class Palestrante {
    constructor(public id:number = 0,
                public nome:string = null,
                public email:string = null,
                public nascimento:string = null,
                public cidade:string = null,
                public telefone:number = 0,
                public qtdpalestras:string = null,
                public assuntos:string = null,
                public facebook:string = null,
                public googleplus:string = null,
                public twiter:string = null,
                public linkedin:string = null) {
    }
}