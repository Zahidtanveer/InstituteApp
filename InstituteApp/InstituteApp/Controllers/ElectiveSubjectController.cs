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
    public class ElectiveSubjectController : Controller
    {
        private IUnitOfWork _unitOfWork;

        public ElectiveSubjectController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/ElectiveSubject/Index
        [HttpGet]
        [Route("api/ElectiveSubject/Index")]
        public IEnumerable<ElectiveSubject> Index()
        {
            return _unitOfWork.Subject.GetAllElectiveSubjectData();
        }

        // GET: api/ElectiveSubject/Details/5
        [HttpGet()]
        [Route("api/ElectiveSubject/Details/{id}")]
        public ElectiveSubject Details(int id)
        {
            return _unitOfWork.Subject.GetElectiveSubjectData(id);
        }

        // POST: api/ElectiveSubject/Create
        [HttpPost]
        [Route("api/ElectiveSubject/Create")]
        public int Create([FromBody]ElectiveSubject electiveSubject)
        {
            return _unitOfWork.Subject.AddElectiveSubject(electiveSubject);
        }

        // PUT: api/ElectiveSubject/Edit
        [HttpPut()]
        [Route("api/ElectiveSubject/Edit")]
        public int Edit([FromBody]ElectiveSubject electiveSubject)
        {
            return _unitOfWork.Subject.UpdateElectiveSubject(electiveSubject);
        }

        // DELETE: api/ElectiveSubject/Delete/5
        [HttpDelete()]
        [Route("api/ElectiveSubject/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Subject.DeleteElectiveSubject(id);
        }
    }
}