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
    
    public class CasteController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public CasteController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/Caste/Index
        [HttpGet]
        [Route("api/Caste/Index")]
        public IEnumerable<Caste> Index()
        {
            return _unitOfWork.Caste.GetAllCasteData();
        }
        //GET: api/Caste/Details/1
        [HttpGet()]
        [Route("api/Caste/Details/{id}")]
        public Caste Details(int id)
        {
            return _unitOfWork.Caste.GetCasteData(id);
        }

        //POST: api/Caste/Create
        [HttpPost]
        [Route("api/Caste/Create")]
        public int Create([FromBody]Caste caste)
        {
            return _unitOfWork.Caste.AddCaste(caste);
        }
        //PUT: api/Caste/Edit
        [HttpPut()]
        [Route("api/Caste/Edit")]
        public int Edit([FromBody]Caste caste)
        {
            return _unitOfWork.Caste.UpdateCaste(caste);
        }
        //DELETE: api/Caste/Delete/1
        [HttpDelete()]
        [Route("api/Caste/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Caste.DeleteCaste(id);
        }

    }
}