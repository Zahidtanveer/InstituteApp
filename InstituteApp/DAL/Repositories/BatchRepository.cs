using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class BatchRepository: Repository<Batch>, IBatchRepository

    {

        public BatchRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public int AddBatch(Batch batch)
        {
            try
            {
                _appContext.batches.Add(batch);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Batch> GetAllBatchData()
        {
            try
            {

                var batches = _appContext.batches.Include(x=>x.course).ToList();
                return batches;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Batch GetBatchData(int id)
        {
            try
            {
                Batch batch = _appContext.batches.Find(id);
                return batch;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateBatch(Batch batch)
        {
            try
            {
                _appContext.Entry(batch).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int DeleteBatch(int id)
        {
            try
            {
                Batch batch = _appContext.batches.Find(id);
                _appContext.batches.Remove(batch);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
