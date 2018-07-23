using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class TimeTable
    {
        public int Id { get; set; }
        public int CourseId { get; set; }
        public int BatchId { get; set; }
        public string Name { get; set; }
        public string WeekDay { get; set; }
        public string PeriodId { get; set; }
        public int TeacherId { get; set; }
        public int SubjectId { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public bool IsActive { get; set; }
     }
}
