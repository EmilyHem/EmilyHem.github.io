import { Component, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterState } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public router: Router,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.handleRouteEvents();
  }
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

  handleRouteEvents() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
        this.titleService.setTitle(title);
        gtag('event', 'page_view', {
          page_title: title,
          page_path: event.urlAfterRedirects,
          page_location: this.document.location.href
        })
      }
    });
  }

  getTitle(state: RouterState, parent: ActivatedRoute): string[] {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data['title']) {
      data.push(parent.snapshot.data['title']);
    }
    if (state && parent && parent.firstChild) {
      data.push(...this.getTitle(state, parent.firstChild));
    }
    return data;
  }
}
