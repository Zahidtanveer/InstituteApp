// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
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
import { UserTypeComponent } from './components/UserTypes/userType.component';
import { createDepartment } from './components/Employee/department/AddDepartment.component';
import { DepartmentComponent } from './components/Employee/department/departmant.component';
import { editDepartment } from './components/Employee/department/EditDepartment.component';
import { createDesignation } from './components/Employee/designation/AddDesignation.component';
import { DesignationComponent } from './components/Employee/designation/Designation.component';
import { editDesignation } from './components/Employee/designation/EditDesignation.component';
import { createEmployee } from './components/Employee/AddEmployee.component';
import { EmployeeComponent } from './components/Employee/employee.component';
import { editEmployee } from './components/Employee/EditEmployee.component';
import { PrintEmployeeComponent } from './components/Employee/printEmployee.component';
import { EmployeeAttendanceComponent } from './components/Employee/attendance/attendance.component';
import { LeaveCategoryComponent } from './components/Employee/leaves/leaveCategory.component';
import { createLeaveCategory } from './components/Employee/leaves/AddLeaveCategory.component';
import { createLeave } from './components/Employee/leaves/Addleave.component';
import { LeaveComponent } from './components/Employee/leaves/leave.component';
import { editLeaveCategory } from './components/Employee/leaves/EditLeaveCategory.component';
import { createLeaveApplication } from './components/Employee/leaves/leaveApplication.component';
import { editStudentCategory } from './components/Students/EditStudentCategory.component';
import { StudentCategoryComponent } from './components/Students/studentCategory.component';
import { createStudentCategory } from './components/Students/AddStudentCategory.component';
import { StudentComponent } from './components/Students/student.component';
import { createStudent } from './components/Students/AddStudent.component';
import { StudentAttendanceComponent } from './components/Students/Attendance/StudentAttendance.component';
import { PrintStudentComponent } from './components/Students/Print/print.component';
import { GuardianComponent } from './components/Students/Guardians/guardian.component';
import { editStudent } from './components/Students/EditStudent.component';
import { UpdateRollNoComponent } from './components/Students/AssignRollNo/UpdateRollNo.component';
import { StudentIDCardComponent } from './components/Students/StudentIDCard/studentIDCard.component';
import { createSubjects } from './components/Subjects/AddSubjects.component';
import { SubjectComponent } from './components/Subjects/subjects.component';
import { editSubject } from './components/Subjects/EditSubject.component';





@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", component: HomeComponent, canActivate: [AuthGuard], data: { title: "Home" } },
            { path: "login", component: LoginComponent, data: { title: "Login" } },
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
            { path: "usertype", component: UserTypeComponent, canActivate: [AuthGuard], data: { title: "User Types" } },
            { path: "add-department", component: createDepartment, canActivate: [AuthGuard], data: { title: "Add Department" } },
            { path: "department", component: DepartmentComponent, canActivate: [AuthGuard], data: { title: "Department" } },
            { path: "department/edit/:Id", component: editDepartment, canActivate: [AuthGuard], data: { title: "Department" } },
            { path: "add-designation", component: createDesignation, canActivate: [AuthGuard], data: { title: "Add Designation" } },
            { path: "designation", component: DesignationComponent, canActivate: [AuthGuard], data: { title: "Designation" } },
            { path: "designation/edit/:Id", component: editDesignation, canActivate: [AuthGuard], data: { title: "Edit Designation" } },
            { path: "add-employee", component: createEmployee, canActivate: [AuthGuard], data: { title: "Add Employee" } },
            { path: "employee", component: EmployeeComponent, canActivate: [AuthGuard], data: { title: "Employee" } },
            { path: "employee/edit/:Id", component: editEmployee, canActivate: [AuthGuard], data: { title: "Edit Employee" } },
            { path: "printemployee", component: PrintEmployeeComponent, canActivate: [AuthGuard], data: { title: "Print Employee" } },
            { path: "employeeattendace", component: EmployeeAttendanceComponent, canActivate: [AuthGuard], data: { title: "Employee Attendance" } },
            { path: "add-leavecategory", component: createLeaveCategory, canActivate: [AuthGuard], data: { title: "Add Leave Category" } },
            { path: "leavecategory", component: LeaveCategoryComponent, canActivate: [AuthGuard], data: { title: "Leave Category" } },
            { path: "leavecategory/edit/:Id", component: editLeaveCategory, canActivate: [AuthGuard], data: { title: "Edit Leave Category" } },
            { path: "add-studentcategory", component: createStudentCategory, canActivate: [AuthGuard], data: { title: "Add Student Category" } },
            { path: "studentcategory", component: StudentCategoryComponent, canActivate: [AuthGuard], data: { title: "Student Category" } },
            { path: "studentcategory/edit/:Id", component: editStudentCategory, canActivate: [AuthGuard], data: { title: "Edit Student Category" } },
            { path: "add-student", component: createStudent, canActivate: [AuthGuard], data: { title: "Add Student" } },
            { path: "students", component: StudentComponent, canActivate: [AuthGuard], data: { title: "Student" } },
            { path: "add-leave", component: createLeave, canActivate: [AuthGuard], data: { title: "Add Leave" } },
            { path: "leave", component: LeaveComponent, canActivate: [AuthGuard], data: { title: "Leave" } },
            { path: "leaveapplication", component: createLeaveApplication, canActivate: [AuthGuard], data: { title: "Leave Application" } },
            { path: "studentattendance", component: StudentAttendanceComponent, canActivate: [AuthGuard], data: { title: "Student Attendance" } },
            { path: "printstudent", component: PrintStudentComponent, canActivate: [AuthGuard], data: { title: "Print Student" } },
            { path: "guardians", component: GuardianComponent, canActivate: [AuthGuard], data: { title: "List of Guardians" } },
            { path: "student/edit/:Id", component: editStudent, canActivate: [AuthGuard], data: { title: "Edit Student" } },
            { path: "student-rollno", component: UpdateRollNoComponent, canActivate: [AuthGuard], data: { title: "Assign/Update Student Roll No" } },
            { path: "student-idcard", component: StudentIDCardComponent, canActivate: [AuthGuard], data: { title: "Student ID Card" } },
            { path: "add-subject", component: createSubjects, canActivate: [AuthGuard], data: { title: "Add Subjects" } },
            { path: "subjects", component: SubjectComponent, canActivate: [AuthGuard], data: { title: "Subjects" } },
            { path: "subject/edit/:Id", component: editSubject, canActivate: [AuthGuard], data: { title: "Edit Subject" } },
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
