import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/layouts/navbar/navbar.component";
import { FooterComponent } from "./core/layouts/footer/footer.component";
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, BackToTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('ngportfolio');

  ngOnInit(): void {
    initFlowbite();
  }
}
