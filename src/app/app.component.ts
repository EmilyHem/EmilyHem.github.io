import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public particleOptions = {
    background: {
      color: {
        value: '#000000'
      }
    },
    fpsLimit: 30,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onClick: {
          enable: true,
          mode: 'repulse'
        },
        onHover: {
          enable: true,
          mode: 'bubble',
          parallax: {
            enable: true,
            force: 25,
            smooth: 10
          }
        },
        resize: true
      },
        modes: {
          bubble: {
            distance: 400,
            duration: 0.3,
            opacity: 1,
            size: 4,
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 5
          }
        }
    },
    particles: {
      color: {
        value: '#ffffff'
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: false
      },
      move: {
        direction: 'bottom',
        enable: true,
        random: false,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
          factor: 1000
        },
        limit: 0,
        value: 80
      },
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.1
        },
        value: 0.5,
        animation:{
          enable: false,
          speed: 1,
          minimumValue: 0.1
        }
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 1
        },
      },
      size: {
        random: true,
        value: 10
      },
      twinkle: {
        particles: {
          enable: false,
          frequency: 0.0005,
          opacity: 1
        }
      }
    },
    detectRetina: true
};
}
