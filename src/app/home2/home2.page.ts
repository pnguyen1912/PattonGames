import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  async
} from '@angular/core/testing';
import {
  AlertController
} from '@ionic/angular';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  pick: number;
  constructor(public router: Router, public alertCtrl: AlertController,public api:RestapiService) {}
  icstars = {
    'patton': 1,
    'shanta': 1,
    'touly': 5,
    'cesar': 8,
    'kazi': 6,
    'channel': 3,
    'marquise': 10,
    'DJ': 7,
    'maday': 3,
    'james': 2,
    'manny': 5,
    'daniel': 2,
    'khalil': 2,
    'tamar': 5,
    'jordan': 9,
    'alan': 1,
  }
  super = {
    'patton': 'x3 the next card play',
    'shanta': 'x3 the next card play',
    'touly': 'Next hand is a draw',
    'cesar': 'No power',
    'kazi': 'Cancel all boost',
    'channel': 'Next hand + 6',
    'marquise': '-5 next hand',
    'DJ': 'Next hand -3',
    'maday': '+7 next hand',
    'james': 'x2 Next hand',
    'manny': 'No power',
    'daniel': '+1 next hand',
    'khalil': 'Add half card rating',
    'tamar': 'Randomly +/- 3 next hand',
    'jordan': '-2 next hand',
    'alan': 'If not boosted, +5',
  }

  user = {

  }

  cpu = {

  }
  sortable = [];

  cpuscore = 0;
  userscore = 0;

currentcpu="";
previouscpu ='';
previoususer= '';
winpreivoushand = false;
affect(card){

}

compare(x,y){
  let temp = this.icstars[x]
  let temp1 = this.icstars[y]
  // 'patton': 'x3 the next card play',
  // 'shanta': 'x3 the next card play',
  // 'touly': 'Next hand is a draw',
  // 'cesar': 'No power',
  // 'kazi': 'Cancel all boost',
  // 'channel': 'Next hand + 6',
  // 'marquise': '-5 next hand',
  // 'DJ': 'Next hand -3',
  // 'maday': '+7 next hand',
  // 'james': 'x2 Next hand',
  // 'manny': 'No power',
  // 'daniel': '+1 next hand',
  // 'khalil': 'Add half card rating',
  // 'tamar': 'Randomly +/- 3 next hand',
  // 'jordan': '-2 next hand',
  // 'alan': 'If not boosted, +5', 

  if (this.previouscpu == 'patton'){temp = temp * 3}
  else if (this.previouscpu == 'shanta'){temp = temp * 3}
  else if (this.previouscpu == 'touly'){temp = 0;temp1 =0}
  else if (this.previouscpu == 'cesar'){temp = temp}
  else if (this.previouscpu == 'kazi'){temp = temp}
  else if (this.previouscpu == 'channel'){temp = temp +6}
  else if (this.previouscpu == 'marquise'){temp = temp -5}
  else if (this.previouscpu == 'DJ'){temp = temp - 3}
  else if (this.previouscpu == 'maday'){temp = temp +7}
  else if (this.previouscpu == 'james'){temp = temp * 2}
  else if (this.previouscpu == 'manny'){temp = temp}
  else if (this.previouscpu == 'daniel'){temp = temp +1}
  else if (this.previouscpu == 'khalil'){temp = temp + temp/2}
  else if (this.previouscpu == 'tamar'){temp = temp + 3}
  else if (this.previouscpu == 'jordan'){temp = temp - 2}
  else if (this.previouscpu == 'alan'){temp = temp + 5}
  if (this.previoususer == 'patton'){temp1 = temp1 * 3}
  else if (this.previoususer == 'shanta'){temp1 = temp1 * 3}
  else if (this.previoususer == 'touly'){temp1 = 0; temp=0}
  else if (this.previoususer == 'cesar'){temp1 = temp1}
  else if (this.previoususer == 'kazi'){temp1 = temp1}
  else if (this.previoususer == 'channel'){temp1 = temp1 +6}
  else if (this.previoususer == 'marquise'){temp1 = temp1 -5}
  else if (this.previoususer == 'DJ'){temp1 = temp1 - 3}
  else if (this.previoususer == 'maday'){temp1 = temp1 +7}
  else if (this.previoususer == 'james'){temp1 = temp1 * 2}
  else if (this.previoususer == 'manny'){temp1 = temp1}
  else if (this.previoususer == 'daniel'){temp1 = temp1 +1}
  else if (this.previoususer == 'khalil'){temp1 = temp1 + temp1/2}
  else if (this.previoususer == 'tamar'){temp1 = temp1 + 3}
  else if (this.previoususer == 'jordan'){temp1 = temp1 - 2}
  else if (this.previoususer == 'alan'){temp1 = temp1 + 5}
  
  // console.log(temp)
  if (temp == temp1 ){
    console.log('tie')
  } else if (temp > temp1){
    this.cpuscore++;
  } else if (temp1 > temp){
    this.userscore++;
  }
this.previouscpu = x;
this.previoususer = y;
console.log(x,y)
}


  playgame() {
    document.getElementById('game').style.display = 'block';
    document.getElementById('char').style.display = 'none'
    let cpu = < HTMLInputElement > document.getElementById('cpu')
    let user = < HTMLInputElement > document.getElementById('user')
    if (this.pick == 1) {
      user.src = `assets/game3/Ben.png`
      cpu.src = `assets/game3/Will.png`
    } else {
      cpu.src = `assets/game3/Ben.png`
      user.src = `assets/game3/Will.png`

    }

    for (var vehicle in this.icstars) {
      this.sortable.push(vehicle);
    }
    this.sortable.sort(function (a, b) {
      return 0.5 - Math.random()
    });
    for (let i = 0; i < this.sortable.length; i++) {
      console.log(this.sortable[i])
      let deck = document.getElementById('deck')
      let img = document.createElement('img')
      img.src = `assets/photos/${this.sortable[i]}.jpg`
      img.style.width = '25%'
      img.id = `${this.sortable[i]}`
      img.onclick = (async) => this.moneyAlert(img.id);
      deck.append(img)
    }
  }

  async moneyAlert(x) {
    console.log(x)
    const alert = await this.alertCtrl.create({
      header: x,
      subHeader: `Rating: ${this.icstars[x]}`,
      message: this.super[x],
      buttons: [{
        text: "Cancel"
      }, {
        text: "Pick",
        handler: () => {
          this.user[x] = this.icstars[x]
          this.sortable.splice(this.sortable.indexOf(x), 1)
          console.log(this.sortable)
          console.log(this.user)
          let x1 = < HTMLInputElement > document.getElementById(`${x}`)
          let user = < HTMLInputElement > document.getElementById('usercard')
          user.append(x1)
          x1.onclick = (async) => this.playAlert(x);

          this.cpupick()

        }
      }]
    })
    await alert.present();
  }

  async playAlert(x) {
    console.log(x)
    const alert = await this.alertCtrl.create({
      header: x,
      subHeader: this.icstars[x],
      message: this.super[x],
      buttons: [{
        text: "Cancel"
      }, {
        text: 'Play',
        handler: () => {
          let x1 = document.getElementById(`${x}`)
          document.getElementById('current').style.display = 'block'
          this.cputurn();

          let user = < HTMLInputElement > document.getElementById('usercard1')
          user.src = `assets/photos/${x}.jpg`
          x1.style.display = 'none';
          this.compare(this.currentcpu,x)
          if (Object.keys(this.cpu).length==0){
this.playagain();
          }
        }
      }]
    })
    await alert.present();
  }

async playagain(){
  let winner ='';
  if (this.userscore == this.cpuscore){
    winner = 'TIE GAME'
  } else if (this.userscore > this.cpuscore){
    winner = 'Congratulation, you win'
    this.api.User.starswin++;
  } else {
    winner = 'You lost.'
  }
  const alert = await this.alertCtrl.create({
    header: `${winner}`,
    message: `Play again?`,
    buttons: [{
      text: 'Cancel'
    },{
      text: `Yes`,
      handler: ()=>{
      //   this.icstars = {
      //     'patton': 1,
      //     'shanta': 1,
      //     'touly': 5,
      //     'cesar': 8,
      //     'kazi': 6,
      //     'channel': 3,
      //     'marquise': 10,
      //     'DJ': 7,
      //     'maday': 3,
      //     'james': 2,
      //     'manny': 5,
      //     'daniel': 2,
      //     'khalil': 2,
      //     'tamar': 5,
      //     'jordan': 9,
      //     'alan': 1,
      //   }
      //   this.super = {
      //     'patton': 'x3 the next card play',
      //     'shanta': 'x3 the next card play',
      //     'touly': 'Next hand is a draw',
      //     'cesar': 'No power',
      //     'kazi': 'Cancel all boost',
      //     'channel': 'Next hand + 6',
      //     'marquise': '-5 next hand',
      //     'DJ': 'Next hand -3',
      //     'maday': '+7 next hand',
      //     'james': 'x2 Next hand',
      //     'manny': 'No power',
      //     'daniel': '+1 next hand',
      //     'khalil': 'Add half card rating',
      //     'tamar': 'Randomly +/- 3 next hand',
      //     'jordan': '-2 next hand',
      //     'alan': 'If not boosted, +5',
      //   }
      
      //   this.user = {
      
      //   }
      
      //   this.cpu = {
      
      //   }
      //   this.sortable = [];
      
      //   this.cpuscore = 0;
      //   this.userscore = 0;
      
      // this.currentcpu="";
      // this.previouscpu ='';
      // this.previoususer= '';
      // document.getElementById('current').style.display = 'none'
      //   this.playgame()
      location.reload();
      }
    }]
  })
  await alert.present();
}


  cputurn() {
    // let deck = <HTMLInputElement> document.getElementById('deck')
    let temp = Object.keys(this.cpu)
    let card = Math.floor(Math.random() * temp.length)
    console.log(card)
    let temp111 = temp[card]
    console.log(temp111)
    let img1 = < HTMLInputElement > document.getElementById(`${temp111}`)
    img1.style.display = 'none'
    let img = < HTMLInputElement > document.getElementById(`cpucard1`)
    img.src = `assets/photos/${temp111}.jpg`
    // deck.append(img)
this.currentcpu = temp111;
    delete this.cpu[temp111]
    console.log(this.cpu)
  }




  cpupick() {
    let r = Math.floor(Math.random() * this.sortable.length)
    console.log(r)
    let name = this.sortable[r]
    this.cpu[name] = this.icstars[name]
    this.sortable.splice(r, 1)
    console.log(this.sortable)
    console.log(this.cpu)
    let hide = < HTMLInputElement > document.getElementById(name);
    hide.style.display = 'none'
    let cpu = < HTMLInputElement > document.getElementById('cpucard');
    let newimg = document.createElement('img');
    newimg.src = `assets/photos/back.png`
    newimg.id = `${name}`
    newimg.style.width = '25%'
    cpu.append(newimg)
    // if (this.sortable.length == 0) {
    //   document.getElementById('cputalk').innerHTML = 'Pick 1st player'
    // }
  }

  ngOnInit() {
    if(this.api.User.starsvideo ==true){
    this.ask();
    } else    {     document.getElementById('char').style.display ='block'}

  }

async ask(){
  const alert = await this.alertCtrl.create({
    header:"Have you play this game?",
    buttons: [{
      text: 'No',
      handler: ()=> {
        document.getElementById('video').style.display = 'block';
        let video = <HTMLVideoElement>document.getElementById('video');
        video.play();
        document.querySelector('video').addEventListener('ended',() =>{
          console.log('Video has ended!');
          document.getElementById('video').style.display = 'none'
          document.getElementById('char').style.display = 'block';
          this.api.User.starsvideo = false;
        }, false);
      }
    },{
      text: 'Yes',
      handler: ()=> {
        document.getElementById('char').style.display ='block';
        this.api.User.starsvideo = false;
      }
    }]
  })
  await alert.present();
}

tutor(){
  document.getElementById('video').style.display = 'block';
  let video = <HTMLVideoElement>document.getElementById('video');
        video.play();
        document.querySelector('video').addEventListener('ended', function () {
          console.log('Video has ended!');
          document.getElementById('video').style.display = 'none'
          document.getElementById('char').style.display = 'block';
        }, false);
}

  pick1() {
    this.pick = 1;
    console.log(this.pick)
    this.playgame();
    // document.getElementById('char').style.display = 'none'
  }

  pick2() {
    this.pick = 2
    console.log(this.pick)
    this.playgame();
    // document.getElementById('char').style.display = 'none'
  }

  menu() {
    this.api.postData()
    this.router.navigate(['/main'])
  }




}