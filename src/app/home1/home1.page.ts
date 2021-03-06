import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { async } from 'q';
import { AlertController } from '@ionic/angular';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
 
  betfish: number = 0;
  betdeer: number = 0;
  betchicken: number = 0;
  betcrab: number = 0;
  betholo: number = 0;
  betshrimp: number = 0;
rolled:boolean = false;
winning:boolean = false;
  constructor(public router:Router, public alertCtrl:AlertController,public api:RestapiService) {}

  // info() {
  //   let chicken = document.getElementById('chicken')
  //   let holo = document.getElementById('holo')
  //   let deer = document.getElementById('deer')
  //   let shrimp = document.getElementById('shrimp')
  //   let crab = document.getElementById('crab')
  //   let fish = document.getElementById('fish')
  // }

async betting (){
  const alert = await this.alertCtrl.create({
    header:'No money'
  })
  await alert.present();
}

  menu(){
    this.api.postData();
    this.router.navigate(['/main'])
    }
  fish1() {
    if (this.api.User.holopoint >0){
      this.api.User.holopoint--;
    this.betfish++;
    console.log(`fish ${this.betfish}`)}
    else {this.betting()}
  }
  chicken1() {
    if (this.api.User.holopoint >0){
      this.api.User.holopoint--;
    this.betchicken++;
    console.log(`chicken ${this.betchicken}`)}
    else {this.betting()}
  }shrimp1() {
    if (this.api.User.holopoint >0){
      this.api.User.holopoint--;
    this.betshrimp++;
    console.log(`shrimp ${this.betshrimp}`)}
    else {this.betting()}
  }crab1() {
    if (this.api.User.holopoint >0){
      this.api.User.holopoint--;
    this.betcrab++;
    console.log(`crab ${this.betcrab}`)}
    else {this.betting()}
  }deer1() {
    if (this.api.User.holopoint >0){
      this.api.User.holopoint--;
    this.betdeer++;
    console.log(`deer ${this.betdeer}`)}
    else {this.betting()}
  }holo1() {
    if (this.api.User.holopoint >0){
      this.api.User.holopoint--;
    this.betholo++;
    console.log(`holo ${this.betholo}`)}
    else {this.betting()}
  }
  roll() {
    if (this.rolled == false){
      this.rolled = true;
    let roll = document.getElementById('roll')
    let result = < HTMLInputElement > document.getElementById('result')
    let result1 = < HTMLInputElement > document.getElementById('result1')
    let result2 = < HTMLInputElement > document.getElementById('result2')
    result.src = 'assets/icon/blank.png'
    result1.src = 'assets/icon/blank.png'
    result2.src = 'assets/icon/blank.png'
    let a = setInterval(() => {
      let random = Math.floor(Math.random() * 6)
      switch (random) {
        case 0:
          result.src = 'assets/icon/fish.png'
          break;
        case 1:
          result.src = 'assets/icon/chicken.png';
          break;
        case 2:
          result.src = 'assets/icon/crab.png';
          break;
        case 3:
          result.src = 'assets/icon/deer.png';
          break;
        case 4:
          result.src = 'assets/icon/holo.png';
          break;
        case 5:
          result.src = 'assets/icon/shrimp.png';
          break;
      }
    }, 20)
    setTimeout(() => {
      clearInterval(a)
    }, 450);
    let b = setInterval(() => {
      let random = Math.floor(Math.random() * 6)
      switch (random) {
        case 0:
          result1.src = 'assets/icon/fish.png'
          break;
        case 1:
          result1.src = 'assets/icon/chicken.png';
          break;
        case 2:
          result1.src = 'assets/icon/crab.png';
          break;
        case 3:
          result1.src = 'assets/icon/deer.png';
          break;
        case 4:
          result1.src = 'assets/icon/holo.png';
          break;
        case 5:
          result1.src = 'assets/icon/shrimp.png';
          break;
      }
    }, 20)
    setTimeout(() => {
      clearInterval(b)
    }, 950);
    let c = setInterval(() => {
      let random = Math.floor(Math.random() * 6)
      switch (random) {
        case 0:
          result2.src = 'assets/icon/fish.png'
          break;
        case 1:
          result2.src = 'assets/icon/chicken.png';
          break;
        case 2:
          result2.src = 'assets/icon/crab.png';
          break;
        case 3:
          result2.src = 'assets/icon/deer.png';
          break;
        case 4:
          result2.src = 'assets/icon/holo.png';
          break;
        case 5:
          result2.src = 'assets/icon/shrimp.png';
          break;
      }
    }, 20)
    setTimeout(() => {
      clearInterval(c)
    }, 1450);
    let r = Math.floor(Math.random() * 6);
    console.log(r)
    let r1 = Math.floor(Math.random() * 6);
    console.log(r1)
    let r2 = Math.floor(Math.random() * 6);
    console.log(r2)
    setTimeout(() => {
      switch (r) {
        case 0:
          result.src = 'assets/icon/fish.png'
          this.api.User.holopoint = this.api.User.holopoint + this.betfish*2;
          break;
        case 1:
          result.src = 'assets/icon/chicken.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betchicken*2
          break;
        case 2:
          result.src = 'assets/icon/crab.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betcrab*2;
          break;
        case 3:
          result.src = 'assets/icon/deer.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betdeer*2;
          break;
        case 4:
          result.src = 'assets/icon/holo.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betholo*2;
          break;
        case 5:
          result.src = 'assets/icon/shrimp.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betshrimp*2;
          break;
      }

    }, 500);

    setTimeout(() => {

      switch (r1) {
        case 0:
          result1.src = 'assets/icon/fish.png'
          this.api.User.holopoint = this.api.User.holopoint + this.betfish*2;
          break;
        case 1:
          result1.src = 'assets/icon/chicken.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betchicken*2
          break;
        case 2:
          result1.src = 'assets/icon/crab.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betcrab*2;
          break;
        case 3:
          result1.src = 'assets/icon/deer.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betdeer*2;
          break;
        case 4:
          result1.src = 'assets/icon/holo.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betholo*2;
          break;
        case 5:
          result1.src = 'assets/icon/shrimp.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betshrimp*2;
          break;
      }

    }, 1000);

    setTimeout(() => {

      switch (r2) {
        case 0:
          result2.src = 'assets/icon/fish.png'
          this.api.User.holopoint = this.api.User.holopoint + this.betfish*2;
          break;
        case 1:
          result2.src = 'assets/icon/chicken.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betchicken*2
          break;
        case 2:
          result2.src = 'assets/icon/crab.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betcrab*2;
          break;
        case 3:
          result2.src = 'assets/icon/deer.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betdeer*2;
          break;
        case 4:
          result2.src = 'assets/icon/holo.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betholo*2;
          break;
        case 5:
          result2.src = 'assets/icon/shrimp.png';
          this.api.User.holopoint = this.api.User.holopoint + this.betshrimp*2;
          break;
      }

    }, 1500);
    
    setTimeout(() => {
      
      this.betfish = 0;
      this.betholo = 0;
      this.betshrimp = 0;
      this.betchicken = 0;
      this.betcrab = 0;
      this.betdeer = 0;
      this.rolled = false;
    }, 1520);

  } else {console.log('rolling')}
  }

async newplayer(){
  const alert = await this.alertCtrl.create({
    header:'How to play',
    message:'Place your bet by clicking on each icon<br>3 dices will be rolled<br>x2 if your bet appeart once<br>x4 if your bet appear twice<br>x6 if your bet appear 3 times'
  })
  await alert.present()
}

tutor(){
  document.getElementById('video').style.display = 'block';
  document.getElementById('roll').style.display = 'none';
  document.getElementById('roll1').style.display = 'none';
  document.getElementById('coin').style.display = 'none';
  let video = <HTMLVideoElement>document.getElementById('video');
        video.play();
        document.querySelector('video').addEventListener('ended', ()=> {
          console.log('Video has ended!');
          document.getElementById('video').style.display = 'none'
          document.getElementById('roll').style.display = 'block';
          document.getElementById('roll1').style.display = 'block';
          document.getElementById('coin').style.display = 'block';
          this.api.User.holopoint= this.api.User.holopoint +10;
          this.coin();
        }, false);
}

async coin(){
  const alert = await this.alertCtrl.create({
    header:'Congratulation!',
    message:'You earn 10 Holo coin'
  })
  await alert.present();
}


  ngOnInit() {}

}