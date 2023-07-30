import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from 'src/app/heroes/services/heroes.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComicsModule } from 'src/app/comics/comics.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SharedModule, ComicsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  private heroesService = inject(HeroesService);

  getAllHeroes() {
    this.heroesService.getAllHeroes({ reset: true }).subscribe();
  }

  public isSidebarOpen: boolean = false;

  openSidebar() { this.isSidebarOpen = true }
  closeSidebar() { this.isSidebarOpen = false }
}
