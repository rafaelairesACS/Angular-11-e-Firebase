import { classToPlain } from "class-transformer";

export abstract class Model{
    id: string;

    toObject(): object{
        let obj:any =  classToPlain;
        delete obj.id;
        return obj;
    }
}