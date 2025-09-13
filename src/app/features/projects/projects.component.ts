import { Component } from '@angular/core';
import { Project } from '../../core/models/project.interface';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {id: 1, title: 'GoCart', description: 'Ecommerce project', tools: ['Angular', 'Typescript', 'Tailwind-css'], features: ['feature a', 'feature b'], githubLink: 'www.google.com', liveLink: 'www.google.com', imageUrl: 'assets/images/GoCart.jpeg'},
  ]
}