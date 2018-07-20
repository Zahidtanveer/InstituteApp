using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Department
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }

        public virtual ICollection<SubjectAllocation> subjectAllocations { get; set; }
    }
}
