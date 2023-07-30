import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDetailComponent } from '../../../../src/app/comics/components/comic-detail/comic-detail.component';
import { comicData } from '../../mocks-data/comicData.mock';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environtment } from 'src/environments/environments';
import { comicRes } from '../../mocks-data/comics-res.mock';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

describe('ComicDetailComponent', () => {
  const comic = comicRes.data.results[0];

  let component: ComicDetailComponent;
  let fixture: ComponentFixture<ComicDetailComponent>;
  let httpMock: HttpTestingController;
  let compiled: HTMLElement;
  let toastService: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, SharedModule ],
      declarations: [ComicDetailComponent]
    });
    fixture = TestBed.createComponent(ComicDetailComponent);
    toastService = TestBed.inject(ToastService);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    httpMock = TestBed.inject(HttpTestingController);

    component.isOpen = true;
    component.ngOnChanges({ comicData: {
      currentValue: comicData,
      previousValue: undefined,
      firstChange: false,
      isFirstChange: function (): boolean { return true }
    }});

    const request = httpMock.expectOne(`https://gateway.marvel.com/v1/public/comics/47176`)
    request.flush(comicRes);

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the comic name', () => {
    const comicNameTag = compiled.querySelector('.comic-title');
    expect(comicNameTag?.textContent).toContain(comic.title);
  });

  it('click add to favorites should add the comic to favorites', () => {
    jest.spyOn(component, 'addToFavorites');
    jest.spyOn(toastService, 'addToast');
    const addFavoritesButton = compiled.querySelector('.add-favorite');
    addFavoritesButton?.dispatchEvent(new Event('click'));
    expect(component.addToFavorites).toHaveBeenCalled();
    expect(toastService.addToast).toHaveBeenCalled();
  });
});
