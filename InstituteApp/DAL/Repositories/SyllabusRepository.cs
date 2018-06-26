using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class SyllabusRepository: Repository<Syllabus>, ISyllabusRepository
    {
        public SyllabusRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public int AddSyllabus(Syllabus syllabus)
        {
            try
            {
                _appContext.syllabus.Add(syllabus);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public IEnumerable<Syllabus> GetAllSyllabusData()
        {
            try
            {

                return _appContext.syllabus.ToList();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Syllabus GetSyllabusData(int id)
        {
            try
            {
                Syllabus Syllabus = _appContext.syllabus.Find(id);
                return Syllabus;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateSyllabus(Syllabus syllabus)
        {
            try
            {
                _appContext.Entry(syllabus).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int DeleteSyllabus(int id)
        {
            try
            {
                Syllabus syl = _appContext.syllabus.Find(id);
                _appContext.syllabus.Remove(syl);
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
