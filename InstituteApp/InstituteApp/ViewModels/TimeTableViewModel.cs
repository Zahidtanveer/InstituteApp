using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstituteApp.ViewModels
{
    public class TimeTableViewModel
    {
        public int Id { get; set; }
        public string Day { get; set; }
        public string Name { get; set; }
        public string CourseId { get; set;}
        public string BatchId { get; set; }
        public string TeacherId { get; set; }
        public string TeacherName { get; set; }
        public string SubjectId { get; set; }
        public string SubjectName { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
       
   }
}
