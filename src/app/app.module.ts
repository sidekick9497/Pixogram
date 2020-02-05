import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AsideChoiceComponent } from './aside-choice/aside-choice.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BaseComponent } from './base/base.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { ConnectionsComponent } from './connections/connections.component';
import { SearchComponent } from './search/search.component';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {RemoveDigitsPipe} from './pipes/remove-digits.pipe';
import {MatDividerModule} from '@angular/material/divider';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SignUpComponent,
    AsideChoiceComponent,
    LoginComponent,
    LogoutComponent,
    GalleryComponent,
    HeaderComponent,
    ProfileComponent,
    MediaDetailComponent,
    NotificationsComponent,
    BaseComponent,
    UploadMediaComponent,
    ConnectionsComponent,
    SearchComponent,
    ErrorComponent,
    RemoveDigitsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
