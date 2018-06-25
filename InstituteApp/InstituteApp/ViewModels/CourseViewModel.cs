using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstituteApp.ViewModels
{
    public class CourseViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Dscription { get; set; }
        public string Code { get; set; }
        public string MaxAttandencePercentage { get; set; }
        public int TotalWorkingDays { get; set; }
        public string SyllabusName { get; set; }
    }
}
