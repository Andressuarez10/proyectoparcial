import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina8',
  templateUrl: './pagina8.component.html',
  styleUrls: ['./pagina8.component.css']
})
export class Pagina8Component implements OnInit {

  userInfo: any = {
    txtNomApe:'', nId:'',   option:'',  option1:'',  option2:'',  option3:'',  option4:'',  option5:'',  option6:'',  option7:'',  option8:'',  option9:'',  option10:'',  option11:'',  option12:'',  
  }

  constructor() { }

  ngOnInit(): void {
  }

  procesar(){
    let lstUsers = [];
     if (localStorage.getItem('CRNV') === null){
       lstUsers.push(this.userInfo);
       localStorage.setItem('CRNV', JSON.stringify(lstUsers));
       console.log(lstUsers);
       

     }else{
      lstUsers = JSON.parse(localStorage.getItem('CRNV') || '{}');
      lstUsers.push(this.userInfo);
      localStorage.setItem('CRNV', JSON.stringify(lstUsers));
       console.log(lstUsers);
       alert("Gracias por realizar la encuesta tu opinion salvara muchas vidas :3")

       window.location.reload()

     }
  }


  }