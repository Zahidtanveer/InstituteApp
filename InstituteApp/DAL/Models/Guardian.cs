using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class Guardian
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Education { get; set; }
        public string Occuption { get; set; }
        public string Income { get; set; }

        public virtual ContactDetails ContactDetails { get; set; }

        public virtual ICollection<Student> students { get; set; }
     
    }
}
