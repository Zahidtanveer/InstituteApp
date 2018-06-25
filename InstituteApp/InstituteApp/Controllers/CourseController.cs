using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DAL.Models;
using InstituteApp.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InstituteApp.Controllers
{
   
    public class CourseController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public CourseController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/Course/Index
        [HttpGet]
        [Route("api/Course/Index")]
        public IEnumerable<Course> Index()
        {
          return _unitOfWork.Course.GetAllCourseData();
           
        }
        //GET: api/Course/Details/1
        [HttpGet()]
        [Route("api/Course/Details/{id}")]
        public Course Details(int id)
        {
            return _unitOfWork.Course.GetCourseData(id);
        }

        //POST: api/Course/Create
        [HttpPost]
        [Route("api/Course/Create")]
        public int Create([FromBody]Course course)
        {
            return _unitOfWork.Course.AddCourse(course);
        }
        //PUT: api/Course/Edit
        [HttpPut()]
        [Route("api/Course/Edit")]
        public int Edit([FromBody]Course course)
        {
            return _unitOfWork.Course.UpdateCourse(course);
        }
        //DELETE: api/Course/Delete/1
        [HttpDelete()]
        [Route("api/Course/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Course.DeleteCourse(id);
        }

    }
}