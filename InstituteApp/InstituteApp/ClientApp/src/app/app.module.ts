// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { NgModule, ErrorHandler } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule, FormControlDirective } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastyModule } from 'ng2-toasty';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { PopoverModule } from "ngx-bootstrap/popover";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppErrorHandler } from './app-error.handler';
import { AppTitleService } from './services/app-title.service';
import { AppTranslationService, TranslateLanguageLoader } from './services/app-translation.service';
import { ConfigurationService } from './services/configuration.service';
import { AlertService } from './services/alert.service';
import { LocalStoreManager } from './services/local-store-manager.service';
import { EndpointFactory } from './services/endpoint-factory.service';
import { NotificationService } from './services/notification.service';
import { NotificationEndpoint } from './services/notification-endpoint.service';
import { AccountService } from './services/account.service';
import { AccountEndpoint } from './services/account-endpoint.service';

import { EqualValidator } from './directives/equal-validator.directive';
import { LastElementDirective } from './directives/last-element.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { BootstrapTabDirective } from './directives/bootstrap-tab.directive';
import { BootstrapToggleDirective } from './directives/bootstrap-toggle.directive';
import { BootstrapSelectDirective } from './directives/bootstrap-select.directive';
import { BootstrapDatepickerDirective } from './directives/bootstrap-datepicker.directive';
import { GroupByPipe } from './pipes/group-by.pipe';

import { AppComponent } from "./components/app.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { CustomersComponent } from "./components/customers/customers.component";
import { ProductsComponent } from "./components/products/products.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { AboutComponent } from "./components/about/about.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

import { BannerDemoComponent } from "./components/controls/banner-demo.component";
import { TodoDemoComponent } from "./components/controls/todo-demo.component";
import { StatisticsDemoComponent } from "./components/controls/statistics-demo.component";
import { NotificationsViewerComponent } from "./components/controls/notifications-viewer.component";
import { SearchBoxComponent } from "./components/controls/search-box.component";
import { UserInfoComponent } from "./components/controls/user-info.component";
import { UserPreferencesComponent } from "./components/controls/user-preferences.component";
import { UsersManagementComponent } from "./components/controls/users-management.component";
import { RolesManagementComponent } from "./components/controls/roles-management.component";
import { RoleEditorComponent } from "./components/controls/role-editor.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { InstituteService } from "./services/institute.service";
import { createInstitute } from "./components/Institute/AddInstitute.component";
import { InstituteComponent } from "./components/Institute/Institute.componet";
import { editInstitute } from "./components/Institute/EditInstitute.component";
import { AcadamicComponent } from "./components/Acadamic/acadamic.component";
import { AcadamicService } from "./services/acadamic.service";
import { createAcadamic } from "./components/Acadamic/AddAcadamic.component";
import { editAcadamic } from "./components/Acadamic/EditAcadamic.component";
import { ReligionService } from "./services/CasteAndReligion/service.religion";
import { CasteService } from "./services/CasteAndReligion/service.caste";
import { CRIndexComponent } from "./components/caste_religion/index.component";
import { ReligionComponent } from "./components/caste_religion/religion.component";
import { CasteComponent } from "./components/caste_religion/caste.component";
import { createCaste } from "./components/caste_religion/AddCaste.component";
import { createReligion } from "./components/caste_religion/AddReligion.component";
import { editCaste } from "./components/caste_religion/EditCaste.component";
import { editReligion } from "./components/caste_religion/EditReligion.component";
import { BatchService } from "./services/CourseAndBatch/batch.service";
import { CourseService } from "./services/CourseAndBatch/course.service";
import { CourseComponent } from "./components/course_batch/course.component";
import { BatchComponent } from "./components/course_batch/batch.component";
import { createCourse } from "./components/course_batch/AddCourse.component";
import { editCourse } from "./components/course_batch/EidtCourse.component";
import { createBatch } from "./components/course_batch/Addbatch.component";
import { editBatch } from "./components/course_batch/EditBatch.component";
import { AllocateBatchTeacherService } from "./services/AllocatedBatchTeacher.service";
import { SyllabusService } from "./services/Syllabus.service";
import { SyllabusComponent } from "./components/Syllabus/Syllabus.component";
import { AllocatedBatchTeacherComponent } from "./components/AllocateBatchTeacher/AllocateBatchTeacher.component";
import { editSyllabus } from "./components/Syllabus/EditSyllabus.Component";
import { createSyllabus } from "./components/Syllabus/AddSyllabus.component";
import { editAllocateBatchTeacher } from "./components/AllocateBatchTeacher/EditAllocateBatchTeacher.component";
import { createAllocateBatchTeacher } from "./components/AllocateBatchTeacher/AddAllocateBatchTeacher.component";
import { UserTypeComponent } from "./components/UserTypes/userType.component";
import { DepartmentService } from "./services/employee/service.department";
import { DesignationService } from "./services/employee/service.designation";
import { createDepartment } from "./components/Employee/department/AddDepartment.component";
import { editDepartment } from "./components/Employee/department/EditDepartment.component";
import { DepartmentComponent } from "./components/Employee/department/departmant.component";
import { editDesignation } from "./components/Employee/designation/EditDesignation.component";
import { DesignationComponent } from "./components/Employee/designation/Designation.component";
import { createDesignation } from "./components/Employee/designation/AddDesignation.component";
import { EmployeeService } from "./services/employee/service.employee";
import { createEmployee } from "./components/Employee/AddEmployee.component";
import { EmployeeComponent } from "./components/Employee/employee.component";
import { DataService } from "./services/data.service";
import { editEmployee } from "./components/Employee/EditEmployee.component";
import { PrintEmployeeComponent } from "./components/Employee/printEmployee.component";
import { EmployeeAttendanceComponent } from "./components/Employee/attendance/attendance.component";
import { EmployeeAttendanceService } from "./services/employee/service.attendance";
import { createLeaveCategory } from "./components/Employee/leaves/AddLeaveCategory.component";
import { LeaveCategoryComponent } from "./components/Employee/leaves/leaveCategory.component";
import { LeaveCategoryService } from "./services/employee/service.leaveCategory";
import { LeaveService } from "./services/employee/service.leave";
import { createLeave } from "./components/Employee/leaves/Addleave.component";
import { LeaveComponent } from "./components/Employee/leaves/leave.component";
import { editLeaveCategory } from "./components/Employee/leaves/EditLeaveCategory.component";
import { createLeaveApplication } from "./components/Employee/leaves/leaveApplication.component";
import { StudentCategoryService } from "./services/student/service.studentCategory";
import { StudentService } from "./services/student/service.student";
import { createStudentCategory } from "./components/Students/AddStudentCategory.component";
import { editStudentCategory } from "./components/Students/EditStudentCategory.component";
import { StudentCategoryComponent } from "./components/Students/studentCategory.component";
import { StudentComponent } from "./components/Students/student.component";
import { createStudent } from "./components/Students/AddStudent.component";
import { StudentAttendanceComponent } from "./components/Students/Attendance/StudentAttendance.component";
import { StudentAttendanceService } from "./services/student/service.attendance";
import { PrintStudentComponent } from "./components/Students/Print/print.component";
import { GuardianComponent } from "./components/Students/Guardians/guardian.component";
import { editStudent } from "./components/Students/EditStudent.component";
import { StudentIDCardComponent } from "./components/Students/StudentIDCard/studentIDCard.component";
import { UpdateRollNoComponent } from "./components/Students/AssignRollNo/UpdateRollNo.component";




@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: TranslateLanguageLoader
            }
        }),
        NgxDatatableModule,
        ToastyModule.forRoot(),
        TooltipModule.forRoot(),
        PopoverModule.forRoot(),
        BsDropdownModule.forRoot(),
        CarouselModule.forRoot(),
        ModalModule.forRoot(),
        ChartsModule,
        ReactiveFormsModule,
        HttpModule
       
     
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        CustomersComponent,
        ProductsComponent,
        OrdersComponent,
        SettingsComponent,
        UsersManagementComponent, UserInfoComponent, UserPreferencesComponent,
        RolesManagementComponent, RoleEditorComponent,
        AboutComponent,
        NotFoundComponent,
        NotificationsViewerComponent,
        SearchBoxComponent,
        StatisticsDemoComponent, TodoDemoComponent, BannerDemoComponent,
        EqualValidator,
        LastElementDirective,
        AutofocusDirective,
        BootstrapTabDirective,
        BootstrapToggleDirective,
        BootstrapSelectDirective,
        BootstrapDatepickerDirective,
        GroupByPipe,
        HeaderComponent,
        SidebarComponent,
        createInstitute, InstituteComponent, editInstitute,
        AcadamicComponent, createAcadamic, editAcadamic,
        CRIndexComponent, CasteComponent, ReligionComponent,
        createReligion, createCaste, editCaste, editReligion,
        CourseComponent, BatchComponent, createCourse, editCourse,
        createBatch, editBatch, SyllabusComponent, AllocatedBatchTeacherComponent,
        editSyllabus, createSyllabus, editAllocateBatchTeacher, createAllocateBatchTeacher,
        UserTypeComponent, createDepartment, editDepartment, DepartmentComponent,
        createDesignation, editDesignation, DesignationComponent, createEmployee,
        EmployeeComponent, editEmployee, PrintEmployeeComponent, EmployeeAttendanceComponent,
        createLeaveCategory, LeaveCategoryComponent, createLeave, LeaveComponent, editLeaveCategory,
        createLeaveApplication, createStudentCategory, editStudentCategory, StudentCategoryComponent,
        StudentComponent, createStudent, StudentAttendanceComponent, PrintStudentComponent, GuardianComponent,
        editStudent, StudentIDCardComponent, UpdateRollNoComponent

    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
        { provide: ErrorHandler, useClass: AppErrorHandler },
        AlertService,
        ConfigurationService,
        AppTitleService,
        AppTranslationService,
        NotificationService,
        NotificationEndpoint,
        AccountService,
        AccountEndpoint,
        LocalStoreManager,
        EndpointFactory,
        InstituteService,
        AcadamicService,
        ReligionService, CasteService,
        BatchService, CourseService, AllocateBatchTeacherService,
        SyllabusService, DepartmentService, DesignationService,
        EmployeeService, DataService, EmployeeAttendanceService
        , LeaveCategoryService, LeaveService,
        StudentCategoryService, StudentService, StudentAttendanceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
