using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class ContactDetails
    {
        public int Id { get; set; }
        public string PresentAddress { get; set; }
        public string PermanentAddress { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string Phone { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }

        public int? EmployeeId { get; set; }
        [ForeignKey("EmployeeId")]
        public virtual Employee employee { get; set; }

        public int? GuardianId { get; set; }
        [ForeignKey("GuardianId")]
        public virtual Guardian guardian { get; set; }

        public int? StudentId { get; set; }
        [ForeignKey("StudentId")]
        public virtual Student student { get; set; }

       


    }
}
