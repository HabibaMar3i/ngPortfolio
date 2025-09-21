import { Component } from '@angular/core';
import { Experience } from '../../core/models/experience.interface';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  experiences: Experience[] = [
    { id: 1, position: 'Frontend Engineer', place: 'Banque Misr - Digital Transformation', description: ['Built and maintained shared UI components used across all digital tribes, ensuring consistency, reusability, and accessibility.', 'Developed scalable and modular components with Angular (latest versions), Nx monorepo, Tailwind CSS, and deployed via Azure DevOps pipelines.', 'Improved developer experience by documenting component usage and applying best practices in performance and accessibility.'], time: 'December 2024 - Present' },
    { id: 2, position: 'Frontend Intern', place: 'Quanode (Internship)', time: 'April 2025 - May 2025' },
    { id: 3, position: 'FullStack Engineer', place: 'Egypt Moon Travel (Freelance)', description: ['Designed and developed the company’s official website for their travel agency using React and Firebase', 'Implemented dynamic pages for travel packages and meeting booking requests, ensuring a smooth user experience across devices.', 'Integrated Firebase for authentication, hosting, and database management to handle real-time updates.'], time: 'December 2024 - January 2025' },
    {
      id: 4, position: 'Angular Frontend Intern', place: 'Route Academy (Internship)', description: ['Learned Component-based architecture and modularization.',
        'Dealt with Reactive Forms with validation and error handling.',
        'Used Routing & Guards for secure and structured navigation.',
        'Learned and used Services, Dependency Injection, and Observables for data management.',
        'Used State management and component communication.',
        'Studied Lifecycle hooks, pipes, and directives for dynamic UI building.',
        'Contributed to team projects, debugging and enhancing existing Angular codebases while following clean coding practices.'], time: 'November 2024'
    },
    {
      id: 5, position: 'React Frontend Intern', place: 'Route Academy (Internship)', description: ['Built projects applying core React concepts:',
        'Functional components with Hooks (useState, useEffect, useContext).',
        'Context API for state management.',
        'React Router for multi-page navigation.',
        'Handling API calls and dynamic rendering.'], time: 'March 2024'
    },
  ]
}
