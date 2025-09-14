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
    { id: 1, position: 'Frontend Engineer', place: 'Banque Misr - Digital Transformation', description: 'lorem lorem lorem', time: 'December 2024 - Present' },
    { id: 2, position: 'Frontend Intern', place: 'Quanode (Internship)', description: 'lorem lorem lorem', time: 'December 2024 - Present' },
    { id: 3, position: 'FullStack Engineer', place: 'Egypt Moon Travel (Freelance)', description: 'lorem lorem lorem', time: 'December 2024 - January 2025' },
    { id: 4, position: 'Angular Frontend Intern', place: 'Route Academy (Internship)', description: 'lorem lorem lorem', time: 'November 2024' },
    { id: 5, position: 'React Frontend Intern', place: 'Route Academy (Internship)', description: 'lorem lorem lorem', time: 'March 2024' },
  ]
}
