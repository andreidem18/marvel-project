import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeCardComponent } from '../../../../src/app/heroes/components/heroe-card/heroe-card.component';
import { heroesResMock } from '../../mocks-data/heroes-res.mock';
import { Hero } from 'src/app/heroes/interfaces/Hero';
import { SharedModule } from 'src/app/shared/shared.module';

describe('HeroeCardComponent', () => {
  let component: HeroeCardComponent;
  let fixture: ComponentFixture<HeroeCardComponent>;
  let compiled: HTMLElement;
  let hero: Hero = heroesResMock.data.results[0] as Hero;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeCardComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(HeroeCardComponent);
    component = fixture.componentInstance;
    component.hero = hero;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the hero name, image and comics', () => {
    const nameTag = compiled.querySelector('[data-test=hero-name]');
    const heroImage = compiled.querySelector(`img[alt="${hero.name}"]`);
    expect(nameTag?.textContent).toBe(hero.name);
    expect((heroImage as HTMLImageElement).src)
      .toBe(`${hero.thumbnail.path}.${hero.thumbnail.extension}`);
  });

  it('should emit onSelectComic when clicking a comic', () => {
    jest.spyOn( component.onSelectComic, 'emit' );

    const comic = compiled.querySelector('[data-test=comic-item]');

    comic?.dispatchEvent( new Event('click'));
    const comicData = hero.comics.items[0];

    expect(component.onSelectComic.emit).toHaveBeenCalledWith(comicData);
  });

  it('should display "show all comics" only if there are more than 4 comics', () => {
    let showComics = compiled.querySelector('.show-comics');
    expect(showComics).not.toBeNull();

    component.hero = heroesResMock.data.results[1] as Hero;
    fixture.detectChanges();
    showComics = compiled.querySelector('.show-comics');
    expect(showComics).toBeNull();
  });

  it('should display a max of 4 comics', () => {
    const comicItems = compiled.querySelectorAll('[data-test=comic-item]')
    expect(comicItems).toHaveLength(4);
  });

  it('should display all comics when clicking "show all comics"', () => {
    const showComics = compiled.querySelector('.show-comics');
    showComics?.dispatchEvent( new Event('click'));
    fixture.detectChanges();
    const comicItems = compiled.querySelectorAll('[data-test=comic-item]')
    expect(comicItems).toHaveLength(hero.comics.items.length);
  });
});
