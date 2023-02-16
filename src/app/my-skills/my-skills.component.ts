import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {
  skills: any = [
    {
      icon: 'js.png',
      name: 'JavaScript'
    },
    {
      icon: 'angular.png',
      name: 'Angular'
    },
    {
      icon: 'html.png',
      name: 'HTML5'
    },
    {
      icon: 'sass.png',
      name: 'SASS / SCSS'
    },
    {
      icon: 'scrum.png',
      name: 'SCRUM'
    },
    {
      icon: 'Git.png',
      name: 'GIT / GITHUB'
    },
    {
      icon: 'rest-api.png',
      name: 'Rest API'
    },
    {
      icon: 'firebase.png',
      name: 'Firebase'
    },
    {
      icon: 'windows-logo.png',
      name: 'MS Azure'
    },
    {
      icon: 'windows-logo.png',
      name: 'Confluence'
    },
    {
      icon: 'test-lab.png',
      name: 'Test Automation'
    }

  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}