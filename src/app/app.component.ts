import { Component } from '@angular/core';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private connService: ConnectionService) {

    //  PROMIS
    connService.getChimcharWithPromise()
    .then(chimchar=> console.log('Chimchar con fetch nel component',chimchar))

    //  OSSERVABLE
    connService.getChimcharWithObservable()
    .subscribe({
      next: chimchar=> console.log('Chimchar con http client nel component',chimchar),
      error: err => console.log(err)
    })

  }

  title = 'rxjs-test';
}
