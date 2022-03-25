import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './componrnt/tasks/tasks.component';
import { TaskComponent } from './componrnt/task/task.component';
import { HeaderComponent } from './componrnt/header/header.component';
import { FooterComponent } from './componrnt/footer/footer.component';
import { ToggleBtnComponent } from './componrnt/toggle-btn/toggle-btn.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteBtnComponent } from './delete-btn/delete-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    HeaderComponent,
    FooterComponent,
    ToggleBtnComponent,
    DeleteBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
