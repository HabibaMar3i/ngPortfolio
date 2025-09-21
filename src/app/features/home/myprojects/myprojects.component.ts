import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/project.interface';

@Component({
  selector: 'app-myprojects',
  imports: [RouterLink],
  templateUrl: './myprojects.component.html',
  styleUrl: './myprojects.component.css'
})
export class MyprojectsComponent {
  projects: Project[] = [
      {id: 1, title: 'GoCart', imageUrl: 'assets/images/GoCart.jpeg'},
      {id: 2, title: 'EgyptMoonTravel', imageUrl: 'assets/images/egyptmoontravel2.jpeg'},
      {id: 3, title: 'SocialTech.', imageUrl: 'assets/images/SocialTech.png'}
    ]
}
