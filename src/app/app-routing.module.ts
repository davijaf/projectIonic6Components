import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/components/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/components/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./pages/components/checkbox/checkbox.module').then( m => m.CheckboxPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/components/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./pages/components/accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./pages/components/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('./pages/components/tags/tags.module').then( m => m.TagsPageModule)
  },
  {
    path: 'js',
    loadChildren: () => import('./pages/components/js/js.module').then( m => m.JsPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./pages/components/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/native/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'flashlight',
    loadChildren: () => import('./pages/native/flashlight/flashlight.module').then( m => m.FlashlightPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error404/error404.module').then( m => m.Error404PageModule)
  },









];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
