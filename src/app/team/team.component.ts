import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team=[{
    id:1,
    img:'../../assets/d7.jpg',
    name:'Anna Williams',
    work:'Angular',
    des:'Angular is the platform that makes it easy to develop robust web applications'
  },
  {
    id:2,
    img:'../../assets/d10.jpg',
    name:'John Doe',
    work:'ReactJS',
    des:'ReactJS was designed to help improve the total rendered pages from the website server'
  },
  {
    id:3,
    img:'../../assets/d12.jpg',
    name:'Tom Adams',
    work:'Bootstrap',
    des:'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites'
  },
{
  id:4,
    img:'../../assets/d2.jpg',
    name:'Maria Smith',
    work:'JQuery',
    des:'jQuery is a lightweight, "write less, do more", JavaScript library'
}]
teams=[
{
  id:5,
  img:'../../assets/d9.jpg',
  name:'John Doe',
  work:'Node JS',
  des:'Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature'
},
{
  id:6,
  img:'../../assets/d4.jpg',
  name:'John Doe',
  work:'PHP',
  des:'You can make a PHP script to run it without any server or browser'
},
{
  id:7,
  img:'../../assets/d5.jpg',
  name:'John Doe',
  work:'PYTHON',
  des:'Python is quickly ascending to the forefront of the most popular programming languages in the world.'
},
{
  id:8,
  img:'../../assets/d6.jpg',
  name:'John Doe',
  work:'RUBY',
  des:'Ruby is an interpreted, high-level, dynamic, general-purpose, open source programming language'
}
]

  constructor() { }

  ngOnInit(): void {
  }

}
