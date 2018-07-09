using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstituteApp.ViewModels
{
    public class LeaveViewModel
    {
       public int Id { get; set; }
       public string DesignationName { get; set; }
       public int LeaveCount  { get; set; }
       public int LeaveCategoryId { get; set; }
    }
}
