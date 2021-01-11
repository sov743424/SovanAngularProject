import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  service=[{
    id:1,
    img:'../../assets/pexels-pixabay-265087.jpg'
  },
  {
    id:2,
    img:'../../assets/i1.jpg'
  },
  {
    id:3,
    img:'../../assets/i2.jpg'
  },
{
  id:4,
  img:'../../assets/i3.jpg'
},
{
  id:5,
  img:'../../assets/i4.jpg'
},
{id:6,
  img:'../../assets/i10.jpg'
},
{
  id:7,
  img:'../../assets/i6.jpg'
},
{id:8,
  img:'../../assets/i7.jpg'}
]

ser=[{
  id:1,
  img:'../../assets/a1.png',
  work:'Angular',
  des:'Angular is the platform that makes it easy to develop robust web applications'
},
{
  id:2,
  img:'../../assets/a2.png',
  work:'ReactJS',
  des:'ReactJS was designed to help improve the total rendered pages from the website server'
},
{
  id:3,
  img:'../../assets/a3.png',
  work:'Bootstrap',
  des:'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites'
},
{
id:4,
  img:'../../assets/a4.png',
  work:'JQuery',
  des:'jQuery is a lightweight, "write less, do more", JavaScript library'
},
{
id:5,
img:'../../assets/a5.png',
work:'Node JS',
des:'Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature'
},
{
id:6,
img:'../../assets/a6.jpg',
work:'PHP',
des:'You can make a PHP script to run it without any server or browser'
}]
  constructor() { }

  ngOnInit(): void {
    
  }



}