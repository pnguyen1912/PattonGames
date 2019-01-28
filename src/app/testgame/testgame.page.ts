import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import * as Matter from 'matter-js';
import { Router } from '@angular/router';
import { async } from 'q';
import { RestapiService } from '../restapi.service';
@Component({
  selector: 'app-testgame',
  templateUrl: './testgame.page.html',
  styleUrls: ['./testgame.page.scss'],
})
export class TestgamePage implements OnInit {

  @ViewChild('mycanvas') canvasEl;


  constructor(public router:Router,public api:RestapiService) {}

  ngOnInit() {
    this.canvasEl.nativeElement.width = document.body.clientWidth;
    this.canvasEl.nativeElement.height = document.body.clientHeight-50;
    console.log(this.canvasEl.nativeElement.width)
    console.log(this.canvasEl.nativeElement.height)
    const engine = Matter.Engine.create();
    let world = engine.world;
    const render = Matter.Render.create({
      canvas: this.canvasEl.nativeElement,
      engine: engine,
      options: {
        width: this.canvasEl.nativeElement.width,
        height: this.canvasEl.nativeElement.height,
        background: 'transparent',
        wireframe: false,
        showAngleIndicator: false,

      }
    });


    // var ball = Matter.Bodies.circle(100, 20, 10, {
    //   density: 0.04,
    //   friction: 0,
    //   frictionAir: -0.005,
    //   restitution: 0.8,
    //   render: {
    //     fillStyle: '#F35e66',
    //     strokeStyle: 'black',
    //     lineWidth: 1
    //   }
    // });
    // Matter.World.add(world, ball);

    // var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
    //   element: this.canvasEl,
    //   constraint: {
    //     render: {
    //       visible: false
    //     },
    //     stiffness:0.8
    //   }
    // });
    // Matter.World.add(world, mouseConstraint);
    const rectangle = Matter.Bodies.rectangle(200, 100, 120, 80, {
      restitution: 0.25,
      angle: Math.PI / 4
    });

    const floor = Matter.Bodies.rectangle(0, this.canvasEl.nativeElement.height - 20, this.canvasEl.nativeElement.width * 2, 50, {
      isStatic: true
    });
    const floor1 = Matter.Bodies.rectangle(0, 0, this.canvasEl.nativeElement.width * 2, 30, {
      isStatic: true
    });
    const floor12 = Matter.Bodies.rectangle(0, this.canvasEl.nativeElement.height - 425, this.canvasEl.nativeElement.width * 2, 50, {
      isStatic: true
    });
    const floor13 = Matter.Bodies.rectangle(0, this.canvasEl.nativeElement.height - 225, this.canvasEl.nativeElement.width * 2, 50, {
      isStatic: true
    });
    const floor2 = Matter.Bodies.rectangle(0, 0, 50, this.canvasEl.nativeElement.height * 2, {
      isStatic: true
    });
    const floor3 = Matter.Bodies.rectangle(this.canvasEl.nativeElement.width, 0, 50, this.canvasEl.nativeElement.height * 2, {
      isStatic: true
    });

    const bar1 = Matter.Bodies.rectangle(this.canvasEl.nativeElement.width / 4, this.canvasEl.nativeElement.height, 10, 200, {
      isStatic: true
    })
    const bar2 = Matter.Bodies.rectangle(this.canvasEl.nativeElement.width / 2, this.canvasEl.nativeElement.height, 10, 200, {
      isStatic: true
    })
    const bar3 = Matter.Bodies.rectangle(this.canvasEl.nativeElement.width / 4 * 3, this.canvasEl.nativeElement.height, 10, 200, {
      isStatic: true
    })
    // const bar4 = Matter.Bodies.rectangle(this.canvasEl.nativeElement.width/4,this.canvasEl.nativeElement.height-100,30,200,{isStatic:true})

    // Matter.MouseConstraint.create({

    // })

    Matter.World.add(world, [floor, floor1, floor12, floor13, floor2, floor3]);
    Matter.Engine.run(engine);
    Matter.Render.run(render);
    const randomInRange = (min, max) => Math.random() * (max - min) + min;
    const randomIntInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    // document.querySelector("canvas").addEventListener("mousedown", () => {
    //   for (let i = 0; i < 1; i++) {
    //     const x = randomInRange(20, this.canvasEl.nativeElement.width);
    //     const y = randomInRange(50, 80);
    //     const radius = randomInRange(25, 50);
    //     const sides = randomIntInRange(3, 6);
    //     const body = Matter.Bodies.circle(x, y, 10, {
    //       friction: 20,
    //       restitution: 1,

    //     });
    //     Matter.World.add(world, body);
    //   }
    // });

    var stack = Matter.Composites.stack(30, 50, 1, 6, 0, 0, function (x, y) {
      return Matter.Bodies.rectangle(x, y, 50 * 2, 50, {
        slop: 0.5,
        friction: 1,
        frictionStatic: Infinity,
      });
    });
    Matter.World.add(world, [
      Matter.Body,
      stack,
      // walls
    ]);

    var stack = Matter.Composites.stack(130, 50, 1, 6, 0, 0, function (x, y) {
      return Matter.Bodies.rectangle(x, y, 50 * 2, 50, {
        slop: 0.5,
        friction: 1,
        frictionStatic: Infinity
      });
    });
    Matter.World.add(world, [
      Matter.Body,
      stack,
      // walls
    ]);
    var stack = Matter.Composites.stack(230, 50, 1, 6, 0, 0, function (x, y) {
      return Matter.Bodies.rectangle(x, y, 50 * 2, 50, {
        slop: 0.5,
        friction: 1,
        frictionStatic: Infinity
      });
    });
    Matter.World.add(world, [
      Matter.Body,
      stack,
      // walls
    ]);


    var mouse = Matter.Mouse.create(render.canvas),
      mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    Matter.World.add(world, mouseConstraint)

  }
  
  menu(){
    // this.api.postData();
    this.router.navigate(['/main'])
  }
}