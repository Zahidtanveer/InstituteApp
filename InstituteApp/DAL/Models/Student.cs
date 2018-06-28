using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string AcadamicYear { get; set; }
        public string RegisterNumber { get; set; }
        public string JoiningDate { get; set; }
        public string Course { get; set; }
        public string Batch { get; set; }
        public string RollNo { get; set; }
        //Personal Detail

        //Contact Detail

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
        //Pervious Qualification
        public string SchoolName { get; set; }
        public string schoolAddress { get; set; }
        public string Qualification { get; set; }
    }
}
