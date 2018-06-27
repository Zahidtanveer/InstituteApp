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
import { editBatch } from './components/course_batch/EditBatch.component';
import { SyllabusComponent } from './components/Syllabus/Syllabus.component';
import { AllocateBatchTeacherService } from './services/AllocatedBatchTeacher.service';
import { AllocatedBatchTeacherComponent } from './components/AllocateBatchTeacher/AllocateBatchTeacher.component';
import { createSyllabus } from './components/Syllabus/AddSyllabus.component';
import { editSyllabus } from './components/Syllabus/EditSyllabus.Component';
import { editAllocateBatchTeacher } from './components/AllocateBatchTeacher/EditAllocateBatchTeacher.component';
import { createAllocateBatchTeacher } from './components/AllocateBatchTeacher/AddAllocateBatchTeacher.component';





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
            { path: "institute", component: InstituteComponent, canActivate: [AuthGuard], data: { title: "Institiute" } },
            { path: "add-institute", component: createInstitute, canActivate: [AuthGuard], data: { title: "Add Institiute" } },
            { path: "institute/edit/:Id", component: editInstitute, canActivate: [AuthGuard], data: { title: "Edit Institiute" } },
            { path: "acadamic", component: AcadamicComponent, canActivate: [AuthGuard], data: { title: "Acadamic" } },
            { path: "add-acadamic", component: createAcadamic, canActivate: [AuthGuard],data: { title: "Add Acadamic" } },
            { path: "acadamic/edit/:Id", component: editAcadamic, canActivate: [AuthGuard], data: { title: "Edit Acadamic" } },
            { path: "catse-and-religion", component: CRIndexComponent, canActivate: [AuthGuard], data: { title: "Caste and Religion" } },
            { path: "religion/edit/:Id", component: editReligion, canActivate: [AuthGuard], data: { title: "Edit Religion" } },
            { path: "caste/edit/:Id", component: editCaste, canActivate: [AuthGuard], data: { title: "Edit Caste" } },
            { path: "religion", component: ReligionComponent, canActivate: [AuthGuard], data: { title: "Religion" } },
            { path: "caste", component: CasteComponent, canActivate: [AuthGuard], data: { title: "Caste" } },
            { path: "add-religion", component: createReligion, canActivate: [AuthGuard], data: { title: "Add Religion" } },
            { path: "add-caste", component: createCaste, canActivate: [AuthGuard], data: { title: "Add Caste" } },
            { path: "batch", component: BatchComponent, canActivate: [AuthGuard], data: { title: "Batch" } },
            { path: "add-batch", component: createBatch, canActivate: [AuthGuard], data: { title: "Batch" } },
            { path: "batch/edit/:Id", component: editBatch, canActivate: [AuthGuard], data: { title: "Edit Batch" } },
            { path: "course", component: CourseComponent, canActivate: [AuthGuard], data: { title: "Course" } },
            { path: "add-course", component: createCourse, canActivate: [AuthGuard], data: { title: "Add Course" } },
            { path: "course/edit/:Id", component: editCourse, canActivate: [AuthGuard], data: { title: "Edit Course" } },
            { path: "syllabus", component: SyllabusComponent, canActivate: [AuthGuard], data: { title: "Syllabus" } },
            { path: "add-syllabus", component: createSyllabus, canActivate: [AuthGuard], data: { title: "Add Syllabus" } },
            { path: "syllabus/edit/:Id", component: editSyllabus, canActivate: [AuthGuard], data: { title: "Edit Syllabus" } },
            { path: "batchteacherallocation", component: AllocatedBatchTeacherComponent, canActivate: [AuthGuard], data: { title: "Allocate Batch Teacher" } },
            { path: "add-batchteacherallocation", component: createAllocateBatchTeacher, canActivate: [AuthGuard], data: { title: "Add Allocate Batch Teacher" } },
            { path: "batchteacherallocation/edit/:Id", component: editAllocateBatchTeacher, canActivate: [AuthGuard], data: { title: "Edit Allocate Batch Teacher" } },

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
