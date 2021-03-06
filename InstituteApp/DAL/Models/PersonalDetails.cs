﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class PersonalDetails
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string  CNIC { get; set; }
        //for student only
        public string Category { get; set; }
        public string BirthPlace { get; set; }
        public string Nationality { get; set; }
        public string BloodGroup { get; set; }
        public string Religion { get; set; }
        public string Caste { get; set; }


        public int? EmployeeId { get; set; }
        [ForeignKey("EmployeeId")]
        public virtual Employee employee { get; set; }


        public int? StudentId { get; set; }
        [ForeignKey("StudentId")]
        public virtual Student student { get; set; }

        
    }
}
