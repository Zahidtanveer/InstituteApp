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
    public class AssignSubjectController : Controller
    {
        private IUnitOfWork _unitOfWork;

        public AssignSubjectController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/AssignSubject
        [HttpGet]
        [Route("api/AssignSubject/Index")]
        public IEnumerable<AssignedSubjects> Index()
        {
            return _unitOfWork.Subject.GetAllAssignSubjectData();
        }

        // GET: api/AssignSubject/5
        [HttpGet()]
        [Route("api/AssignSubject/Details/{id}")]
        public AssignedSubjects Details(int id)
        {
            return _unitOfWork.Subject.GetAssignSubjectData(id);
        }

        // POST: api/AssignSubject
        [HttpPost]
        [Route("api/AssignSubject/Create")]
        public int Create([FromBody]AssignedSubjects AssignSubject)
        {
            return _unitOfWork.Subject.AddAssignSubject(AssignSubject);
        }

        // PUT: api/AssignSubject/5
        [HttpPut()]
        [Route("api/AssignSubject/Edit")]
        public int Edit([FromBody]AssignedSubjects AssignSubject)
        {
            return _unitOfWork.Subject.UpdateAssignSubject(AssignSubject);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete()]
        [Route("api/AssignSubject/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Subject.DeleteAssignSubject(id);
        }
    }
}