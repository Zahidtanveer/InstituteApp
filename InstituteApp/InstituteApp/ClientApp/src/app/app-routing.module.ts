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
import { CRIndexComponent } from './components/caste_religion/index.component';
import { ReligionComponent } from './components/caste_religion/religion.component';
import { CasteComponent } from './components/caste_religion/caste.component';
import { createReligion } from './components/caste_religion/AddReligion.component';
import { BatchComponent } from './components/course_batch/batch.component';
import { CourseComponent } from './components/course_batch/course.component';
import { editReligion } from './components/caste_religion/EditReligion.component';
import { editCaste } from './components/caste_religion/EditCaste.component';
import { createCaste } from './components/caste_religion/AddCaste.component';
import { createCourse } from './components/course_batch/AddCourse.component';
import { editCourse } from './components/course_batch/EidtCourse.component';
import { createBatch } from './components/course_batch/Addbatch.component';





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
            { path: "catse-and-religion", component: CRIndexComponent, data: { title: "Caste and Religion" } },
            { path: "religion/edit/:Id", component: editReligion, data: { title: "Edit Religion" } },
            { path: "caste/edit/:Id", component: editCaste, data: { title: "Edit Caste" } },
            { path: "fetch-religion", component: ReligionComponent, data: { title: "Religion" } },
            { path: "fetch-caste", component: CasteComponent, data: { title: "Caste" } },
            { path: "add-religion", component: createReligion, data: { title: "Add Religion" } },
            { path: "add-caste", component: createCaste, data: { title: "Add Caste" } },
            { path: "fetch-batch", component: BatchComponent, data: { title: "Batch" } },
            { path: "add-batch", component: createBatch, data: { title: "Batch" } },
            { path: "batch/edit/:Id", component: BatchComponent, data: { title: "Batch" } },
            { path: "fetch-course", component: CourseComponent, data: { title: "Course" } },
            { path: "add-course", component: createCourse, data: { title: "Add Course" } },
            { path: "course/edit/:Id", component: editCourse, data: { title: "Edit Course" } },
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
