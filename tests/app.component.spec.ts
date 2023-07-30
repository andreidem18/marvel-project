import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';
import { HeroesModule } from 'src/app/heroes/heroes.module';
import { ComicsModule } from 'src/app/comics/comics.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavbarComponent } from 'src/app/standalone/navbar/navbar.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HeroesModule, ComicsModule, SharedModule, HttpClientTestingModule, NavbarComponent ],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'marvel-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('marvel-challenge');
  });
});
