using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class LeaveRepository : Repository<Leave>, ILeaveRepository
    {
        public LeaveRepository(ApplicationDbContext context) : base(context) { }
        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
       
        #region Leave
        public int AddLeave(Leave Leave)
        {
            try
            {
                _appContext.leaves.Add(Leave);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public IEnumerable<Leave> GetAllLeaveData()
        {
            try
            {

                var leaves = _appContext.leaves.ToList();
                return leaves;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Leave GetLeaveData(int id)
        {
            try
            {
                Leave Leave = _appContext.leaves.Find(id);
                return Leave;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int UpdateLeave(Leave Leave)
        {
            try
            {
                _appContext.Entry(Leave).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int DeleteLeave(int id)
        {
            try
            {
                Leave Leave = _appContext.leaves.Find(id);
                _appContext.leaves.Remove(Leave);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion




        #region Leave Category
        public int AddLeaveCategory(LeaveCategory LeaveCategory)
        {
            try
            {
                _appContext.leaveCategories.Add(LeaveCategory);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public IEnumerable<LeaveCategory> GetAllLeaveCategoryData()
        {
            try
            {

                var leaveCategories = _appContext.leaveCategories.ToList();
                return leaveCategories;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public LeaveCategory GetLeaveCategoryData(int id)
        {
            try
            {
                LeaveCategory LeaveCategory = _appContext.leaveCategories.Find(id);
                return LeaveCategory;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int UpdateLeaveCategory(LeaveCategory LeaveCategory)
        {
            try
            {
                _appContext.Entry(LeaveCategory).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int DeleteLeaveCategory(int id)
        {
            try
            {
                LeaveCategory LeaveCategory = _appContext.leaveCategories.Find(id);
                _appContext.leaveCategories.Remove(LeaveCategory);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion
    }
}
