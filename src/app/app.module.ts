import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TaskComponent } from './component/task/task.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ToggleBtnComponent } from './component/toggle-btn/toggle-btn.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteBtnComponent } from './component/delete-btn/delete-btn.component';
import { InputComponent } from './component/input/input.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './component/about/about.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: FooterComponent },
  { path: 'about', component: AboutComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    HeaderComponent,
    FooterComponent,
    ToggleBtnComponent,
    DeleteBtnComponent,
    InputComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
