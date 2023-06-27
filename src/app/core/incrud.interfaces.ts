import	{	Observable	}	from 'rxjs';

export interface ICrud<T>{
  get(id: string): Observable<T>;
  createOrUpdate(item:T):Promise<T>
  delete(id:string):Promise<void>
}
