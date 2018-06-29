using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface IDepartmentRepository:IRepository<Department>
    {
        int AddDepartment(Department department);
        int UpdateDepartment(Department department);
        IEnumerable<Department> GetAllDepartmentData();
        Department GetDepartmentData(int id);
        int DeleteDepartment(int id);
    }
}
