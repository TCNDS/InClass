import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directive/highlight.directive';
import { TasklistComponent } from './tasklist/tasklist.component';
import { DirectiveComponent } from './directive/directive.component';
import { OverflowDirective } from './tasklist/overflow.directive';
import { PipesComponent } from './pipes/pipes.component';
import { MaskPhonePipe } from './pipes/mask-phone.pipe';
import { ChildComponent } from './dataCommunication/child/child.component';
import { ParentComponent } from './dataCommunication/parent/parent.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { OverflowDesciptionPipe } from './person-info/overflow-desciption.pipe';
import { DisplayDescriptionComponent } from './person-info/display-description/display-description.component';
import { FlightBookerComponent } from './flight-booker/flight-booker.component';
import { RoutingComponent } from './routing/routing.component';
import { FormsIntoComponent } from './forms-into/forms-into.component';
import { ObservableOperatorsComponent } from './observable-operators/observable-operators.component';
import { ModifierComponent } from './observable-operators/modifier/modifier.component';
import { ReceiverComponent } from './observable-operators/receiver/receiver.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { FavoriteComponent } from './user/favorite/favorite.component';
import { StarWarSearchComponent } from './star-war-search/star-war-search.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HighlightDirective,
    TasklistComponent,
    DirectiveComponent,
    OverflowDirective,
    PipesComponent,
    MaskPhonePipe,
    ChildComponent,
    ParentComponent,
    PersonInfoComponent,
    OverflowDesciptionPipe,
    DisplayDescriptionComponent,
    FlightBookerComponent,
    RoutingComponent,
    FormsIntoComponent,
    ObservableOperatorsComponent,
    ModifierComponent,
    ReceiverComponent,
    ProductsComponent,
    UserComponent,
    FavoriteComponent,
    StarWarSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
