import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CognitoService } from '../cognito.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public router: Router,public alertCtrl:AlertController,public cognito:CognitoService) { }

  logout(){
this.logoutnow();
  }

async logoutnow(){
  const alert = await this.alertCtrl.create({
    header: "Log out?",
    buttons: [{
      text: 'Cancel',
    },{
      text: 'Yes',
      handler:()=> {
        this.router.navigate(['/login']);
        this.cognito.getAuthenticatedUser().signOut();
      }
    }]
  })
  await alert.present();
}

  spade(){
    this.router.navigate(['/home'])
  }

  holo(){
    this.router.navigate(['/home1'])
  }

  game3(){
    this.router.navigate(['/home2'])
  }
  game4(){
    this.router.navigate(['/testgame'])
  }
  ngOnInit() {
  }

}
