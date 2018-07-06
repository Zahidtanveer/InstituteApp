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
   
    public class StudentController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public StudentController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/Student/Index
        [HttpGet]
        [Route("api/Student/Index")]
        public IEnumerable<Student> Index()
        {
            return _unitOfWork.Student.GetAllStudentData();
        }
        //GET: api/Student/Details/1
        [HttpGet()]
        [Route("api/Student/Details/{id}")]
        public Student Details(int id)
        {
            return _unitOfWork.Student.GetStudentData(id);
        }

        //POST: api/Student/Create
        [HttpPost]
        [Route("api/Student/Create")]
        public int Create([FromBody]StudentViewModel StudentVM)
        {
            var Student = new Student
            {
            };
            return _unitOfWork.Student.AddStudent(Student);
        }
        //PUT: api/Student/Edit
        [HttpPut()]
        [Route("api/Student/Edit")]
        public int Edit([FromBody]Student Student)
        {
            return _unitOfWork.Student.UpdateStudent(Student);
        }
        //DELETE: api/Student/Delete/1
        [HttpDelete()]
        [Route("api/Student/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Student.DeleteStudent(id);
        }
    }
}