import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovieComponent } from '../../app/movie/edit-movie/edit-movie.component'

describe('EditMovieComponent', () => {
  let component: EditMovieComponent;
  let fixture: ComponentFixture<EditMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
