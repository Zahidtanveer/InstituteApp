using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Institute : AuditableEntity
    {
       
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }
        public string Fax { get; set; }
        public string Admin { get; set; }
        public string Country { get; set; }
        public string Languange { get; set; }
        public string Code { get; set; }
        public string TimeZone { get; set; }

    }
}
