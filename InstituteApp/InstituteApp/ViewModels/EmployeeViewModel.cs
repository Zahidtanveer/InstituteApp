using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstituteApp.ViewModels
{
    public class EmployeeViewModel
    {
        public int Id { get; set; }
        public string EmployeeCode { get; set; }
        public DateTime JoiningDate { get; set; }
        public string Qualification { get; set; }
        public string Department { get; set; }
        public string Designation { get; set; }
        public string TotalExperience { get; set; }

        public int? personalDetails_EmployeeId { get; set; }
        public string personalDetails_FirstName { get; set; }
        public string personalDetails_MiddleName { get; set; }
        public string personalDetails_LastName { get; set; }
        public DateTime personalDetails_DateOfBirth { get; set; }
        public string personalDetails_Gender { get; set; }
        public string personalDetails_CNIC { get; set; }

        public string contactDetails_PresentAddress { get; set; }
        public string contactDetails_PermanentAddress { get; set; }
        public string contactDetails_City { get; set; }
        public string contactDetails_PostalCode { get; set; }
        public string contactDetails_Country { get; set; }
        public string contactDetails_State { get; set; }
        public string contactDetails_Phone { get; set; }
        public string contactDetails_Mobile { get; set; }
        public string contactDetails_Email { get; set; }

    }
}
