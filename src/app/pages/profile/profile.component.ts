import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(global: GlobalService) {
    global.pageTitle = 'Profile'
  }
}
