import { Model } from "../core/models";
import { Departamento } from "./departamento.model";

export class Funcionario extends Model{
    nome:string
    funcao:string
    email:string
    ultimoacesso:Date
    departamento:Departamento
}
