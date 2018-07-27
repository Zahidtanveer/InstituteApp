using DAL.Models;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class TimeTableRepository : Repository<TimeTable>, ITimeTableRepository
    {
        public TimeTableRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public int CreateTimeTable(List<TimeTable> timeTable)
        {
            try
            {
                foreach (var item in timeTable)
                {
                    _appContext.timeTables.Add(item);
                    _appContext.SaveChanges();

                }
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
