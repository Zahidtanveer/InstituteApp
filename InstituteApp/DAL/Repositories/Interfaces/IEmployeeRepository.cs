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
    }
}
