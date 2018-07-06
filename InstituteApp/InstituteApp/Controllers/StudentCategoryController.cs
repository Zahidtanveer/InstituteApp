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

    public class StudentCategoryController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public StudentCategoryController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/StudentCategory/Index
        [HttpGet]
        [Route("api/StudentCategory/Index")]
        public IEnumerable<StudentCategory> Index()
        {
            return _unitOfWork.Student.GetAllStudentCategoryData();
        }
        //GET: api/StudentCategory/Details/1
        [HttpGet()]
        [Route("api/StudentCategory/Details/{id}")]
        public StudentCategory Details(int id)
        {
            return _unitOfWork.Student.GetStudentCategoryData(id);
        }

        //POST: api/StudentCategory/Create
        [HttpPost]
        [Route("api/StudentCategory/Create")]
        public int Create([FromBody]StudentCategory studentCategory)
        {
            return _unitOfWork.Student.AddStudentCategory(studentCategory);
        }
        //PUT: api/StudentCategory/Edit
        [HttpPut()]
        [Route("api/StudentCategory/Edit")]
        public int Edit([FromBody]StudentCategory studentCategory)
        {
            return _unitOfWork.Student.UpdateStudentCategory(studentCategory);
        }
        //DELETE: api/StudentCategory/Delete/1
        [HttpDelete()]
        [Route("api/StudentCategory/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Student.DeleteStudentCategory(id);
        }
    }
}
