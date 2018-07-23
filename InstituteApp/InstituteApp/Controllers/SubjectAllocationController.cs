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

    public class SubjectAllocationController : Controller
    {
        private IUnitOfWork _unitOfWork;

        public SubjectAllocationController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/SubjectAllocation
        [HttpGet]
        [Route("api/SubjectAllocation/Index")]
        public IEnumerable<SubjectAllocation> Index()
        {
            return _unitOfWork.Subject.GetAllSubjectAllocationData();
        }

        // GET: api/SubjectAllocation/5
        [HttpGet()]
        [Route("api/SubjectAllocation/Details/{id}")]
        public SubjectAllocation Details(int id)
        {
            return _unitOfWork.Subject.GetSubjectAllocationData(id);
        }

        // POST: api/SubjectAllocation
        [HttpPost]
        [Route("api/SubjectAllocation/Create")]
        public int Create([FromBody]SubjectAllocation SubjectAllocation)
        {
            return _unitOfWork.Subject.AddSubjectAllocation(SubjectAllocation);
        }

        // PUT: api/SubjectAllocation/5
        [HttpPut()]
        [Route("api/SubjectAllocation/Edit")]
        public int Edit([FromBody]SubjectAllocation SubjectAllocation)
        {
            return _unitOfWork.Subject.UpdateSubjectAllocation(SubjectAllocation);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete()]
        [Route("api/SubjectAllocation/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Subject.DeleteSubjectAllocation(id);
        }
    }
}