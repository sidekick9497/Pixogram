import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MediaDetailComponent } from './media-detail/media-detail.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BaseComponent } from './base/base.component';
import { UploadMediaComponent } from './upload-media/upload-media.component';
import { ConnectionsComponent } from './connections/connections.component';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { UserLoggedInGuardService } from './services/user-logged-in-guard.service';


const routes: Routes = [{path:"",redirectTo:'login',pathMatch:'full'},
                        {path:"login", component: LoginComponent,canActivate:[UserLoggedInGuardService]},
                        {path:"logout", component: LogoutComponent, canActivate:[AuthenticationGuardService]},
                        {path:"profile", component: ProfileComponent,canActivate:[AuthenticationGuardService]},
                        {path:"signup", component: SignUpComponent},
                        {path:"mediaDetails/:mediaId", component: MediaDetailComponent,canActivate:[AuthenticationGuardService]},
                        {path:'notifications', component: NotificationsComponent,canActivate:[AuthenticationGuardService]},
                        {path: 'gallery', component: GalleryComponent,canActivate:[AuthenticationGuardService]},
                        {path: 'base', component: BaseComponent },
                        {path:'upload',component: UploadMediaComponent, canActivate:[AuthenticationGuardService]},
                        {path:'connections',component: ConnectionsComponent, canActivate:[AuthenticationGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
