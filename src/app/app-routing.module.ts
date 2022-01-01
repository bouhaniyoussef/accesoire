import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { produitsComponent } from './components/produit/produits.component';
import { LoginComponent } from './components/login/login.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { AuthGuard } from './services/auth.guard';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';


const routes:Routes=[
  {path : "acceuil" , component :AccueilComponent},
  {path : "produits" , component : produitsComponent },
  {path : "contact" , component : LoginComponent },
  { path: 'edit-products', component: EditProductsComponent, canActivate : [AuthGuard]},
  { path: 'cart', component: CartComponent,canActivate : [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
