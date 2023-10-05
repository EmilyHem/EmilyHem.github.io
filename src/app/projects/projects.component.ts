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
    'Emergency Vehicle Detection': {
      name: 'Emergency Vehicle Detection',
      description: 'For my 2023 Waterloo Engineering Capstone Design project, my team and I designed a prototype for a system that can detect and notify the driver of emergency vehicles using digital signal processing and machine learning.',
      technologies: ['Python', 'React', 'TensorFlow'],
      thumbnail: '../../assets/emergencyVehicleDetection.png',
      type: '2023 Waterloo Engineering Capstone',
      pic: 'emergencyVehicleDetection2.png'
    },
    'Balcony Rave': {
      name: 'Balcony Rave',
      description: 'For the 2021 GI Jam, I developed an endless 2D side-scrolling rhythm game. Players control Ping the Penguin and help him bring zombies back to life through music.',
      technologies: ['C#, Unity'],
      thumbnail: '../../assets/balconyRave.gif',
      type: 'GI Jam 2021',
      pic: 'balconyRave.png',
      githubLink: 'https://github.com/emshem/Balcony-Rave'
    },
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
