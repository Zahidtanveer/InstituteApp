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
   
    public class AllocateBatchTeacherController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public AllocateBatchTeacherController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/AllocateBatchTeacher/Index
        [HttpGet]
        [Route("api/AllocateBatchTeacher/Index")]
        public IEnumerable<AllocatedBatchTeacher> Index()
        {
            return _unitOfWork.AllocatedBatchTeacher.GetAllAllocatedBatchTeacherData();

        }
        //GET: api/AllocateBatchTeacher/Details/1
        [HttpGet()]
        [Route("api/AllocateBatchTeacher/Details/{id}")]
        public AllocatedBatchTeacher Details(int id)
        {
            return _unitOfWork.AllocatedBatchTeacher.GetAllocatedBatchTeacherData(id);
        }

        //POST: api/AllocateBatchTeacher/Create
        [HttpPost]
        [Route("api/AllocateBatchTeacher/Create")]
        public int Create([FromBody]AllocatedBatchTeacher AllocateBatchTeacher)
        {
            return _unitOfWork.AllocatedBatchTeacher.AddAllocatedBatchTeacher(AllocateBatchTeacher);
        }
        //PUT: api/AllocateBatchTeacher/Edit
        [HttpPut()]
        [Route("api/AllocateBatchTeacher/Edit")]
        public int Edit([FromBody]AllocatedBatchTeacher AllocateBatchTeacher)
        {
            return _unitOfWork.AllocatedBatchTeacher.UpdateAllocatedBatchTeacher(AllocateBatchTeacher);
        }
        //DELETE: api/AllocateBatchTeacher/Delete/1
        [HttpDelete()]
        [Route("api/AllocateBatchTeacher/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.AllocatedBatchTeacher.DeleteAllocatedBatchTeacher(id);
        }
    }
}