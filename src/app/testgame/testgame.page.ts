import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import * as Matter from 'matter-js';
@Component({
  selector: 'app-testgame',
  templateUrl: './testgame.page.html',
  styleUrls: ['./testgame.page.scss'],
})
export class TestgamePage implements OnInit {

  @ViewChild('mycanvas') canvasEl;


  constructor() {}

  ngOnInit() {
    this.canvasEl.nativeElement.width = document.body.clientWidth;
    this.canvasEl.nativeElement.height = document.body.clientHeight;

    const engine = Matter.Engine.create();
    let world = engine.world;
    const render = Matter.Render.create({
      canvas: this.canvasEl.nativeElement,
      engine: engine,
      options: {
        width: this.canvasEl.nativeElement.width,
        height: this.canvasEl.nativeElement.height,
        background: 'red',
        wireframe: false,
        showAngleIndicator: false,

      }
    });

    let ball = Matter.Bodies.circle(100, 100, 40, {
      density: 0.04,
      friction: 0.01,
      id: 1,
      render: {
        visible: true,
        fillStyle: 'red',
        strokeStyle: 'black',
        lineWidth: 1
      }
    })

    // var bar = Matter.Bodies.rectangle(395, 600, 815, 50, { isStatic: true })
    
    Matter.World.add(world, ball)

    Matter.Engine.run(engine);
    Matter.Render.run(render);
  }

}