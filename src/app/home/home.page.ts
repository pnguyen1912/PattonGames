import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { doesNotReject } from 'assert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(public AlertCtrl:AlertController,public router:Router){}

cards = [
  {num:'14',suit:'H',played: false},{num:'02',suit:'H',played: false},{num:'03',suit:'H',played: false},{num:'04',suit:'H',played: false},{num:'05',suit:'H',played: false},{num:'06',suit:'H',played: false},{num:'07',suit:'H',played: false},{num:'08',suit:'H',played: false},{num:'09',suit:'H',played: false},{num:'10',suit:'H',played: false},{num:'11',suit:'H',played: false},{num:'12',suit:'H',played: false},{num:'13',suit:'H',played: false},
  {num:'14',suit:'D',played: false},{num:'02',suit:'D',played: false},{num:'03',suit:'D',played: false},{num:'04',suit:'D',played: false},{num:'05',suit:'D',played: false},{num:'06',suit:'D',played: false},{num:'07',suit:'D',played: false},{num:'08',suit:'D',played: false},{num:'09',suit:'D',played: false},{num:'10',suit:'D',played: false},{num:'11',suit:'D',played: false},{num:'12',suit:'D',played: false},{num:'13',suit:'D',played: false},
  {num:'14',suit:'S',played: false},{num:'02',suit:'S',played: false},{num:'03',suit:'S',played: false},{num:'04',suit:'S',played: false},{num:'05',suit:'S',played: false},{num:'06',suit:'S',played: false},{num:'07',suit:'S',played: false},{num:'08',suit:'S',played: false},{num:'09',suit:'S',played: false},{num:'10',suit:'S',played: false},{num:'11',suit:'S',played: false},{num:'12',suit:'S',played: false},{num:'13',suit:'S',played: false},
  {num:'14',suit:'C',played: false},{num:'02',suit:'C',played: false},{num:'03',suit:'C',played: false},{num:'04',suit:'C',played: false},{num:'05',suit:'C',played: false},{num:'06',suit:'C',played: false},{num:'07',suit:'C',played: false},{num:'08',suit:'C',played: false},{num:'09',suit:'C',played: false},{num:'10',suit:'C',played: false},{num:'11',suit:'C',played: false},{num:'12',suit:'C',played: false},{num:'13',suit:'C',played: false},
]


player1 = []
player2 = []
player3 = []
player4 = []

// cards ={
//   1 : '1H',  2 : '2H', 3 :'3H',  4 : '4H',  5: '5H',  6:'6H',  7:'7H',  8:'8H',  9:'9H',  10:'10H',  11:'11H',  12:'12H',  13:'13H',
// 14: '1D', 15:'2D',16:'3D',17:'4D',18:'5D',19:'6D',20:'7D',21:'8D',22:'9D',23:'10D',24:'11D',25:'12D',26:'13D',
// 27:'1S',28:'2S',29:'3S',30:'4S',31:'5S',32:'6S',33:'7S',34:'8S',35:'9S',36:'10S',37:'11S',38:'12S',39:'13S',
// 40:'1C',41:'2C',42:'3C',43:'4C',44:'5C',45:'6C',46:'7C',47:'8C',48:'9C',49:'10C',50:'11C',51:'12C',52:'13C'
// }

// player1={
//   1: '',
//   2:'',
//   3:'',
//   4:'',
//   5:'',
//   6:'',
//   7:'',
//   8:'',
//   9:'',
//   10:'',
//   11:'',
//   12:'',
//   13:'',
// }

// player2={
//   1: '',
//   2:'',
//   3:'',
//   4:'',
//   5:'',
//   6:'',
//   7:'',
//   8:'',
//   9:'',
//   10:'',
//   11:'',
//   12:'',
//   13:'',
// }


// player3={
//   1: '',
//   2:'',
//   3:'',
//   4:'',
//   5:'',
//   6:'',
//   7:'',
//   8:'',
//   9:'',
//   10:'',
//   11:'',
//   12:'',
//   13:'',
// }


// player4={
//   1: '',
//   2:'',
//   3:'',
//   4:'',
//   5:'',
//   6:'',
//   7:'',
//   8:'',
//   9:'',
//   10:'',
//   11:'',
//   12:'',
//   13:'',
// }

// dealed = []
currentplay = '';
turn = true;
round =1;
currentplay2 ='';
currentplay3 ='';
currentplay4 ='';
player1score =0;
player2score =0;
player3score =0;
player4score =0;

played1 = false;
played2 = false;
played3 = false;
played4 = false;


turn1 = false;
turn2 = false;
turn3 = false;
turn4 = false;

gamestarted = false
menu(){
this.router.navigate(['/main'])
}
play(){
  document.getElementById('play').style.display = 'none';
  document.getElementById('game').style.display = 'block'

  var j, x, i;
    // for (i = 52 - 1; i > 0; i--) {
    //     j = Math.floor(Math.random() * (i + 1));
    //     x = this.cards[i];
    //     this.cards[i] = this.cards[j];
    //     this.cards[j] = x;
    // }
    this.cards.sort(function(a, b){return 0.5 - Math.random()});
    console.log(this.cards)

    for (i=0; i<=12;i++){
      this.player1[i] = this.cards[i]
    }
    // console.log(this.player1)
    
    this.player1.sort(function(a,b){return a.num - b.num});
    // this.player1.sort(function (a, b) {
    //   return ('' + a.attr).localeCompare(b.attr)});
    console.log(this.player1)
    for (i=12;i>=0;i--){
      let player1=document.getElementById('player1')
      let now = document.createElement('img')
      
      now.src = `assets/PNG/${this.player1[i].num}${this.player1[i].suit}.png`
      now.id = this.player1[i].num+this.player1[i].suit
      now.style.width = '14%';
      this.player1[i].played = true;
      now.onclick = (async) => this.classFunction1(now.id)
      player1.append(now)
    }

    for (i=12;i>=0;i--){
      this.player2[i] = this.cards[i+13]
    }
    console.log(this.player2)
    for (i=12;i>=0;i--){
      this.player3[i] = this.cards[i+26]
    }
    console.log(this.player3)
    for (i=12;i>=0;i--){
      this.player4[i] = this.cards[i+39]
    } console.log(this.player4)

    
  }


  async cantplay() {
    const alert = await this.AlertCtrl.create({
      header: 'it has to be same suit'
    })
    await alert.present();
  }
  async annwinner(a) {
    const alert = await this.AlertCtrl.create({
      header: `winner is ${a}`,
      subHeader: `play again?`,
      buttons: [{text: 'No',
    handler: ()=>{
      document.getElementById('game').style.display = 'none'
      document.getElementById('play').style.display = 'block'
    } },
    {text:'Yes',
    handler: () => {this.play()
    this.round = 1
    // let i=0
    this.player1 = []
    this.player2 = []
    this.player3 = []
      this.player4 = []
  },
  }]
    })
    await alert.present();
  
  }
  async cantspade() {
    const alert = await this.AlertCtrl.create({
      header: 'Cant start with space'
    })
    await alert.present();
  }
  async notturn() {
    const alert = await this.AlertCtrl.create({
      header: 'Wait til your turn'
    })
    
    await alert.present();
  }

  classFunction1(clicked_id) {
    // this.cantplay();
    console.log(clicked_id)
    if (this.turn == true){
    if(clicked_id.charAt(2) == 'S' && this.gamestarted == false){
      this.cantspade();
    } else {
      this.gamestarted = true
      let clicked = document.getElementById(`${clicked_id}`)
      clicked.style.display = 'none'
      this.currentplay = clicked_id
      let player1spot = <HTMLInputElement> document.getElementById('img1')
      player1spot.src =`assets/PNG/${clicked_id}.png`;
      
      this.turn = false;
      this.played1 = true;
      setTimeout(() => {
        while (this.played2 == false){
          if ( this.played2 == false){
        this.cputurn2(clicked_id);
          }
          if (this.played2 == false){
          this.cpuspade2(clicked_id);
          }
        if (this.played2 == false){
          this.cpurandom2(clicked_id);
        }}
      }, 500);
      this.played2 = false;
      setTimeout(() => {
        while (this.played3 == false){
          this.cputurn3(clicked_id)
          if(this.played3 == false){
            this.cpuspade3(clicked_id)}
            
            if (this.played3 == false){
        
          this.cpurandom3(clicked_id)}
        }
      }, 1000);
      this.played3 = false
      setTimeout(() => {
        while (this.played4 == false){
        this.cputurn4(clicked_id)
        if (this.played4 == false){
          this.cpuspade4(clicked_id);
        }        
        if (this.played4 ==false){
          this.cpurandom4(clicked_id);
        } }

      }, 1500);
      this.played4 = false
      setTimeout(() => {
        
        this.winner(this.currentplay,this.currentplay2,this.currentplay3,this.currentplay4)
        this.turn = true;
        this.round ++;
       
      }, 3000);
setTimeout(() => {
  
  if (this.round == 14){
    if (this.player1score > this.player2score && this.player1score > this.player2score && this.player1score > this.player4score){
      this.annwinner('Player 1');
    }
    if (this.player2score > this.player1score && this.player2score > this.player3score && this.player2score > this.player4score){
      this.annwinner('Player 2');
    }
    if (this.player3score > this.player1score && this.player3score > this.player2score && this.player3score > this.player4score){
      this.annwinner('Player 3');
    }
    if (this.player4score > this.player1score && this.player4score > this.player2score && this.player4score > this.player3score){
      this.annwinner('Player 4');
    }
  }
}, 3001);
    }} else {this.notturn()}
  }

comparenum(a,x,y,z){
  if (a > x && a>y && a>z){
    console.log('player1 wins')
    this.player1score++
    document.getElementById('score1').innerHTML = `Score :${this.player1score}`
    this.turn = true
    let img1= <HTMLInputElement>document.getElementById('img1')
    img1.src = 'assets/blank.png'
    let img2= <HTMLInputElement>document.getElementById('img2')
    img2.src = 'assets/back.png'
    let img3= <HTMLInputElement>document.getElementById('img3')
    img3.src = 'assets/back.png'
    let img4= <HTMLInputElement>document.getElementById('img4')
    img4.src = 'assets/back.png'
    
    
  } else if (x>a && x>y &&x>z){
    console.log('player2 wins')
    this.player2score++
    document.getElementById('score2').innerHTML = `Score :${this.player2score}`
    let img1= <HTMLInputElement>document.getElementById('img1')
    img1.src = 'assets/blank.png'
    let img2= <HTMLInputElement>document.getElementById('img2')
    img2.src = 'assets/back.png'
    let img3= <HTMLInputElement>document.getElementById('img3')
    img3.src = 'assets/back.png'
    let img4= <HTMLInputElement>document.getElementById('img4')
    img4.src = 'assets/back.png'
    

  } else if (y>a && y>x && y>z){
    console.log('player3 wins')
    this.player3score++
    document.getElementById('score3').innerHTML = `Score :${this.player3score}`
    let img1= <HTMLInputElement>document.getElementById('img1')
    img1.src = 'assets/blank.png'
    let img2= <HTMLInputElement>document.getElementById('img2')
    img2.src = 'assets/back.png'
    let img3= <HTMLInputElement>document.getElementById('img3')
    img3.src = 'assets/back.png'
    let img4= <HTMLInputElement>document.getElementById('img4')
    img4.src = 'assets/back.png'
    

  } else if (z>a && z>x && z>y){
    console.log('player4 wins')
    this.player4score++
    document.getElementById('score4').innerHTML = `Score :${this.player4score}`
    let img1= <HTMLInputElement>document.getElementById('img1')
    img1.src = 'assets/blank.png'
    let img2= <HTMLInputElement>document.getElementById('img2')
    img2.src = 'assets/back.png'
    let img3= <HTMLInputElement>document.getElementById('img3')
    img3.src = 'assets/back.png'
    let img4= <HTMLInputElement>document.getElementById('img4')
    img4.src = 'assets/back.png'
    

  }
}

winner(aa,xx,yy,zz){
  // console.log(aa)
  let a = parseInt(aa.substring(0,2))
  let as = aa.substring(2,3)
  console.log(as)
  // console.log(a)
  let x = xx.num
  // console.log(xx.suit)
  let y = yy.num
  let z = zz.num
  if (as == xx.suit && as == yy.suit && as == zz.suit){
  this.comparenum(a,x,y,z)
} else if (as != 'S' && xx.suit != 'S' && yy.suit !='S' && zz.suit !='S' && as != xx.suit){
  this.comparenum(a,0,y,z)
}else if (as != 'S' && xx.suit != 'S' && yy.suit !='S' && zz.suit !='S' && as != yy.suit){
  this.comparenum(a,x,0,z)
}else if (as != 'S' && xx.suit != 'S' && yy.suit !='S' && zz.suit !='S' && as != zz.suit){
  this.comparenum(a,x,y,0)
}else if (as != 'S' && xx.suit != 'S' && yy.suit !='S' && zz.suit !='S' && as != xx.suit && as != yy.suit){
  this.comparenum(a,0,0,z)
}else if (as != 'S' && xx.suit != 'S' && yy.suit !='S' && zz.suit !='S' && as != xx.suit && as != zz.suit){
  this.comparenum(a,0,y,0)
}else if (as != 'S' && xx.suit != 'S' && yy.suit !='S' && zz.suit !='S' && as != yy.suit && as != zz.suit){
  this.comparenum(a,x,0,0)
}else if (as != 'S' && xx.suit != 'S' && yy.suit !='S' && zz.suit !='S' && as != xx.suit && as != yy.suit && as != zz.suit){
  this.comparenum(a,0,0,0)
}





else if (as == 'S' && xx.suit != 'S' && yy.suit !='S' && zz.suit !='S'){
  this.comparenum(a,0,0,0)
}else if (as == 'S' && xx.suit == 'S' && yy.suit !='S' && zz.suit !='S'){
  this.comparenum(a,x,0,0)
}else if (as == 'S' && xx.suit != 'S' && yy.suit =='S' && zz.suit !='S'){
  this.comparenum(a,0,y,0)
}else if (as == 'S' && xx.suit != 'S' && yy.suit !='S' && zz.suit =='S'){
  this.comparenum(a,0,0,z)
}else if (as == 'S' && xx.suit == 'S' && yy.suit =='S' && zz.suit !='S'){
  this.comparenum(a,x,y,0)
}else if (as == 'S' && xx.suit != 'S' && yy.suit =='S' && zz.suit =='S'){
  this.comparenum(a,0,y,z)
}else if (as == 'S' && xx.suit == 'S' && yy.suit !='S' && zz.suit =='S'){
  this.comparenum(a,x,0,z)
}  else if (as != 'S' && xx.suit == 'S' && yy.suit !='S' && zz.suit !='S'){
  this.comparenum(0,x,0,0)
} else if (as != 'S' && xx.suit == 'S' && yy.suit =='S' && zz.suit !='S'){
  this.comparenum(0,x,y,0)
}else if (as != 'S' && xx.suit == 'S' && yy.suit !='S' && zz.suit =='S'){
  this.comparenum(0,x,0,z)
} else if (as != 'S' && xx.suit == 'S' && yy.suit =='S' && zz.suit =='S'){
  this.comparenum(0,x,y,z)
} else if (as != 'S' && xx.suit != 'S' && yy.suit =='S' && zz.suit !='S'){
  this.comparenum(0,0,y,0)
}else if (as != 'S' && xx.suit != 'S' && yy.suit =='S' && zz.suit =='S'){
  this.comparenum(0,0,y,z)
} else if (as != 'S' && xx.suit != 'S' && yy.suit !='S' && zz.suit =='S'){
  this.comparenum(0,0,0,z)
} 
}

cputurn2(clicked_id2){
  let i=0
      for(i;i<=12;i++){
        let player2spot = <HTMLInputElement>document.getElementById('img2')
        if(this.player2[i].played == false && (this.player2[i].suit == clicked_id2.charAt(2))){
          player2spot.src = `assets/PNG/${this.player2[i].num}${this.player2[i].suit}.png`
          this.player2[i].played = true
          this.currentplay2 = this.player2[i]
          console.log(this.currentplay2)
          this.played2 =true
          return
        // } else if (this.player2[i].played == false && this.player2[i].suit =='S'){
        //   player2spot.src = `assets/PNG/${this.player2[i].num}${this.player2[i].suit}}`
        //   this.player2[i].played = true
        //   this.currentplay2 = this.player2[i]
        //   console.log(this.currentplay2)
        //   return
        } else {console.log('hi')}
      }
}
cpuspade2(clicked_id2){
  let i=0
      for(i;i<=12;i++){
        let player2spot = <HTMLInputElement>document.getElementById('img2')
        if(this.player2[i].played == false && (this.player2[i].suit == 'S')){
          player2spot.src = `assets/PNG/${this.player2[i].num}${this.player2[i].suit}.png`
          this.player2[i].played = true
          this.currentplay2 = this.player2[i]
          console.log(this.currentplay2)
this.played2 = true
          return
        // } else if (this.player2[i].played == false && this.player2[i].suit =='S'){
        //   player2spot.src = `assets/PNG/${this.player2[i].num}${this.player2[i].suit}}`
        //   this.player2[i].played = true
        //   this.currentplay2 = this.player2[i]
        //   console.log(this.currentplay2)
        //   return
        } else {console.log('hi')}
      }
}
cpurandom2(clicked_id2){
  let i=0
      for(i;i<=12;i++){
        let player2spot = <HTMLInputElement>document.getElementById('img2')
        if(this.player2[i].played == false){
          player2spot.src = `assets/PNG/${this.player2[i].num}${this.player2[i].suit}.png`
          this.player2[i].played = true
          this.currentplay2 = this.player2[i]
          console.log(this.currentplay2)
this.played2 = true
          return
        // } else if (this.player2[i].played == false && this.player2[i].suit =='S'){
        //   player2spot.src = `assets/PNG/${this.player2[i].num}${this.player2[i].suit}}`
        //   this.player2[i].played = true
        //   this.currentplay2 = this.player2[i]
        //   console.log(this.currentplay2)
        //   return
        } else {console.log('hi')}
      }
}

cputurn3(clicked_id3){
  let i=0
      for(i;i<=12;i++){
        let player3spot = <HTMLInputElement>document.getElementById('img3')
        if(this.player3[i].played == false && (this.player3[i].suit == clicked_id3.charAt(2))){
          player3spot.src = `assets/PNG/${this.player3[i].num}${this.player3[i].suit}.png`
          this.player3[i].played = true
          this.currentplay3 = this.player3[i]
          console.log(this.currentplay3)
          this.played3 = true
          return
        // }else if (this.player3[i].played == false && this.player3[i].suit =='S'){
        //   player3spot.src = `assets/PNG/${this.player3[i].num}${this.player3[i].suit}}`
        //   this.player3[i].played = true
        //   this.currentplay3 = this.player3[i]
        //   console.log(this.currentplay3)
        //   return
        } else {console.log('hi')}
      }
}
cpuspade3(clicked_id3){
  let i=0
      for(i;i<=12;i++){
        let player3spot = <HTMLInputElement>document.getElementById('img3')
        if(this.player3[i].played == false && (this.player3[i].suit == 'S')){
          player3spot.src = `assets/PNG/${this.player3[i].num}${this.player3[i].suit}.png`
          this.player3[i].played = true
          this.currentplay3 = this.player3[i]
          console.log(this.currentplay3)
          this.played3 = true
          return
        // }else if (this.player3[i].played == false && this.player3[i].suit =='S'){
        //   player3spot.src = `assets/PNG/${this.player3[i].num}${this.player3[i].suit}}`
        //   this.player3[i].played = true
        //   this.currentplay3 = this.player3[i]
        //   console.log(this.currentplay3)
        //   return
        } else {console.log('hi')}
      }
}
cpurandom3(clicked_id3){
  let i=0
      for(i;i<=12;i++){
        let player3spot = <HTMLInputElement>document.getElementById('img3')
        if(this.player3[i].played == false){
          player3spot.src = `assets/PNG/${this.player3[i].num}${this.player3[i].suit}.png`
          this.player3[i].played = true
          this.currentplay3 = this.player3[i]
          console.log(this.currentplay3)
          this.played3 = true
          return
        // }else if (this.player3[i].played == false && this.player3[i].suit =='S'){
        //   player3spot.src = `assets/PNG/${this.player3[i].num}${this.player3[i].suit}}`
        //   this.player3[i].played = true
        //   this.currentplay3 = this.player3[i]
        //   console.log(this.currentplay3)
        //   return
        } else {console.log('hi')}
      }
}

cputurn4(clicked_id){
  let i=0
      for(i;i<=12;i++){
        let player4spot = <HTMLInputElement>document.getElementById('img4')
        if(this.player4[i].played == false && (this.player4[i].suit == clicked_id.charAt(2))){
          player4spot.src = `assets/PNG/${this.player4[i].num}${this.player4[i].suit}.png`
          this.player4[i].played = true
          this.currentplay4 = this.player4[i]
          console.log(this.currentplay4)
          this.played4 = true
          return
        // } else if (this.player4[i].played == false && this.player4[i].suit =='S'){
        //   player4spot.src = `assets/PNG/${this.player4[i].num}${this.player4[i].suit}}`
        //   this.player4[i].played = true
        //   this.currentplay4 = this.player4[i]
        //   console.log(this.currentplay4)
        //   return
        }else {console.log('hi')}
      }
}
cpuspade4(clicked_id){
  let i=0
      for(i;i<=12;i++){
        let player4spot = <HTMLInputElement>document.getElementById('img4')
        if(this.player4[i].played == false && (this.player4[i].suit == 'S')){
          player4spot.src = `assets/PNG/${this.player4[i].num}${this.player4[i].suit}.png`
          this.player4[i].played = true
          this.currentplay4 = this.player4[i]
          console.log(this.currentplay4)
          this.played4 = true
          return
        // } else if (this.player4[i].played == false && this.player4[i].suit =='S'){
        //   player4spot.src = `assets/PNG/${this.player4[i].num}${this.player4[i].suit}}`
        //   this.player4[i].played = true
        //   this.currentplay4 = this.player4[i]
        //   console.log(this.currentplay4)
        //   return
        }else {console.log('hi')}
      }
}
cpurandom4(clicked_id){
  let i=0
      for(i;i<=12;i++){
        let player4spot = <HTMLInputElement>document.getElementById('img4')
        if(this.player4[i].played == false){
          player4spot.src = `assets/PNG/${this.player4[i].num}${this.player4[i].suit}.png`
          this.player4[i].played = true
          this.currentplay4 = this.player4[i]
          console.log(this.currentplay4)
          this.played4 = true
          return
        // } else if (this.player4[i].played == false && this.player4[i].suit =='S'){
        //   player4spot.src = `assets/PNG/${this.player4[i].num}${this.player4[i].suit}}`
        //   this.player4[i].played = true
        //   this.currentplay4 = this.player4[i]
        //   console.log(this.currentplay4)
        //   return
        }else {console.log('hi')}
      }
}
//  let i=0
//  let j = 0;
//   while (i<=12){
//     j = Math.floor(Math.random()*(52-i)) +1;  
//     console.log(j)
//     this.player1[i] = this.cards[j]
//     // this.cards.splice(j,1)
//     i++;
//   }
// console.log(this.player1) 

newplayer(){
  document.getElementById('play').style.display = 'none';
  document.getElementById('instruc').style.display = 'block';
}
backhome(){
  document.getElementById('play').style.display = 'block';
  document.getElementById('instruc').style.display = 'none';
}

}
