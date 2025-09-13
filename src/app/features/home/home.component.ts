import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { MyskillsComponent } from "./myskills/myskills.component";
import { MyprojectsComponent } from "./myprojects/myprojects.component";

@Component({
  selector: 'app-home',
  imports: [AboutComponent, AboutmeComponent, MyskillsComponent, MyprojectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
