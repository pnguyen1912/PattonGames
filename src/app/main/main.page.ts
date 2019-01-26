import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public router: Router) { }

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
