import { Component } from '@angular/core';
import { Project } from '../../core/models/project.interface';
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    { id: 1, title: 'GoCart', description: 'E-Commerce project', tools: ['Angular', 'Typescript', 'Tailwind-css'], features: ['Used Flowbite and Tailwind CSS for design'], githubLink: 'https://github.com/HabibaMar3i/ecommerce-c45', liveLink: 'https://ecommerce-c45.vercel.app/', imageUrl: 'assets/images/GoCart.jpeg' },
    { id: 2, title: 'Social Tech.', description: 'Facebook clone', tools: ['Angular', 'Typescript', 'Tailwind-css'], features: ['Used Flowbite and Tailwind CSS for design'], githubLink: 'https://github.com/HabibaMar3i/SocialTech', liveLink: 'https://social-tech-one.vercel.app/', imageUrl: 'assets/images/SocialTech.png' },
    { id: 3, title: 'EgyptMoonTravel', description: 'Travel Agency', tools: ['React', 'Javascript', 'Tailwind-css', 'Firebase'], features: ['Used Tailwind CSS for design'], liveLink: 'https://egyptmoontravel.com/#/home', imageUrl: 'assets/images/egyptmoontravel2.jpeg' },
  ]
}