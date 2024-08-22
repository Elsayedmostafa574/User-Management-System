import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './features/components/auth/auth.component';
import { FeaturesModule } from './features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';  
import { MatToolbarModule } from '@angular/material/toolbar';  
import { MatListModule } from '@angular/material/list';  
import { MatButtonModule } from '@angular/material/button';  
import {MatTableModule} from '@angular/material/table';
import { ContentComponent } from './shared/content/content.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    BrowserAnimationsModule,
    RouterModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,  
    MatToolbarModule,  
    MatListModule,  
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS , useClass: AuthInterceptor , multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
