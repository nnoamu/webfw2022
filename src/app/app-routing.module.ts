import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcertComponent } from './pages/main/concert/concert.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { 
    path: 'main', 
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) 
  },
  { 
  path: 'not-found', 
  loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'signup', 
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) 
  },
  { 
    path: 'managerPage', 
    loadChildren: () => import('./pages/manager-page/manager-page.module').then(m => m.ManagerPageModule),
    canActivate: [AuthGuard]  
  },
  { 
    path: 'user', 
    loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfileModule),
    canActivate: [AuthGuard] 
  },
  { 
    path: '', 
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
