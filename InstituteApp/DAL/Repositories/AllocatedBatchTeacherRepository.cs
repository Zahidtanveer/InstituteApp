using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class AllocatedBatchTeacherRepository: Repository<AllocatedBatchTeacher>, IAllocatedBatchTeacherRepository
    {
        public AllocatedBatchTeacherRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public int AddAllocatedBatchTeacher(AllocatedBatchTeacher allocatedBatchTeacher)
        {
            try
            {
                _appContext.allocatedBatchTeachers.Add(allocatedBatchTeacher);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public IEnumerable<AllocatedBatchTeacher> GetAllAllocatedBatchTeacherData()
        {
            try
            {

                return _appContext.allocatedBatchTeachers
                       .Include(x=>x.course)
                       .Include(x=>x.batches).ToList();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public AllocatedBatchTeacher GetAllocatedBatchTeacherData(int id)
        {
            try
            {
                AllocatedBatchTeacher AllocatedBatchTeacher = _appContext.allocatedBatchTeachers.Find(id);
                return AllocatedBatchTeacher;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateAllocatedBatchTeacher(AllocatedBatchTeacher allocatedBatchTeacher)
        {
            try
            {
                _appContext.Entry(allocatedBatchTeacher).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int DeleteAllocatedBatchTeacher(int id)
        {
            try
            {
                AllocatedBatchTeacher teacher = _appContext.allocatedBatchTeachers.Find(id);
                _appContext.allocatedBatchTeachers.Remove(teacher);
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
