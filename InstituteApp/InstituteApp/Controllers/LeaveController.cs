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

    public class LeaveController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public LeaveController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/Leave/Index
        [HttpGet]
        [Route("api/Leave/Index")]
        public IEnumerable<Leave> Index()
        {
            return _unitOfWork.Leave.GetAllLeaveData();
        }
        //GET: api/Leave/Details/1
        [HttpGet()]
        [Route("api/Leave/Details/{id}")]
        public Leave Details(int id)
        {
            return _unitOfWork.Leave.GetLeaveData(id);
        }

        //POST: api/Leave/Create
        [HttpPost]
        [Route("api/Leave/Create")]
        public int Create([FromBody]Leave Leave)
        {
            return _unitOfWork.Leave.AddLeave(Leave);
        }
        //PUT: api/Leave/Edit
        [HttpPut()]
        [Route("api/Leave/Edit")]
        public int Edit([FromBody]Leave Leave)
        {
            return _unitOfWork.Leave.UpdateLeave(Leave);
        }
        //DELETE: api/Leave/Delete/1
        [HttpDelete()]
        [Route("api/Leave/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Leave.DeleteLeave(id);
        }
    }
}