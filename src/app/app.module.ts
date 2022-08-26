import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ComposantComponent } from './composant/composant.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { CompetenceComponent } from './competence/competence.component';
import { AddCompetenceComponent } from './add-competence/add-competence.component';
import { EditCompetenceComponent } from './edit-competence/edit-competence.component';
import { PhaseComponent } from './phase/phase.component';
import { AddPhaseComponent } from './add-phase/add-phase.component';
import { EditPhaseComponent } from './edit-phase/edit-phase.component';
import { RegisterComponent } from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RessourceComponent } from './ressource/ressource.component';
import { RoleComponent } from './role/role.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ComposantComponent,
    AddProjectComponent,
    EditProjectComponent,
    CompetenceComponent,
    AddCompetenceComponent,
    EditCompetenceComponent,
    PhaseComponent,
    AddPhaseComponent,
    EditPhaseComponent,
    RegisterComponent,
    RessourceComponent,
    RoleComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
