import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina7',
  templateUrl: './pagina7.component.html',
  styleUrls: ['./pagina7.component.css']
})
export class Pagina7Component implements OnInit {

  newLsUser: any = [];

  userInfo: any = {
    txtNomApe:'', nId:'', option:'', start:'', txtDireccion:'', 
  }

  constructor() { }

  ngOnInit(): void {
  }

  agendar(){
    let lstUsers = [];
     if (localStorage.getItem('llave') === null){
       lstUsers.push(this.userInfo);
       localStorage.setItem('llave', JSON.stringify(lstUsers));
       console.log(lstUsers);
       

     }else{
      lstUsers = JSON.parse(localStorage.getItem('llave') || '{}');
      lstUsers.push(this.userInfo);
      localStorage.setItem('llave', JSON.stringify(lstUsers));
       console.log(lstUsers);
       alert("Gracias por Agendar su cita vuelva pronto.")

       window.location.reload()

     }
  }

}
