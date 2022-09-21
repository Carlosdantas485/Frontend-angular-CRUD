import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Users } from './user.model';
import { URL_API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private snackBar: MatSnackBar,private http: HttpClient) { }

  showMesage(msg: string):void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition:"top"
    })
  }

  //definir o metodo com Observable 
  listUsers():Observable<Users[]>{
    //retorna a requisicao no endpoint fornecido
    return this.http.get<Users[]>(`${URL_API}users`)
  }

  //definir o metodo com Observable e passando como parametro o conteudo a ser enviado
  createUser(user: Users):Observable<Users>{
    //retorna a requisicao no endpoint fornecido, passando a URL do endpoint e o conteudo enviado
    return this.http.post<Users>(`${URL_API}users`, user);
  }
 
  //definir o metodo com Observable e passando como parametro o "ID" a ser buscado
  listbyUser(id: number):Observable<Users>{
    //cria uma constante pada definir caminha ate o endpoint onde se encontra o conteudo 
    const URL = `${URL_API}users/${id}`
    //realiza a mesma consuta do "listUsers()", porem com o caminho especifico ate o conteudo
    return this.http.get<Users>(URL)
  }

  //definir o metodo com Observable e passando como parametro o "ID" a ser deletado
  deleteUser(id:number):Observable<Users>{
    //cria uma constante pada definir caminha ate o endpoint onde se encontra o conteudo 
    const URL = `${URL_API}users/${id}`;
    //Realiza a acao de deletar passando o caminha definido no passo anterior
    return this.http.delete<Users>(URL)
  }

  updateUser(user: Users):Observable<Users>{
    const URL = `${URL_API}users/${user.id}`
    return this.http.put<Users>(URL, user )
  }
  
}
