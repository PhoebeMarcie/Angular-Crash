import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Task App';
  showAddTask : boolean = false;
  subscription: Subscription = new Subscription;

  constructor (
    private uiService: UiService,
    private router:Router,
  ){

    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask=value)
  }

  toggleAddTask(){
   this.uiService.toggleAddTask();
  }

  hasRoute (route:string){
return this.router.url === route;
  }
}
