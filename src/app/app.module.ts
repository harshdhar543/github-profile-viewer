import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GithubComponent } from './service/github/github.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserInfoComponent,
    RepoCardComponent,
    RepoListComponent,
    HomeComponent,
    ProfileComponent,
    GithubComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
