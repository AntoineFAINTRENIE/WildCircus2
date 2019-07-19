import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomepageComponent } from './homepage/homepage.component';
import { ConnectionComponent } from './connection/connection.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ClownArticleComponent } from './clown-article/clown-article.component';

@NgModule({
declarations: [
AppComponent,

HomepageComponent,
ConnectionComponent,
QuizzComponent,
ClownArticleComponent
],
imports: [
BrowserModule,
FormsModule,
RouterModule.forRoot([

{
path: "connection",
component: ConnectionComponent,
pathMatch: "full",
},

{
path: "home",
component: HomepageComponent,
pathMatch: "full",
},

{
path: "clown",
component: ClownArticleComponent,
pathMatch: "full",
},

{
path: "quizz",
component: QuizzComponent,
pathMatch: "full",
}
]),

AppRoutingModule,
AngularFontAwesomeModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }