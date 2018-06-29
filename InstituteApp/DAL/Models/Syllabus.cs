using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Syllabus
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Course> courses { get; set; }
    }
}
