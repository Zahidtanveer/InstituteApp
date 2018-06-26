using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface IAllocatedBatchTeacherRepository:IRepository<AllocatedBatchTeacher>
    {

        int AddAllocatedBatchTeacher(AllocatedBatchTeacher allocatedBatchTeacher);
        int UpdateAllocatedBatchTeacher(AllocatedBatchTeacher allocatedBatchTeacher);
        IEnumerable<AllocatedBatchTeacher> GetAllAllocatedBatchTeacherData();
        AllocatedBatchTeacher GetAllocatedBatchTeacherData(int id);
        int DeleteAllocatedBatchTeacher(int id);

    }
}
