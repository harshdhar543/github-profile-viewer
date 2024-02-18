import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FollowerCardComponent } from './components/follower-card/follower-card.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserInfoComponent,
    RepoCardComponent,
    RepoListComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    FollowerCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
