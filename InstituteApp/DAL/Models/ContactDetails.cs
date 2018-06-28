using System;
using System.Collections.Generic;
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

    }
}
