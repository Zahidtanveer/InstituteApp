using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
using InstituteApp.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InstituteApp.Controllers
{
   
    public class StudentController : Controller
    {
        private IUnitOfWork _unitOfWork;
        public StudentController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //GET: api/Student/Index
        [HttpGet]
        [Route("api/Student/Index")]
        public IEnumerable<Student> Index()
        {
            return _unitOfWork.Student.GetAllStudentData();
        }
        //GET: api/Student/Details/1
        [HttpGet()]
        [Route("api/Student/Details/{id}")]
        public StudentViewModel Details(int id)
        {
            var student=_unitOfWork.Student.GetStudentData(id);
            var StudentVm = new StudentViewModel
            {
                Id = id,
                AcadamicYear = student.AcadamicYear,
                RegisterNumber = student.RegisterNumber,
                JoiningDate = student.JoiningDate,
                Course = student.Course,
                Batch = student.Batch,
                RollNo = student.RollNo,

                personalDetails_FirstName = student.personalDetails.FirstName,
                personalDetails_MiddleName= student.personalDetails.MiddleName,
                personalDetails_LastName= student.personalDetails.LastName,
                personalDetails_BloodGroup= student.personalDetails.BloodGroup,
                personalDetails_BirthPlace= student.personalDetails.BirthPlace,
                personalDetails_Caste= student.personalDetails.Caste,
                personalDetails_Category= student.personalDetails.Category,
                personalDetails_DateOfBirth= student.personalDetails.DateOfBirth,
                personalDetails_CNIC= student.personalDetails.CNIC,
                personalDetails_Gender= student.personalDetails.Gender,
                personalDetails_Nationality= student.personalDetails.Nationality,
                personalDetails_Religion= student.personalDetails.Religion,
               
                contactDetails_PermanentAddress=student.contactDetails.PermanentAddress,
                contactDetails_PresentAddress= student.contactDetails.PresentAddress,
                contactDetails_City= student.contactDetails.City,
                contactDetails_PostalCode= student.contactDetails.PostalCode,
                contactDetails_Country= student.contactDetails.Country,
                contactDetails_State = student.contactDetails.State,
                contactDetails_Mobile = student.contactDetails.Mobile,
                contactDetails_Phone= student.contactDetails.Phone,
                contactDetails_Email = student.contactDetails.Email,

                FatherName = student.FatherName,
                FatherCNIC = student.FatherCNIC,
                FatherJob = student.FatherJob,
                FatherMobile = student.FatherMobile,

                MotherName = student.MotherName,
                MotherCNIC = student.MotherCNIC,
                MotherJob = student.MotherJob,
                MotherMobile = student.MotherMobile,
                guardianID=student.guardian.Id,
                g_Name=student.guardian.Name,
                g_Income=student.guardian.Income,
                g_Education=student.guardian.Education,
                g_Occuption=student.guardian.Occuption,
                g_contactDetails_Address=student.guardian.ContactDetails.PermanentAddress,
                g_contactDetails_City= student.guardian.ContactDetails.City,
                g_contactDetails_PostalCode= student.guardian.ContactDetails.PostalCode,
                g_contactDetails_Country= student.guardian.ContactDetails.Country,
                g_contactDetails_State= student.guardian.ContactDetails.State,
                g_contactDetails_Mobile= student.guardian.ContactDetails.Mobile,
                g_contactDetails_Email= student.guardian.ContactDetails.Email,
                g_contactDetails_Phone= student.guardian.ContactDetails.Phone,

                SchoolName = student.SchoolName,
                SchoolAddress = student.schoolAddress,
                Qualification = student.Qualification


            };
            return StudentVm;
        }

        //POST: api/Student/Create
        [HttpPost]
        [Route("api/Student/Create")]
        public int Create([FromBody]StudentViewModel StudentVM)
        {
            var student = new Student
            {
                AcadamicYear = StudentVM.AcadamicYear,
                RegisterNumber = StudentVM.RegisterNumber,
                JoiningDate = StudentVM.JoiningDate,
                Course = StudentVM.Course,
                Batch = StudentVM.Batch,
                RollNo = StudentVM.RollNo,
               
                personalDetails=new PersonalDetails
                {
                    FirstName=StudentVM.personalDetails_FirstName,
                    MiddleName= StudentVM.personalDetails_MiddleName,
                    LastName= StudentVM.personalDetails_LastName,
                    DateOfBirth=StudentVM.personalDetails_DateOfBirth,
                    Gender= StudentVM.personalDetails_Gender,
                    CNIC= StudentVM.personalDetails_CNIC,
                    Category= StudentVM.personalDetails_Category,
                    BirthPlace= StudentVM.personalDetails_BirthPlace,
                    Nationality= StudentVM.personalDetails_Nationality,
                    BloodGroup= StudentVM.personalDetails_BloodGroup,
                    Religion= StudentVM.personalDetails_Religion,
                    Caste= StudentVM.personalDetails_Caste
                 },
                contactDetails =new ContactDetails
                {
                    PermanentAddress= StudentVM.contactDetails_PermanentAddress,
                    PresentAddress= StudentVM.contactDetails_PresentAddress,
                    City= StudentVM.contactDetails_City,
                    PostalCode= StudentVM.contactDetails_PostalCode,
                    Country=StudentVM.contactDetails_Country,
                    State= StudentVM.contactDetails_State,
                    Phone= StudentVM.contactDetails_Phone,
                    Mobile= StudentVM.contactDetails_Mobile,
                    Email= StudentVM.contactDetails_Email
                },
                FatherName= StudentVM.FatherName,
                FatherCNIC= StudentVM.FatherCNIC,
                FatherJob= StudentVM.FatherJob,
                FatherMobile= StudentVM.FatherMobile,
                MotherName= StudentVM.MotherName,
                MotherCNIC= StudentVM.MotherCNIC,
                MotherJob= StudentVM.MotherJob,
                MotherMobile= StudentVM.MotherMobile,
                guardian =new Guardian
                {
                    Name= StudentVM.g_Name,
                    Income= StudentVM.g_Income,
                    Education= StudentVM.g_Education,
                    Occuption= StudentVM.g_Occuption,
                    ContactDetails=new ContactDetails {
                        PermanentAddress= StudentVM.g_contactDetails_Address,
                        City= StudentVM.g_contactDetails_City,
                        PostalCode =StudentVM.g_contactDetails_PostalCode,
                        Country= StudentVM.g_contactDetails_Country,
                        State= StudentVM.g_contactDetails_State,
                        Phone= StudentVM.g_contactDetails_Phone,
                        Mobile= StudentVM.g_contactDetails_Mobile,
                        Email= StudentVM.g_contactDetails_Email
                 }
                }
                ,SchoolName= StudentVM.SchoolName,
                schoolAddress= StudentVM.SchoolAddress,
                Qualification= StudentVM.Qualification
                

            };
            return _unitOfWork.Student.AddStudent(student);

        }
        //PUT: api/Student/Edit
        [HttpPut()]
        [Route("api/Student/Edit")]
        public int Edit([FromBody]StudentViewModel StudentVM)
        {
            var student = new Student
            {
                Id=StudentVM.Id,
                AcadamicYear = StudentVM.AcadamicYear,
                RegisterNumber = StudentVM.RegisterNumber,
                JoiningDate = StudentVM.JoiningDate,
                Course = StudentVM.Course,
                Batch = StudentVM.Batch,
                RollNo = StudentVM.RollNo,
                personalDetails = new PersonalDetails
                {
                    FirstName = StudentVM.personalDetails_FirstName,
                    MiddleName = StudentVM.personalDetails_MiddleName,
                    LastName = StudentVM.personalDetails_LastName,
                    DateOfBirth = StudentVM.personalDetails_DateOfBirth,
                    Gender = StudentVM.personalDetails_Gender,
                    CNIC = StudentVM.personalDetails_CNIC,
                    Category = StudentVM.personalDetails_Category,
                    BirthPlace = StudentVM.personalDetails_BirthPlace,
                    Nationality = StudentVM.personalDetails_Nationality,
                    BloodGroup = StudentVM.personalDetails_BloodGroup,
                    Religion = StudentVM.personalDetails_Religion,
                    Caste = StudentVM.personalDetails_Caste
                },
                contactDetails = new ContactDetails
                {
                    PermanentAddress = StudentVM.contactDetails_PermanentAddress,
                    PresentAddress = StudentVM.contactDetails_PresentAddress,
                    City = StudentVM.contactDetails_City,
                    PostalCode = StudentVM.contactDetails_PostalCode,
                    Country = StudentVM.contactDetails_Country,
                    State = StudentVM.contactDetails_State,
                    Phone = StudentVM.contactDetails_Phone,
                    Mobile = StudentVM.contactDetails_Mobile,
                    Email = StudentVM.contactDetails_Email
                },
                FatherName = StudentVM.FatherName,
                FatherCNIC = StudentVM.FatherCNIC,
                FatherJob = StudentVM.FatherJob,
                FatherMobile = StudentVM.FatherMobile,
                MotherName = StudentVM.MotherName,
                MotherCNIC = StudentVM.MotherCNIC,
                MotherJob = StudentVM.MotherJob,
                MotherMobile = StudentVM.MotherMobile,
                guardian = new Guardian
                {
                    Id=StudentVM.guardianID,
                    Name = StudentVM.g_Name,
                    Income = StudentVM.g_Income,
                    Education = StudentVM.g_Education,
                    Occuption = StudentVM.g_Occuption,
                    ContactDetails = new ContactDetails
                    {
                        PermanentAddress = StudentVM.g_contactDetails_Address,
                        City = StudentVM.g_contactDetails_City,
                        PostalCode = StudentVM.g_contactDetails_PostalCode,
                        Country = StudentVM.g_contactDetails_Country,
                        State = StudentVM.g_contactDetails_State,
                        Phone = StudentVM.g_contactDetails_Phone,
                        Mobile = StudentVM.g_contactDetails_Mobile,
                        Email = StudentVM.g_contactDetails_Email
                    }
                }
               ,
                SchoolName = StudentVM.SchoolName,
                schoolAddress = StudentVM.SchoolAddress,
                Qualification = StudentVM.Qualification


            };
            return _unitOfWork.Student.UpdateStudent(student);
        }
        //DELETE: api/Student/Delete/1
        [HttpDelete()]
        [Route("api/Student/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Student.DeleteStudent(id);
        }
        
        //GET:api/Student/FilterStudent
        [HttpGet]
        [Route("api/Student/FilterStudent")]
        public IEnumerable<Student> FilterStudent(string course, string batch, string date)
        {
            return _unitOfWork.Student.FilterStudent(course, batch, date);
        }


    }
}