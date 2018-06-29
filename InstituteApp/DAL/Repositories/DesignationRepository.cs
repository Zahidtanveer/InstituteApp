using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class DesignationRepository: Repository<Designation>, IDesignationRepository
    {
        public DesignationRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
        public int AddDesignation(Designation designation)
        {
            try
            {
                _appContext.designations.Add(designation);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Designation> GetAllDesignationData()
        {
            try
            {
                return _appContext.designations.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Designation GetDesignationData(int id)
        {
            try
            {
                Designation designation = _appContext.designations.Find(id);
                return designation;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateDesignation(Designation designation)
        {

            try
            {
                _appContext.Entry(designation).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int DeleteDesignation(int id)
        {
            try
            {
                Designation des = _appContext.designations.Find(id);
                _appContext.designations.Remove(des);
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
