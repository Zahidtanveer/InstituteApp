using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class StudentAttendance
    {
        public int Id { get; set; }
        public string Course { get; set; }
        public string Batch { get; set; }
        public DateTime AttendanceDate { get; set; }
        public string Year { get; set; }
        public string Month { get; set; }
        public string Day { get; set; }
        public string StudentId { get; set; }
        public string BatchTeacherId { get; set; }
        public bool IsPresent { get; set; }
        //if Subject wise
        public string Subject { get; set; }
        public string SubjectTeacher { get; set; }
    }
}
