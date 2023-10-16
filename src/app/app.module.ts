import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewOperationComponent } from './new-operation/new-operation.component';
import { UserRecordsComponent } from './user-records/user-records.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecordPipe } from './pipes/record.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewOperationComponent,
    UserRecordsComponent,
    RecordPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [RecordPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
