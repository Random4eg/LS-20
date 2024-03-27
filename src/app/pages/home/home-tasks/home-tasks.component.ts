import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrl: './home-tasks.component.scss'
})
export class HomeTasksComponent {  public dailly = [

  {
    id: Date.now(),
    title: 'Short news title will be here',
  }
]

}
