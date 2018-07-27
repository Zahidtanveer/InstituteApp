using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
using InstituteApp.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InstituteApp.Controllers
{
    public class TimeTableController : Controller
    {
        private IUnitOfWork _unitOfWork;

        public TimeTableController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        //POST: api/TimeTable/Create
        [HttpPost]
        [Route("api/TimeTable/AddTimeTable")]
        public int AddTimeTable([FromBody]IEnumerable<TimeTableViewModel> timeTablelist)
        {
            List<TimeTable> timeTables = new List<TimeTable>();
             foreach (var item in timeTablelist)
              {
                    var timeTable = new TimeTable
                    {
                        DayOfWeek = item.Day,
                        Name = item.Name,
                        StartTime = item.StartTime,
                        EndTime = item.EndTime,
                        CourseId = Convert.ToInt32(item.CourseId),
                        BatchId = Convert.ToInt32(item.BatchId),
                        SubjectId = Convert.ToInt32(item.SubjectId),
                        TeacherId = Convert.ToInt32(item.TeacherId),
                        IsActive = true

                    };
                    timeTables.Add(timeTable);
                }
         
           
            
                return _unitOfWork.TimeTable.CreateTimeTable(timeTables);

        }
    }
}