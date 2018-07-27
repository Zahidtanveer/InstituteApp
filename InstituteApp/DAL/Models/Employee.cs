using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
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

        //public string UserType { get; set; }

        public virtual PersonalDetails personalDetails { get; set; }
        public virtual ContactDetails contactDetails { get; set; }
        public virtual ICollection<EmployeeAttendance> employeeAttendances { get; set; }
        public virtual ICollection<SubjectAllocation> subjectAllocations { get; set; }
        public virtual ICollection<TimeTable> timeTable { get; set; }
    }
}
