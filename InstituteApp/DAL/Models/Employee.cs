using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string EmployeeCode { get; set; }
        public DateTime JoiningDate { get; set; }
        public string Qualification { get; set; }
        public string Department { get; set; }
        public string Designation { get; set; }
        public string TotalExperience { get; set; }
        public string UserType { get; set; }
    }
}
