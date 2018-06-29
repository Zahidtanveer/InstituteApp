using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class Student
    {
        public int Id { get; set; }
        //Official Detail
        public string AcadamicYear { get; set; }
        public string RegisterNumber { get; set; }
        public string JoiningDate { get; set; }
        public string Course { get; set; }
        public string Batch { get; set; }
        public string RollNo { get; set; }
        //Personal Detail
        public virtual PersonalDetails personalDetails { get; set; }
        //Contact Detail
        public virtual ContactDetails contactDetails { get; set; }
        //Father Detail
        public string FatherName { get; set; }
        public string FatherJob { get; set; }
        public string FatherMobile { get; set; }
        public string FatherCNIC { get; set; }
        //Mother Detail
        public string MotherName { get; set; }
        public string MotherJob { get; set; }
        public string MotherMobile { get; set; }
        public string MotherCNIC { get; set; }
        //Guardian Detail
        public int GuardianId { get; set; }
        [ForeignKey("GuardianId")]
        public virtual Guardian guardian { get; set; }
        //Pervious Qualification
        public string SchoolName { get; set; }
        public string schoolAddress { get; set; }
        public string Qualification { get; set; }
      
        //Attendance
        public virtual ICollection<StudentAttendance> studentAttendances {get; set;}

        public int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public virtual StudentCategory studentCategory { get; set; }

   
    }
}
