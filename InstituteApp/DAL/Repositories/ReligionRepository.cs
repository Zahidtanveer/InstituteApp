using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class ReligionRepository : Repository<Religion>, IReligionRepository
    {
        public ReligionRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public int AddReligion(Religion religion)
        {
            try
            {
                _appContext.Religions.Add(religion);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Religion> GetAllReligionData()
        {
            try
            {
             return _appContext.Religions.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Religion GetReligionData(int id)
        {
            try
            {
                Religion religion = _appContext.Religions.Find(id);
                return religion;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateReligion(Religion religion)
        {

            try
            {
                _appContext.Entry(religion).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int DeleteReligion(int id)
        {
            try
            {
                Religion rel = _appContext.Religions.Find(id);
                _appContext.Religions.Remove(rel);
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
