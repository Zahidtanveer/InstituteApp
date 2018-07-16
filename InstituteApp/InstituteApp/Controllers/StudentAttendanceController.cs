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
   
    public class StudentAttendanceController : Controller
    {


        private IUnitOfWork _unitOfWork;
        public StudentAttendanceController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/StudentAttendance/Index
        [HttpGet]
        [Route("api/StudentAttendance/Index")]
        public IEnumerable<StudentAttendance> Index(string batch,string course,DateTime date)
        {
            return _unitOfWork.Student.FilterStudentAttendance(batch,course,date);
        }

        //POST: api/StudentAttendance/Create
        [HttpPost]
        [Route("api/StudentAttendance/MarkAttendance")]
        public int MarkAttendance([FromBody]IEnumerable<Student> students)
        {
            return _unitOfWork.Student.MarkDailyStudentAttedance(students);
        }

    }
}