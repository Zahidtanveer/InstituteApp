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
    public class DesignationController : Controller
    {
        private IUnitOfWork _unitOfWork;

        public DesignationController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Designation
        [HttpGet]
        [Route("api/Designation/Index")]
        public IEnumerable<Designation> Index()
        {
            return _unitOfWork.Designation.GetAllDesignationData();
        }

        // GET: api/Designation/5
        [HttpGet()]
        [Route("api/Designation/Details/{id}")]
        public Designation Details(int id)
        {
            return _unitOfWork.Designation.GetDesignationData(id);
        }

        // POST: api/Designation
        [HttpPost]
        [Route("api/Designation/Create")]
        public int Create([FromBody]Designation designation)
        {
            return _unitOfWork.Designation.AddDesignation(designation);
        }

        // PUT: api/Designation/5
        [HttpPut()]
        [Route("api/Designation/Edit")]
        public int Edit([FromBody]Designation designation)
        {
            return _unitOfWork.Designation.UpdateDesignation(designation);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete()]
        [Route("api/Designation/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Designation.DeleteDesignation(id);
        }
    }
}