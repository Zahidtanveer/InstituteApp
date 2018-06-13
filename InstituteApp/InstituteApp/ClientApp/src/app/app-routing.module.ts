// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { CustomersComponent } from "./components/customers/customers.component";
import { ProductsComponent } from "./components/products/products.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { InstituteComponent } from './components/Institute/Institute.componet';
import { createInstitute } from './components/Institute/AddInstitute.component';
import { InstituteService } from './services/institute.service';
import { editInstitute } from './components/Institute/EditInstitute.component';
import { AcadamicComponent } from './components/Acadamic/acadamic.component';
import { createAcadamic } from './components/Acadamic/AddAcadamic.component';
import { editAcadamic } from './components/Acadamic/EditAcadamic.component';




@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", component: HomeComponent, canActivate: [AuthGuard], data: { title: "Home" } },
            { path: "login", component: LoginComponent, data: { title: "Login" } },
            { path: "customers", component: CustomersComponent, canActivate: [AuthGuard], data: { title: "Customers" } },
            { path: "products", component: ProductsComponent, canActivate: [AuthGuard], data: { title: "Products" } },
            { path: "orders", component: OrdersComponent, canActivate: [AuthGuard], data: { title: "Orders" } },
            { path: "settings", component: SettingsComponent, canActivate: [AuthGuard], data: { title: "Settings" } },
            { path: "about", component: AboutComponent, data: { title: "About Us" } },
            { path: "fetch-institute", component: InstituteComponent, data: { title: "Institiute" } },
            { path: "add-institute", component: createInstitute, data: { title: "Add Institiute" } },
            { path: "institute/edit/:Id", component: editInstitute, data: { title: "Edit Institiute" } },
            { path: "fetch-acadamic", component: AcadamicComponent, data: { title: "Acadamic" } },
            { path: "add-acadamic", component: createAcadamic, data: { title: "Add Acadamic" } },
            { path: "acadamic/edit/:Id", component: editAcadamic, data: { title: "Edit Acadamic" } },
            { path: "home", redirectTo: "/", pathMatch: "full" },
            { path: "**", component: NotFoundComponent, data: { title: "Page Not Found" } },
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthService, AuthGuard
    ]
})
export class AppRoutingModule { }
