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
   
    public class SyllabusController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public SyllabusController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/Syllabus/Index
        [HttpGet]
        [Route("api/Syllabus/Index")]
        public IEnumerable<Syllabus> Index()
        {
            return _unitOfWork.Syllabus.GetAllSyllabusData();

        }
        //GET: api/Syllabus/Details/1
        [HttpGet()]
        [Route("api/Syllabus/Details/{id}")]
        public Syllabus Details(int id)
        {
            return _unitOfWork.Syllabus.GetSyllabusData(id);
        }

        //POST: api/Syllabus/Create
        [HttpPost]
        [Route("api/Syllabus/Create")]
        public int Create([FromBody]Syllabus syllabus)
        {
            return _unitOfWork.Syllabus.AddSyllabus(syllabus);
        }
        //PUT: api/Syllabus/Edit
        [HttpPut()]
        [Route("api/Syllabus/Edit")]
        public int Edit([FromBody]Syllabus syllabus)
        {
            return _unitOfWork.Syllabus.UpdateSyllabus(syllabus);
        }
        //DELETE: api/Syllabus/Delete/1
        [HttpDelete()]
        [Route("api/Syllabus/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Syllabus.DeleteSyllabus(id);
        }
    }
}