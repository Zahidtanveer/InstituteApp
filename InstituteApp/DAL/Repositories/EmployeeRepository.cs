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

        #region Employee
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
                    EmployeeId = EmployeeID,


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

                var employees = _appContext.employees
                    .Include(c => c.contactDetails)
                    .Include(p => p.personalDetails)
                    .Include(ea => ea.employeeAttendances).ToList();
                return employees;
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
                Employee employee = _appContext.employees
                       .Where(e => e.Id == id)
                       .Include(x => x.personalDetails)
                       .Include(c => c.contactDetails).FirstOrDefault();

                return employee;
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
                int EmployeeID = employee.Id;
                var dbcontactDetail = _appContext.contactDetails.SingleOrDefault(x => x.EmployeeId == EmployeeID);
                var dbpersonalDetail = _appContext.personalDetails.SingleOrDefault(x => x.EmployeeId == EmployeeID);

                var dEmployee = new Employee
                {
                    EmployeeCode = employee.EmployeeCode,
                    Qualification = employee.Qualification,
                    JoiningDate = employee.JoiningDate,
                    Department = employee.Department,
                    Designation = employee.Designation,
                    TotalExperience = employee.TotalExperience,
                };
                dbcontactDetail.PresentAddress = employee.contactDetails.PresentAddress;
                dbcontactDetail.PermanentAddress = employee.contactDetails.PermanentAddress;
                dbcontactDetail.City = employee.contactDetails.City;
                dbcontactDetail.PostalCode = employee.contactDetails.PostalCode;
                dbcontactDetail.Country = employee.contactDetails.Country;
                dbcontactDetail.State = employee.contactDetails.State;
                dbcontactDetail.Phone = employee.contactDetails.Phone;
                dbcontactDetail.Mobile = employee.contactDetails.Mobile;
                dbcontactDetail.Email = employee.contactDetails.Email;
                dbcontactDetail.EmployeeId = EmployeeID;
                dbpersonalDetail.FirstName = employee.personalDetails.FirstName;
                dbpersonalDetail.MiddleName = employee.personalDetails.MiddleName;
                dbpersonalDetail.LastName = employee.personalDetails.LastName;
                dbpersonalDetail.DateOfBirth = employee.personalDetails.DateOfBirth;
                dbpersonalDetail.Gender = employee.personalDetails.Gender;
                dbpersonalDetail.CNIC = employee.personalDetails.CNIC;
                dbpersonalDetail.EmployeeId = EmployeeID;

                _appContext.Entry(employee).State = EntityState.Modified;
                _appContext.SaveChanges();
                _appContext.Entry(dbcontactDetail).State = EntityState.Modified;
                _appContext.SaveChanges();
                _appContext.Entry(dbpersonalDetail).State = EntityState.Modified;
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
        public IEnumerable<Employee> FilterEmployee(string department, string designation, int id)
        {
            var employees = _appContext.employees
                   .Include(c => c.contactDetails)
                   .Include(p => p.personalDetails)
                   .Include(ea => ea.employeeAttendances).ToList();
            
            if (department !=null && designation !=null && id > 0)
            {
                employees=employees.Where(x => (x.Department == department) && (x.Designation == designation) && (x.Id == id)).ToList();
                return employees;
            }
            else if (designation != null && department != null && id <= 0)
            {
                employees = employees.Where(x => (x.Designation == designation) && (x.Department == department)).ToList();
                return employees;
            }
            else if(department != null  && id <=0 )
            {
                employees = employees.Where(x => x.Department == department).ToList();
                return employees;
            }
            else if(designation!=null && id <= 0)
            {
                employees = employees.Where(x => x.Designation== designation).ToList();
                return employees;
            }
            else if(department != null && id > 0)
            {
                employees = employees.Where(x => x.Department == department && (x.Id == id)).ToList();
                return employees;
            }
            else if (designation != null && id > 0)
            {
                employees = employees.Where(x => (x.Designation == designation)&&(x.Id==id)).ToList();
                return employees;
            }
          
            return null;
        }
        #endregion



        #region Employee Attendance
        public int AddEmployeeAttendance(EmployeeAttendance EmployeeAttendance)
        {
            try
            {
                _appContext.employeeAttendances.Add(EmployeeAttendance);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public IEnumerable<EmployeeAttendance> GetAllEmployeeAttendanceData()
        {
            try
            {

                var employeeAttendances = _appContext.employeeAttendances.ToList();
                return employeeAttendances;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public EmployeeAttendance GetEmployeeAttendanceData(int id)
        {
            try
            {
                EmployeeAttendance EmployeeAttendance = _appContext.employeeAttendances.Find(id);
                return EmployeeAttendance;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int UpdateEmployeeAttendance(EmployeeAttendance EmployeeAttendance)
        {
            try
            {
                _appContext.Entry(EmployeeAttendance).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int DeleteEmployeeAttendance(int id)
        {
            try
            {
                EmployeeAttendance EmployeeAttendance = _appContext.employeeAttendances.Find(id);
                _appContext.employeeAttendances.Remove(EmployeeAttendance);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public IEnumerable<EmployeeAttendance> DailyEmployeeAttedance()
        {
            var employee = _appContext.employees.ToList();

            foreach (var emp in employee)
            {
                var attendanceEmployee = new EmployeeAttendance
                {
                    Year = DateTime.Now.Year.ToString(),
                    Day = DateTime.Now.Day.ToString(),
                    Month = DateTime.Now.Month.ToString(),
                    AttendanceDate = DateTime.Today,
                    IsPresent = false,
                    EmployeeId = emp.Id
                };
                var dbEmployeeAttendance = _appContext.employeeAttendances.Where(x => (x.AttendanceDate == DateTime.Today) && (x.EmployeeId == emp.Id));
                if (dbEmployeeAttendance.Count() == 0)
                {
                    _appContext.employeeAttendances.Add(attendanceEmployee);
                    _appContext.SaveChanges();
                }
            }

            var employeeAttendace = _appContext.employeeAttendances
                .Include(e => e.employee).ToList();
            return employeeAttendace;
        }
        #endregion




    }
}
