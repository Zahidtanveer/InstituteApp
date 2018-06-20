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
    
    public class ReligionController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public ReligionController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/Religion/Index
        [HttpGet]
        [Route("api/Religion/Index")]
        public IEnumerable<Religion> Index()
        {
            return _unitOfWork.Religion.GetAllReligionData();
        }
        
        //GET: api/Religion/Details/1
        [HttpGet()]
        [Route("api/Religion/Details/{id}")]
        public Religion Details(int id)
        {
            return _unitOfWork.Religion.GetReligionData(id);
        }
        
        //POST: api/Religion/Create
        [HttpPost]
        [Route("api/Religion/Create")]
        public int Create([FromBody]Religion religion)
        {
            return _unitOfWork.Religion.AddReligion(religion);
        }
        
        //PUT: api/Religion/Edit
        [HttpPut()]
        [Route("api/Religion/Edit")]
        public int Edit([FromBody]Religion religion)
        {
            return _unitOfWork.Religion.UpdateReligion(religion);
        }
        
        //DELETE: api/Religion/Delete/1
        [HttpDelete()]
        [Route("api/Religion/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Religion.DeleteReligion(id);
        }

    }
}