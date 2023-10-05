import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

export interface Project {
  name: string;
  description: string;
  technologies: Array<string>;
  thumbnail: string;
  type: string;
  pic?: string;
  ytLink?: SafeResourceUrl;
  githubLink?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: {[name: string]: Project} = {
    'Midnight Tempo': {
      name: 'Midnight Tempo',
      description: 'Midnight Tempo is a first-person rhythm game I created in Unity. Click the targets to the beat of the song.',
      technologies: ['C#', 'Unity', 'FL Studio'],
      thumbnail: '../../assets/midnightTempo.gif',
      type: 'Unity Game (Desktop)',
      ytLink: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/vElJRXEzwNE'),
      githubLink: 'https://github.com/emshem/Midnight-Tempo',
    },
    'EnableU': {
      name: 'EnableU',
      description: 'During StarterHacks 2018, I worked together with my team to create a prototype to bridge the gap in transportation accessibility. Our prototype won <a href="https://uwaterloo.ca/stories/first-time-hackers-create-award-winning-prototype-0" target="_blank">Best IoT Hack</a> at the event.',
      technologies: ['C', 'Arduino'],
      thumbnail: '../../assets/EnableU.png',
      type: 'StarterHacks 2018',
      pic: 'EnableU2.JPG',
    },
    'Midnight Tempo2': {
      name: 'Midnight Tempo',
      description: 'Midnight Tempo is a first-person rhythm game I created in Unity. Click the targets to the beat of the song.',
      technologies: ['C#', 'Unity', 'FL Studio'],
      thumbnail: '../../assets/midnightTempo.gif',
      type: 'Unity Game (Desktop)',
      ytLink: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/vElJRXEzwNE'),
      githubLink: 'https://github.com/emshem/Midnight-Tempo',
    },
    'EnableU2': {
      name: 'EnableU',
      description: 'During StarterHacks 2018, I worked together with my team to create a prototype to bridge the gap in transportation accessibility. Our prototype won <a href="https://uwaterloo.ca/stories/first-time-hackers-create-award-winning-prototype-0" target="_blank">Best IoT Hack</a> at the event.',
      technologies: ['C', 'Arduino'],
      thumbnail: '../../assets/EnableU.png',
      type: 'StarterHacks 2018',
      pic: 'EnableU2.JPG',
    },
  }

  public projectList: Project[] = Object.values(this.projects);

  constructor(public dialog: MatDialog, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
  }

  public openDialog(projectName: string) {
    this.dialog.open(ProjectDialogComponent, {
      data: {
        project: this.projects[projectName],
      },
      width: '60%',
      backdropClass: 'backdrop',
      autoFocus: false
    });
  }
}
