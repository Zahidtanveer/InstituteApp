using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class AcadamicRepository : Repository<Acadamic>, IAcadamicRepository
    {
        public AcadamicRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        //Get All Acadamic Data
        public IEnumerable<Acadamic> GetAllAcadamicData()
        {
            try
            {

                return _appContext.Acadamics.ToList();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //Get Detail of Acadamic Data               
        public Acadamic GetAcadamicData(int id)
        {
            try
            {
                Acadamic acadamic = _appContext.Acadamics.Find(id);
                return acadamic;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //Create      
        public int AddAcadamic(Acadamic acadamic)
        {
            try
            {
                _appContext.Acadamics.Add(acadamic);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        //Edit
        public int UpdateAcadamic(Acadamic acadamic)
        {
            try
            {
                _appContext.Entry(acadamic).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;

            }
        }
        //Delete
        public int DeleteAcadamic(int id)
        {
            try
            {
                Acadamic acadamic = _appContext.Acadamics.Find(id);
                _appContext.Acadamics.Remove(acadamic);
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