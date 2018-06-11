using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Acadamic :AuditableEntity
    {
        public int Id { get; set; }
        public string StartYear { get; set; }
        public string StartMonth { get; set; }
        public string EndYear { get; set; }
        public string EndMonth { get; set; }
        public bool IsActive { get; set; }

    }
}
