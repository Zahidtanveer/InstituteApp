using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface ITimeTableRepository: IRepository<TimeTable>
    {
        int CreateTimeTable(List<TimeTable> TimeTable);
    }
}
