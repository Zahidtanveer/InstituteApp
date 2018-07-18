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
   
    public class BatchController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public BatchController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/Batch/Index
        [HttpGet]
        [Route("api/Batch/Index")]
        public IEnumerable<Batch> Index()
        {
            return _unitOfWork.Batch.GetAllBatchData();
        }
        //GET: api/Batch/Details/1
        [HttpGet()]
        [Route("api/Batch/Details/{id}")]
        public Batch Details(int id)
        {
            var batch = _unitOfWork.Batch.GetBatchData(id);
            string newDate = batch.SatrtDate.ToShortDateString();
            batch.SatrtDate = Convert.ToDateTime(newDate);
            string newDate1 = batch.EndDate.ToShortDateString();
            batch.EndDate = Convert.ToDateTime(newDate1);
            return batch;
        }

        //POST: api/Batch/Create
        [HttpPost]
        [Route("api/Batch/Create")]
        public int Create([FromBody]Batch batch)
        {
            return _unitOfWork.Batch.AddBatch(batch);
        }
        //PUT: api/Batch/Edit
        [HttpPut()]
        [Route("api/Batch/Edit")]
        public int Edit([FromBody]Batch batch)
        {
            string newDate = batch.SatrtDate.ToShortDateString();
            batch.SatrtDate = Convert.ToDateTime(newDate);
            string newDate1 = batch.EndDate.ToShortDateString();
            batch.EndDate = Convert.ToDateTime(newDate1);
            return _unitOfWork.Batch.UpdateBatch(batch);
        }
        //DELETE: api/Batch/Delete/1
        [HttpDelete()]
        [Route("api/Batch/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Batch.DeleteBatch(id);
        }

    }
}