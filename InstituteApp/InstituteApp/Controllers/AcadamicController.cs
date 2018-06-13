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

    public class AcadamicController : Controller
    {
        private IUnitOfWork _unitOfWork;

        public AcadamicController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/Acadamic
        [HttpGet]
        [Route("api/Acadamic/Index")]
        public IEnumerable<Acadamic> Index()
        {
            return _unitOfWork.Acadamics.GetAllAcadamicData();
        }

        // GET: api/Acadamic/5
        [HttpGet()]
        [Route("api/Acadamic/Details/{id}")]
        public Acadamic Details(int id)
        {
            return _unitOfWork.Acadamics.GetAcadamicData(id);
        }
        
        // POST: api/Acadamic
        [HttpPost]
        [Route("api/Acadamic/Create")]
        public int Create([FromBody]Acadamic acadamic)
        {
           return _unitOfWork.Acadamics.AddAcadamic(acadamic);
        }
        
        // PUT: api/Acadamic/5
        [HttpPut()]
        [Route("api/Acadamic/Edit")]
        public int Edit([FromBody]Acadamic acadamic)
        {
            return _unitOfWork.Acadamics.UpdateAcadamic(acadamic);
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete()]
        [Route("api/Acadamic/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Acadamics.DeleteAcadamic(id);
        }
    }
}
