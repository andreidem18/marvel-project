import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteItemComponent } from '../../../../src/app/comics/components/favorite-item/favorite-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { favoritesMock } from '../../mocks-data/favorites.mock';
import { ComicDetailComponent } from 'src/app/comics/components/comic-detail/comic-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComicsService } from 'src/app/comics/services/comics.service';
import { ToastService } from '../../../../src/app/shared/services/toast/toast.service';
import { ConfirmationService } from 'src/app/shared/services/confirmation/confirmation.service';

describe('FavoriteItemComponent', () => {
  const favorite = favoritesMock[0];

  let component: FavoriteItemComponent;
  let fixture: ComponentFixture<FavoriteItemComponent>;
  let compiled: HTMLElement;
  let service: ComicsService;
  let confirmationService: ConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, SharedModule ],
      declarations: [FavoriteItemComponent, ComicDetailComponent],
    });
    fixture = TestBed.createComponent(FavoriteItemComponent);
    service = TestBed.inject(ComicsService);
    confirmationService = TestBed.inject(ConfirmationService);
    component = fixture.componentInstance;
    component.favorite = favorite;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match with the snapshot', () => {
    expect(compiled.innerHTML).toMatchSnapshot();
  });

  it('should delete favorite when clicking trash button', () => {
    jest.spyOn(confirmationService, 'display');
    const buttonTag = compiled.querySelector('button');
    buttonTag?.dispatchEvent(new Event('click'));
    expect(confirmationService.display).toHaveBeenCalled();
  });

  it('should open detail when clicking favorite', () => {
    const favoriteTag = compiled.querySelector('.favorite-item');
    favoriteTag?.dispatchEvent(new Event('click'));
    expect(component.isComicDetailOpen).toBeTruthy();
  })

});
