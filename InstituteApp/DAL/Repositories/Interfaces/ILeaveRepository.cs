using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface ILeaveRepository :IRepository<Leave>
    {

        int AddLeave(Leave LeaveCategory);
        int UpdateLeave(Leave LeaveCategory);
        IEnumerable<Leave> GetAllLeaveData();
        Leave GetLeaveData(int id);
        int DeleteLeave(int id);

        int AddLeaveCategory(LeaveCategory LeaveCategory);
        int UpdateLeaveCategory(LeaveCategory LeaveCategory);
        IEnumerable<LeaveCategory> GetAllLeaveCategoryData();
        LeaveCategory GetLeaveCategoryData(int id);
        int DeleteLeaveCategory(int id);


    }
}
