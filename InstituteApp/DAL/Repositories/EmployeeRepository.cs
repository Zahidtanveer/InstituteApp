using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class EmployeeRepository : Repository<Employee>, IEmployeeRepository
    {

        public EmployeeRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;


        public int AddEmployee(Employee employee)
        {
            try
            {
                var dEmployee = new Employee
                {
                    EmployeeCode = employee.EmployeeCode,
                    Qualification = employee.Qualification,
                    JoiningDate = employee.JoiningDate,
                    Department = employee.Department,
                    Designation = employee.Designation,
                    TotalExperience = employee.TotalExperience
                };
                
                _appContext.employees.Add(dEmployee);
                _appContext.SaveChanges();

                int EmployeeID = dEmployee.Id;
                var dpersonalDetail = new PersonalDetails
                {
                    FirstName = employee.personalDetails.FirstName,
                    MiddleName = employee.personalDetails.MiddleName,
                    LastName = employee.personalDetails.LastName,
                    DateOfBirth = employee.personalDetails.DateOfBirth,
                    Gender = employee.personalDetails.Gender,
                    CNIC = employee.personalDetails.CNIC,
                    EmployeeId = EmployeeID,
                   
                    

                };
                _appContext.personalDetails.Add(dpersonalDetail);
                _appContext.SaveChanges();
                var dcontactDetail = new ContactDetails
                {

                    PresentAddress = employee.contactDetails.PresentAddress,
                    PermanentAddress = employee.contactDetails.PermanentAddress,
                    City = employee.contactDetails.City,
                    PostalCode = employee.contactDetails.PostalCode,
                    Country = employee.contactDetails.Country,
                    State = employee.contactDetails.State,
                    Phone = employee.contactDetails.Phone,
                    Mobile = employee.contactDetails.Mobile,
                    Email = employee.contactDetails.Email,
                    EmployeeId=EmployeeID,
                                      

                };
                _appContext.contactDetails.Add(dcontactDetail);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Employee> GetAllEmployeeData()
        {
            try
            {

                var Employeees = _appContext.employees
                    .Include(c => c.contactDetails)
                    .Include(p=>p.personalDetails)
                    .Include(ea=>ea.employeeAttendances).ToList();
                return Employeees;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Employee GetEmployeeData(int id)
        {
            try
            {
                Employee Employee = _appContext.employees.Find(id);
                return Employee;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateEmployee(Employee employee)
        {
            try
            {
                _appContext.Entry(employee).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int DeleteEmployee(int id)
        {
            try
            {
                Employee Employee = _appContext.employees.Find(id);
                _appContext.employees.Remove(Employee);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
