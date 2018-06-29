using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InstituteApp.Controllers
{
   
    public class DepartmentController : Controller
    {
        private IUnitOfWork _unitOfWork;

        public DepartmentController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Department
        [HttpGet]
        [Route("api/Department/Index")]
        public IEnumerable<Department> Index()
        {
            return _unitOfWork.Department.GetAllDepartmentData();
        }

        // GET: api/Department/5
        [HttpGet()]
        [Route("api/Department/Details/{id}")]
        public Department Details(int id)
        {
            return _unitOfWork.Department.GetDepartmentData(id);
        }

        // POST: api/Department
        [HttpPost]
        [Route("api/Department/Create")]
        public int Create([FromBody]Department department)
        {
            return _unitOfWork.Department.AddDepartment(department);
        }

        // PUT: api/Department/5
        [HttpPut()]
        [Route("api/Department/Edit")]
        public int Edit([FromBody]Department department)
        {
            return _unitOfWork.Department.UpdateDepartment(department);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete()]
        [Route("api/Department/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Department.DeleteDepartment(id);
        }
    }
}