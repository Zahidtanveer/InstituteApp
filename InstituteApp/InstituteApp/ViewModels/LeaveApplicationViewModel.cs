using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstituteApp.ViewModels
{
    public class LeaveApplicationViewModel
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public int LeaveCategoryId { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public string Reason { get; set; }
    }
}
