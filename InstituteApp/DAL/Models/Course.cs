using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Dscription { get; set; }
        public string Code { get; set; }
        public string MaxAttandencePercentage { get; set; }
        public int TotalWorkingDays { get; set; }
        public string SyllabusName { get; set; }
     
        public ICollection<Batch> batches { get; set; }
    }
}
