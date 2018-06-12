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
  
    public class InstituteController : Controller
    {
        private IUnitOfWork _unitOfWork;

        public InstituteController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        // GET: api/Institute
        [HttpGet]
        [Route("api/Institute/Index")]
        public IEnumerable<Institute> Index()
        {
            return _unitOfWork.Institute.GetAllInstituteData();
        }

        // POST: api/Institute
        [HttpPost]
        [Route("api/Institute/Create")]
        public int Create([FromBody]Institute institute)
        {
            return _unitOfWork.Institute.AddInstitute(institute);
        }

        [HttpGet]
        [Route("api/Institute/Details/{id}")]
        public Institute Details(int id)
        {
            return _unitOfWork.Institute.GetInstituteData(id);
        }
        [HttpPut]
        [Route("api/Institute/Edit")]
        public int Edit([FromBody]Institute institute)
        {
            return _unitOfWork.Institute.UpdateInstitute(institute);
        }
        [HttpDelete]
        [Route("api/Institute/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Institute.DeleteInstitute(id);
        }



    }
}
