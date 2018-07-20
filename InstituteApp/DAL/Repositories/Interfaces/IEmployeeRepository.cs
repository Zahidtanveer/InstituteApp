using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface IEmployeeRepository : IRepository<Employee>
    {

        int AddEmployee(Employee employee);
        int UpdateEmployee(Employee employee);
        IEnumerable<Employee> GetAllEmployeeData();
        Employee GetEmployeeData(int id);
        int DeleteEmployee(int id);
        IEnumerable<Employee> FilterEmployee(string department,string designation,int id);


        IEnumerable<EmployeeAttendance> DailyEmployeeAttedance();
        int AddEmployeeAttendance(EmployeeAttendance employee);
        int UpdateEmployeeAttendance(EmployeeAttendance employee);
        IEnumerable<EmployeeAttendance> GetAllEmployeeAttendanceData();
        EmployeeAttendance GetEmployeeAttendanceData(int id);
        int DeleteEmployeeAttendance(int id);
        IEnumerable<EmployeeAttendance> GetEmployeeAttendances(string department, DateTime date);
        int MarkDailyEmployeeAttedance(Dictionary<int, bool> employeeDict);
    }
}
