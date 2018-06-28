using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
   public class EmployeeAttendance
    {
        public int Id { get; set; }
        public string Year { get; set; }
        public string Month { get; set; }
        public string Day { get; set; }
        public DateTime AttendanceDate { get; set; }
        public string EmployeeId { get; set; }
        public bool IsPresent { get; set; }
    }
}
