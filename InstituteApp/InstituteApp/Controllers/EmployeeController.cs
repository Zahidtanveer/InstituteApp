using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
using InstituteApp.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InstituteApp.Controllers
{

    public class EmployeeController : Controller
    {

        private IUnitOfWork _unitOfWork;
        public EmployeeController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        //GET: api/Employee/Index
        [HttpGet]
        [Route("api/Employee/Index")]
        public IEnumerable<Employee> Index()
        {
            return _unitOfWork.Employee.GetAllEmployeeData();
        }
        //GET: api/Employee/Details/1
        [HttpGet()]
        [Route("api/Employee/Details/{id}")]
        public EmployeeViewModel Details(int id)
        {
            var employee = _unitOfWork.Employee.GetEmployeeData(id);
            var employeeVm = new EmployeeViewModel
            {
                Id = employee.Id,
                EmployeeCode = employee.EmployeeCode,
                JoiningDate = employee.JoiningDate,
                Qualification = employee.Qualification,
                Department = employee.Department,
                Designation = employee.Designation,
                TotalExperience = employee.TotalExperience,

                personalDetails_EmployeeId=employee.personalDetails.EmployeeId,
                personalDetails_FirstName = employee.personalDetails.FirstName,
                personalDetails_MiddleName = employee.personalDetails.MiddleName,
                personalDetails_LastName = employee.personalDetails.LastName,
                personalDetails_DateOfBirth = employee.personalDetails.DateOfBirth,
                personalDetails_Gender = employee.personalDetails.Gender,
                personalDetails_CNIC = employee.personalDetails.CNIC,

                contactDetails_PresentAddress = employee.contactDetails.PresentAddress,
                contactDetails_PermanentAddress = employee.contactDetails.PermanentAddress,
                contactDetails_City = employee.contactDetails.City,
                contactDetails_PostalCode = employee.contactDetails.PostalCode,
                contactDetails_Country=employee.contactDetails.Country,
                contactDetails_State = employee.contactDetails.State,
                contactDetails_Phone = employee.contactDetails.Phone,
                contactDetails_Mobile = employee.contactDetails.Mobile,
                contactDetails_Email = employee.contactDetails.Email

            };


            return employeeVm;
        }

        //POST: api/Employee/Create
        [HttpPost]
        [Route("api/Employee/Create")]
        public int Create([FromBody]EmployeeViewModel EmployeeVm)
        {


            var employee = new Employee
            {
                
                EmployeeCode = EmployeeVm.EmployeeCode,
                JoiningDate = EmployeeVm.JoiningDate,
                Department = EmployeeVm.Department,
                Designation = EmployeeVm.Designation,
                Qualification = EmployeeVm.Qualification,
                TotalExperience = EmployeeVm.TotalExperience,

                personalDetails = new PersonalDetails
                {
                    FirstName = EmployeeVm.personalDetails_FirstName,
                    MiddleName = EmployeeVm.personalDetails_MiddleName,
                    LastName = EmployeeVm.personalDetails_LastName,
                    DateOfBirth = EmployeeVm.personalDetails_DateOfBirth,
                    Gender = EmployeeVm.personalDetails_Gender,
                    CNIC = EmployeeVm.personalDetails_CNIC
                }
               ,
                contactDetails = new ContactDetails
                {

                    PresentAddress = EmployeeVm.contactDetails_PresentAddress,
                    PermanentAddress = EmployeeVm.contactDetails_PermanentAddress,
                    City = EmployeeVm.contactDetails_City,
                    PostalCode = EmployeeVm.contactDetails_PostalCode,
                    Country = EmployeeVm.contactDetails_Country,
                    State = EmployeeVm.contactDetails_State,
                    Phone = EmployeeVm.contactDetails_Phone,
                    Mobile = EmployeeVm.contactDetails_Mobile,
                    Email = EmployeeVm.contactDetails_Email
                }


            };
            return _unitOfWork.Employee.AddEmployee(employee);

        }
        //PUT: api/Employee/Edit
        [HttpPut()]
        [Route("api/Employee/Edit")]
        public int Edit([FromBody]EmployeeViewModel EmployeeVm)
        {
            var employee = new Employee
            {
                Id = EmployeeVm.Id,
                EmployeeCode = EmployeeVm.EmployeeCode,
                JoiningDate = EmployeeVm.JoiningDate,
                Department = EmployeeVm.Department,
                Designation = EmployeeVm.Designation,
                Qualification = EmployeeVm.Qualification,
                TotalExperience = EmployeeVm.TotalExperience,

                personalDetails = new PersonalDetails
                {
                    FirstName = EmployeeVm.personalDetails_FirstName,
                    MiddleName = EmployeeVm.personalDetails_MiddleName,
                    LastName = EmployeeVm.personalDetails_LastName,
                    DateOfBirth = EmployeeVm.personalDetails_DateOfBirth,
                    Gender = EmployeeVm.personalDetails_Gender,
                    CNIC = EmployeeVm.personalDetails_CNIC
                }
               ,
                contactDetails = new ContactDetails
                {

                    PresentAddress = EmployeeVm.contactDetails_PresentAddress,
                    PermanentAddress = EmployeeVm.contactDetails_PermanentAddress,
                    City = EmployeeVm.contactDetails_City,
                    PostalCode = EmployeeVm.contactDetails_PostalCode,
                    Country = EmployeeVm.contactDetails_Country,
                    State = EmployeeVm.contactDetails_State,
                    Phone = EmployeeVm.contactDetails_Phone,
                    Mobile = EmployeeVm.contactDetails_Mobile,
                    Email = EmployeeVm.contactDetails_Email
                }
            };
            return _unitOfWork.Employee.UpdateEmployee(employee);
        }
        //DELETE: api/Employee/Delete/1
        [HttpDelete()]
        [Route("api/Employee/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Employee.DeleteEmployee(id);
        }
        [HttpGet]
        [Route("api/Employee/FilterEmployees")]
        public IEnumerable<Employee> FilterEmployees(string dep,string des,int id)

        {
            return _unitOfWork.Employee.FilterEmployee(dep,des,id);
        }


    }
}