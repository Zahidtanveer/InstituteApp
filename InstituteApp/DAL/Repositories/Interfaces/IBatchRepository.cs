using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface IBatchRepository: IRepository<Batch>
    {
        int AddBatch(Batch batch);
        int UpdateBatch(Batch batch);
        IEnumerable<Batch> GetAllBatchData();
        Batch GetBatchData(int id);
        int DeleteBatch(int id);
    }
}
