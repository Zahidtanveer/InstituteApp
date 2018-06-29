using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class Leave
    {
        public int Id { get; set; }
        public string DesignationName { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public string Reason { get; set; }
        public string LeaveType { get; set; }
        public int LeaveCount { get; set; }
        public int RemainingLeaves { get; set; }
        public string Status { get; set; }

        public int EmployeeId { get; set; }
        [ForeignKey("EmployeeId")]
        public virtual Employee employee { get; set; }

        public int LeaveCategoryId { get; set; }
        [ForeignKey("LeaveCategoryId")]
        public virtual LeaveCategory leaveCategory {get; set;}
    }
}
