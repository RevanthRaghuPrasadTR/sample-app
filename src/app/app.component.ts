import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var particlesJS : any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-app';

  ngOnInit() : void {
    particlesJS.load('particles-js', 'assets/particles.json', function() { console.log('callback - particles.js config loaded'); 
  });
  }
}

