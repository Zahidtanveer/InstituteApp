using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class InstituteRepository : Repository<Institute>, IInstituteRepository
    {
        public InstituteRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public int AddInstitute(Institute institute)
        {
            try
            {
                institute.CreatedDate = DateTime.UtcNow;
                institute.UpdatedDate = DateTime.UtcNow;
                _appContext.Institutes.Add(institute);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public IEnumerable<Institute> GetAllInstituteData()
        {
            try
            {
                
                return _appContext.Institutes.ToList();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Institute GetInstituteData(int id)
        {
            try
            {
                Institute institute = _appContext.Institutes.Find(id);
                return institute;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateInstitute(Institute institute)
        {
            try
            {
                _appContext.Entry(institute).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int DeleteInstitute(int id)
        {
            try
            {
                Institute ins = _appContext.Institutes.Find(id);
                _appContext.Institutes.Remove(ins);
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
