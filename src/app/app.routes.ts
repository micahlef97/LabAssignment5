import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
const routes: Routes = [
    {
        path:'',
        component: MainContentComponent
    },
    {
        path:'**',
        component: MainContentComponent
    }
]

export const AppRoutes = RouterModule.forRoot(routes);