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
  
    public class LeaveCategoryController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public LeaveCategoryController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/LeaveCategory/Index
        [HttpGet]
        [Route("api/LeaveCategory/Index")]
        public IEnumerable<LeaveCategory> Index()
        {
            return _unitOfWork.Leave.GetAllLeaveCategoryData();
        }
        //GET: api/LeaveCategory/Details/1
        [HttpGet()]
        [Route("api/LeaveCategory/Details/{id}")]
        public LeaveCategory Details(int id)
        {
            return _unitOfWork.Leave.GetLeaveCategoryData(id);
        }

        //POST: api/LeaveCategory/Create
        [HttpPost]
        [Route("api/LeaveCategory/Create")]
        public int Create([FromBody]LeaveCategory LeaveCategory)
        {
            return _unitOfWork.Leave.AddLeaveCategory(LeaveCategory);
        }
        //PUT: api/LeaveCategory/Edit
        [HttpPut()]
        [Route("api/LeaveCategory/Edit")]
        public int Edit([FromBody]LeaveCategory LeaveCategory)
        {
            return _unitOfWork.Leave.UpdateLeaveCategory(LeaveCategory);
        }
        //DELETE: api/LeaveCategory/Delete/1
        [HttpDelete()]
        [Route("api/LeaveCategory/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Leave.DeleteLeaveCategory(id);
        }
    }
}