import { Component, OnInit, ViewChild } from '@angular/core';
import * as Matter from 'matter-js';
import { AlertController } from '@ionic/angular';
import { async } from 'q';
@Component({
  selector: 'app-testgame2',
  templateUrl: './testgame2.page.html',
  styleUrls: ['./testgame2.page.scss'],
})
export class Testgame2Page implements OnInit {
@ViewChild('mycanvas') canvasEl
// Engine = Matter.Engine
//         Render = Matter.Render
//         Runner = Matter.Runner
//         Composites = Matter.Composites
//         Events = Matter.Events
//         Constraint = Matter.Constraint
//         MouseConstraint = Matter.MouseConstraint
//         Mouse = Matter.Mouse
//         World = Matter.World
//         Bodies = Matter.Bodies
//         engine = this.Engine.create()
//         world = this.engine.world;

minute:number =4;
second:number =60;
paused: boolean = false;
started:boolean = false;
  constructor(public alertCtrl:AlertController) { }


start(){
    let time=document.getElementById('time')
    // document.getElementById('start').style.display = 'none'
    // document.getElementById('pause').style.display = 'block'
   if (this.started == false){
       this.started = true;
    time.onclick = (async) => this.pause()
   
    let run = setInterval(()=>{
        if (this.paused == false){
       this.second--; 
       if (this.second >=10){
       time.innerHTML=`0${this.minute}:${this.second}`}
       else {time.innerHTML =`0${this.minute}:0${this.second}`}
       if (this.second == 0 && this.minute>0 ){
           this.second = 60;
           this.minute--;
       } else if (this.minute ==0 && this.second ==0){
           this.moneyAlert();
           clearInterval(run)
       }}   
    },1000)
   } 
}


pause(){
this.paused = true;
console.log('hi')
let time=document.getElementById('time')
time.onclick = (async) => this.resume();
// document.getElementById('pause').style.display = 'none'
// document.getElementById('resume').style.display = 'block'
}
resume(){
    // document.getElementById('pause').style.display = 'block'
    // document.getElementById('resume').style.display = 'none'
    this.paused = false;
    console.log('hello')
    let time=document.getElementById('time')
time.onclick = (async) => this.pause();
}

async moneyAlert() {
    const alert = await this.alertCtrl.create({
      header: "Time's up!"
    })
    await alert.present();
  }
  ngOnInit() {

}
}