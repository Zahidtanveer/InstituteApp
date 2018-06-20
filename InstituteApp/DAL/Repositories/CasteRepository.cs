using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class CasteRepository : Repository<Caste>, ICasteRepository
    {
        public CasteRepository(ApplicationDbContext context) : base(context) { }

        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public int AddCaste(Caste caste)
        {
            try
            {
                _appContext.Castes.Add(caste);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Caste> GetAllCasteData()
        {
            try
            {
                return _appContext.Castes.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Caste GetCasteData(int id)
        {
            try
            {
                Caste caste = _appContext.Castes.Find(id);
                return caste;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateCaste(Caste caste)
        {
            try
            {
                _appContext.Entry(caste).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int DeleteCaste(int id)
        {
            try
            {
                Caste caste = _appContext.Castes.Find(id);
                _appContext.Castes.Remove(caste);
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
