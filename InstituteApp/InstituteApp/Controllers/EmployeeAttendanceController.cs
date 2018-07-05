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

    public class EmployeeAttendanceController : Controller
    {

        private IUnitOfWork _unitOfWork;
        public EmployeeAttendanceController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/EmployeeAttendance/Index
        [HttpGet]
        [Route("api/EmployeeAttendance/Index")]
        public IEnumerable<EmployeeAttendance> Index()
        {
            return _unitOfWork.Employee.DailyEmployeeAttedance();
        }
        //GET: api/EmployeeAttendance/Details/1
        [HttpGet()]
        [Route("api/EmployeeAttendance/Details/{id}")]
        public EmployeeAttendance Details(int id)
        {
            return _unitOfWork.Employee.GetEmployeeAttendanceData(id);
        }

        //POST: api/EmployeeAttendance/Create
        [HttpPost]
        [Route("api/EmployeeAttendance/Create")]
        public int Create([FromBody]EmployeeAttendance EmployeeAttendance)
        {
            return _unitOfWork.Employee.AddEmployeeAttendance(EmployeeAttendance);
        }
        //PUT: api/EmployeeAttendance/Edit
        [HttpPut()]
        [Route("api/EmployeeAttendance/Edit")]
        public int Edit([FromBody]EmployeeAttendance EmployeeAttendance)
        {
            return _unitOfWork.Employee.UpdateEmployeeAttendance(EmployeeAttendance);
        }
        //DELETE: api/EmployeeAttendance/Delete/1
        [HttpDelete()]
        [Route("api/EmployeeAttendance/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Employee.DeleteEmployeeAttendance(id);
        }
    }
}