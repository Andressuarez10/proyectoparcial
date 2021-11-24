import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina6',
  templateUrl: './pagina6.component.html',
  styleUrls: ['./pagina6.component.css']
})
export class Pagina6Component implements OnInit {

  
  newLsUser: any = [];

  userInfo: any = {
    tNombre:'', tApellido:'', Correo1:'', nTelefono:'', radio:'', nDocumento:'',
  }
 
  constructor() { }


  ngOnInit(): void {
   
    this.newLsUser = JSON.parse(localStorage.getItem('$key') || '{}');


   }

   Registro(){
    let lstUsers = [];
     if (localStorage.getItem('$key') === null){
       lstUsers.push(this.userInfo);
       localStorage.setItem('$key', JSON.stringify(lstUsers));
       console.log(lstUsers);
       

     }else{
      lstUsers = JSON.parse(localStorage.getItem('$key') || '{}');
      lstUsers.push(this.userInfo);
      localStorage.setItem('$key', JSON.stringify(lstUsers));
       console.log(lstUsers);
       window.location.reload()

     }

    
   }

  

   delete(index: any){
    if(confirm("¿Desea eliminar esta columna?")){


      if(index){
        console.log(index);
        this.newLsUser.splice(index);
        localStorage.setItem('$key',JSON.stringify(this.newLsUser));
  
       
      }


    }     

     
    }

    Limpiar(){
      if(confirm("¿Deseas limpiar este formulario se borraran todos los datos?!")){
        localStorage.removeItem('$key');
        window.location.reload()
      }
    }



  
   }