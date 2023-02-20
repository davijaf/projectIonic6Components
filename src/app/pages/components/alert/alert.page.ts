import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async alertComum() {
    let alert = await this.alertCtrl.create({
      header: 'Atenção:',
      subHeader: 'Mensagem importante',
      message: 'Isto é um alerta!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async alertMultBotoes() {
    let alert = await this.alertCtrl.create({
      header: 'Atenção:',
      subHeader: 'Mensagem importante',
      message: 'Isto é um alerta!',
      buttons: ['Cancelar','Salvar',"Deletar"],
    });
    await alert.present();
  }

  async alertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta!',
      message: "Tem certeza que deseja excluir o usuário?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.handlerMessage = 'Alerta cancelada';
            console.log('Cancelado');
          },
        },
        {
          text: 'Confirmar exclusão',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alerta confirmada';
            console.log('Confirmado');
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async alertPrompt() {
    let alert = await this.alertCtrl.create({
      header: 'Entre com seus dados, por favor!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirme os dados!')
          }
        },
        {
          text: 'Ok',
          handler: (form) => {
            console.log(form)
          }
        }

      ],
      inputs: [
        {
          placeholder: 'Email',
          type: 'text',
          name: 'email'
        },
        {
          placeholder: 'Senha (max 8 caracteres)',
          type: 'password',
          name: 'senha',
          attributes: {
            maxlength: 8,
          },
        },
      ],
    });

    await alert.present();
  }

}
