import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { async } from 'q';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
  coin: number = 20;
  betfish: number = 0;
  betdeer: number = 0;
  betchicken: number = 0;
  betcrab: number = 0;
  betholo: number = 0;
  betshrimp: number = 0;
rolled:boolean = false;
winning:boolean = false;
  constructor(public router:Router, public alertCtrl:AlertController) {}

  // info() {
  //   let chicken = document.getElementById('chicken')
  //   let holo = document.getElementById('holo')
  //   let deer = document.getElementById('deer')
  //   let shrimp = document.getElementById('shrimp')
  //   let crab = document.getElementById('crab')
  //   let fish = document.getElementById('fish')
  // }

  betting() {
    if (this.coin > 0) {
      this.coin = this.coin - 1;
    } else {
      console.log('no money')
    }
  }
  menu(){
    this.router.navigate(['/main'])
    }
  fish1() {
    this.betting()
    this.betfish++;
    console.log(`fish ${this.betfish}`)
  }
  chicken1() {
    this.betting()
    this.betchicken++;
    console.log(`chicken ${this.betchicken}`)
  }
  crab1() {
    this.betting()
    this.betcrab++;
    console.log(`crab ${this.betcrab}`)
  }
  shrimp1() {
    this.betting()
    this.betshrimp++;
    console.log(`shrimp ${this.betshrimp}`)
  }
  holo1() {
    this.betting()
    this.betholo++;
    console.log(`holo ${this.betholo}`)
  }
  deer1() {
    this.betting()
    this.betdeer++;
    console.log(`deer ${this.betdeer}`)
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
          this.coin = this.coin + this.betfish*2;
          break;
        case 1:
          result.src = 'assets/icon/chicken.png';
          this.coin = this.coin + this.betchicken*2
          break;
        case 2:
          result.src = 'assets/icon/crab.png';
          this.coin = this.coin + this.betcrab*2;
          break;
        case 3:
          result.src = 'assets/icon/deer.png';
          this.coin = this.coin + this.betdeer*2;
          break;
        case 4:
          result.src = 'assets/icon/holo.png';
          this.coin = this.coin + this.betholo*2;
          break;
        case 5:
          result.src = 'assets/icon/shrimp.png';
          this.coin = this.coin + this.betshrimp*2;
          break;
      }

    }, 500);

    setTimeout(() => {

      switch (r1) {
        case 0:
          result1.src = 'assets/icon/fish.png'
          this.coin = this.coin + this.betfish*2;
          break;
        case 1:
          result1.src = 'assets/icon/chicken.png';
          this.coin = this.coin + this.betchicken*2
          break;
        case 2:
          result1.src = 'assets/icon/crab.png';
          this.coin = this.coin + this.betcrab*2;
          break;
        case 3:
          result1.src = 'assets/icon/deer.png';
          this.coin = this.coin + this.betdeer*2;
          break;
        case 4:
          result1.src = 'assets/icon/holo.png';
          this.coin = this.coin + this.betholo*2;
          break;
        case 5:
          result1.src = 'assets/icon/shrimp.png';
          this.coin = this.coin + this.betshrimp*2;
          break;
      }

    }, 1000);

    setTimeout(() => {

      switch (r2) {
        case 0:
          result2.src = 'assets/icon/fish.png'
          this.coin = this.coin + this.betfish*2;
          break;
        case 1:
          result2.src = 'assets/icon/chicken.png';
          this.coin = this.coin + this.betchicken*2
          break;
        case 2:
          result2.src = 'assets/icon/crab.png';
          this.coin = this.coin + this.betcrab*2;
          break;
        case 3:
          result2.src = 'assets/icon/deer.png';
          this.coin = this.coin + this.betdeer*2;
          break;
        case 4:
          result2.src = 'assets/icon/holo.png';
          this.coin = this.coin + this.betholo*2;
          break;
        case 5:
          result2.src = 'assets/icon/shrimp.png';
          this.coin = this.coin + this.betshrimp*2;
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

  ngOnInit() {}

}