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
        public Student Details(int id)
        {
            return _unitOfWork.Student.GetStudentData(id);
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
        public int Edit([FromBody]Student Student)
        {
            return _unitOfWork.Student.UpdateStudent(Student);
        }
        //DELETE: api/Student/Delete/1
        [HttpDelete()]
        [Route("api/Student/Delete/{id}")]
        public int Delete(int id)
        {
            return _unitOfWork.Student.DeleteStudent(id);
        }
    }
}