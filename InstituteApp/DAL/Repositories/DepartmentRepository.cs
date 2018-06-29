using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class DepartmentRepository: Repository<Department>, IDepartmentRepository
    {
        public DepartmentRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
        public int AddDepartment(Department department)
        {
            try
            {
                _appContext.departments.Add(department);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Department> GetAllDepartmentData()
        {
            try
            {
                return _appContext.departments.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Department GetDepartmentData(int id)
        {
            try
            {
                Department department = _appContext.departments.Find(id);
                return department;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateDepartment(Department department)
        {

            try
            {
                _appContext.Entry(department).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int DeleteDepartment(int id)
        {
            try
            {
                Department dep = _appContext.departments.Find(id);
                _appContext.departments.Remove(dep);
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
