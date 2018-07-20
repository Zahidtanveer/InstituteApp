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

    public class SubjectController : Controller
    {
        private IUnitOfWork _unitOfWork;

        public SubjectController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Subject
        [HttpGet]
        [Route("api/Subject/Index")]
        public IEnumerable<Subjects> Index()
        {
            return _unitOfWork.Subject.GetAllSubjectData();
        }

        // GET: api/Subject/5
        [HttpGet()]
        [Route("api/Subject/Details/{id}")]
        public Subjects Details(int id)
        {
            return _unitOfWork.Subject.GetSubjectData(id);
        }

        // POST: api/Subject
        [HttpPost]
        [Route("api/Subject/Create")]
        public int Create([FromBody]Subjects Subject)
        {
            return _unitOfWork.Subject.AddSubject(Subject);
        }

        // PUT: api/Subject/5
        [HttpPut()]
        [Route("api/Subject/Edit")]
        public int Edit([FromBody]Subjects Subject)
        {
            return _unitOfWork.Subject.UpdateSubject(Subject);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete()]
        [Route("api/Subject/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Subject.DeleteSubject(id);
        }



    }

}