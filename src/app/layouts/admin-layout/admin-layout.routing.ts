import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ProjetComponent } from 'app/projet/projet.component';
import { AddProjectComponent } from 'app/add-project/add-project.component';
import { EditProjectComponent } from 'app/edit-project/edit-project.component';



export const AdminLayoutRoutes: Routes = [

    
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'projet',         component: ProjetComponent },
    {path:'addProject' ,      component:AddProjectComponent},
    {path:'editProject/:id',      component:EditProjectComponent }

    
   
  
];
