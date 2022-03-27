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

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    HeaderComponent,
    FooterComponent,
    ToggleBtnComponent,
    DeleteBtnComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
