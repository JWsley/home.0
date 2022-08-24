import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


resultado ?:String
n1:number
n2:number


resu:String
celsius:number
fahren:number


iimc:String
Peso:number
altura:number
res:number

verify:String

selct:String
mensagem:string
error:string

ionViewCanEnter(){

}

  constructor(private alertController: AlertController) {}



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Calculo efetuado com sucesso!',
      subHeader:'',
      message:  this.iimc.valueOf(),
      buttons: ['FECHAR'],
    });

    await alert.present();
  }




  som(){
      var num = Number(this.n1) + Number(this.n2)

      this.resultado = String(num)


  }



  sub(){
    var num = Number(this.n1) - Number(this.n2)

    this.resultado = String(num)

}


mult(){
  var num = Number(this.n1) * Number(this.n2)

  this.resultado = String(num)

}


divi(){
var N2 = Number(this.n2)
  if(N2!=0){
    var num = Number(this.n1) / N2
    this.resultado = String(num)

}else{this.resultado = ''
}


}


clear(){





   this.resultado = ""
}



convert(){
  var r = (this.celsius * 1.8 )+32

  this.resu = 'ªFahr:' + Number(r)
}


imcMasc(){
  let peso = Number(this.Peso)
  let altura = Number(this.altura)

 let rs = this.res = peso / (altura * altura)

 if (rs < 20.7){
  this.verify = "Abaixo do peso..."
}else if ((rs >=20.7) && (rs<27.8)){
  this.verify = "Peso normal..."
}else if (rs >27.9) {
  this.verify = "Acima do peso..."
}

this.iimc = ' IMC:' +"["+ String(rs.toFixed(2))+"]" +"." + this.verify



  }


  imcFemi(){
    let peso = Number(this.Peso)
    let altura = Number(this.altura)

   let rs = this.res = peso / (altura * altura)

   if (rs < 19.1){
    this.verify = "Abaixo do peso..."
  }else if ((rs >=19.1) && (rs<25.8)){
    this.verify = "Peso normal..."
  }else if (rs >25.9) {
    this.verify = "Acima do peso..."
  }

  this.iimc = 'Seu imc é de:' + String(rs.toFixed(2)) +"." + this.verify



    }


    verfs(){

      if (this.selct == "masc"){
         this.imcMasc()
         this.presentAlert()

      }else if (this.selct == "femi"){
        this.imcFemi()
         this.presentAlert()
      }else{
        this.error = "selecione alguma coisa."
      }
    }

}



