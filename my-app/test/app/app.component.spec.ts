import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../../src/app/app.component';
import {render} from '@testing-library/angular';
import {TopBarComponent} from '../../src/app/top-bar/top-bar.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        TopBarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render top bar', async () => {
    const {getByText} = await render(AppComponent);

    expect(getByText('My Store'));
  });
});
