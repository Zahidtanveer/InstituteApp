using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Leave
    {
        public int Id { get; set; }
        public string EmployeeCode { get; set; }
        public string DesignationName { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public string Reason { get; set; }
        public string LeaveType { get; set; }
        public int LeaveCount { get; set; }
        public int RemainingLeaves { get; set; }
        public string Status { get; set; }
    }
}
