import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {

  constructor(private actionSheetCtrl : ActionSheetController) { }

  ngOnInit() {
  }
  //result: string;
  async actionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Albuns',
      mode: 'ios',
      subHeader: 'Ação:',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          data: {
            action: 'delete',
          },
          handler: () => {
            console.log("Delete Clicked!")
          }
        },
        {
          text: 'Share',
          icon: 'share-social',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log("Share Clicked!")
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          data: {
            action: 'cancel',
          },
          handler: () => {
            console.log("Cancel Clicked!")
          }
        },
      ],
    });
    await actionSheet.present();
  }
}
