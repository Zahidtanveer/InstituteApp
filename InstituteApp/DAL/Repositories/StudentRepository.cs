using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class StudentRepository:Repository<Student>, IStudentRepository
    {
        public StudentRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;


        #region Student
        public int AddStudent(Student StudentVM)
        {
            try
            {

                var guardian = new Guardian
                {
                    Name = StudentVM.guardian.Name,
                    Income = StudentVM.guardian.Income,
                    Education = StudentVM.guardian.Education,
                    Occuption = StudentVM.guardian.Occuption,
                };
                if (guardian != null)
                {
                    _appContext.guardians.Add(guardian);
                    _appContext.SaveChanges();
                }
                var GuardianID = guardian.Id;
                var student = new Student
                {
                    AcadamicYear = StudentVM.AcadamicYear,
                    RegisterNumber = StudentVM.RegisterNumber,
                    JoiningDate = StudentVM.JoiningDate,
                    Course = StudentVM.Course,
                    Batch = StudentVM.Batch,
                    RollNo = StudentVM.RollNo,


                    FatherName = StudentVM.FatherName,
                    FatherCNIC = StudentVM.FatherCNIC,
                    FatherJob = StudentVM.FatherJob,
                    FatherMobile = StudentVM.FatherMobile,
                    MotherName = StudentVM.MotherName,
                    MotherCNIC = StudentVM.MotherCNIC,
                    MotherJob = StudentVM.MotherJob,
                    MotherMobile = StudentVM.MotherMobile,

                    SchoolName = StudentVM.SchoolName,
                    schoolAddress = StudentVM.schoolAddress,
                    Qualification = StudentVM.Qualification,
                    GuardianId = GuardianID,
                    CategoryId = Convert.ToInt32(StudentVM.personalDetails.Category)


                };
                if (student != null)
                {
                    _appContext.students.Add(student);
                    _appContext.SaveChanges();
                }
                int StudentID = student.Id;
                var personalDetails = new PersonalDetails
                {
                    StudentId = StudentID,
                    FirstName = StudentVM.personalDetails.FirstName,
                    MiddleName = StudentVM.personalDetails.MiddleName,
                    LastName = StudentVM.personalDetails.LastName,
                    DateOfBirth = StudentVM.personalDetails.DateOfBirth,
                    Gender = StudentVM.personalDetails.Gender,
                    CNIC = StudentVM.personalDetails.CNIC,
                    Category = StudentVM.personalDetails.Category,
                    BirthPlace = StudentVM.personalDetails.BirthPlace,
                    Nationality = StudentVM.personalDetails.Nationality,
                    BloodGroup = StudentVM.personalDetails.BloodGroup,
                    Religion = StudentVM.personalDetails.Religion,
                    Caste = StudentVM.personalDetails.Caste
                };
                if (personalDetails != null)
                {
                    _appContext.personalDetails.Add(personalDetails);
                    _appContext.SaveChanges();
                }
                var contactDetails = new ContactDetails
                {
                    StudentId = StudentID,
                    PermanentAddress = StudentVM.contactDetails.PermanentAddress,
                    PresentAddress = StudentVM.contactDetails.PresentAddress,
                    City = StudentVM.contactDetails.City,
                    PostalCode = StudentVM.contactDetails.PostalCode,
                    Country = StudentVM.contactDetails.Country,
                    State = StudentVM.contactDetails.State,
                    Phone = StudentVM.contactDetails.Phone,
                    Mobile = StudentVM.contactDetails.Mobile,
                    Email = StudentVM.contactDetails.Email
                };
                if (contactDetails != null)
                {
                     _appContext.contactDetails.Add(contactDetails);
                    _appContext.SaveChanges();
                }
                 var g_contactDetails = new ContactDetails
                 {
                     GuardianId=GuardianID,
                     PermanentAddress = StudentVM.guardian.ContactDetails.PresentAddress,
                     City = StudentVM.guardian.ContactDetails.City,
                     PostalCode = StudentVM.guardian.ContactDetails.PostalCode,
                     Country = StudentVM.guardian.ContactDetails.Country,
                     State = StudentVM.guardian.ContactDetails.State,
                     Phone = StudentVM.guardian.ContactDetails.Phone,
                     Mobile = StudentVM.guardian.ContactDetails.Mobile,
                     Email = StudentVM.guardian.ContactDetails.Email
                 };
                if (g_contactDetails != null)
                {
                    _appContext.contactDetails.Add(g_contactDetails);
                    _appContext.SaveChanges();
                }
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public IEnumerable<Student> GetAllStudentData()
        {
            try
            {

                var Students = _appContext.students.Include(x=>x.guardian).ThenInclude(x=>x.ContactDetails).ToList();
                return Students;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Student GetStudentData(int id)
        {
            try
            {
                Student Student = _appContext.students
                    .Where(s=>s.Id==id)
                    .Include(p=>p.personalDetails)
                    .Include(c=>c.contactDetails)
                    .Include(g=>g.guardian)
                     .ThenInclude(x=>x.ContactDetails)
                    .FirstOrDefault();

                return Student;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int UpdateStudent(Student Student)
        {
            try
            {
                _appContext.Entry(Student).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int DeleteStudent(int id)
        {
            try
            {
                Student Student = _appContext.students.Find(id);
                _appContext.students.Remove(Student);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion



        #region Leave Category
        public int AddStudentCategory(StudentCategory studentCategory)
        {
            try
            {
                _appContext.studentCategories.Add(studentCategory);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public IEnumerable<StudentCategory> GetAllStudentCategoryData()
        {
            try
            {

                var studentCategories = _appContext.studentCategories.ToList();
                return studentCategories;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public StudentCategory GetStudentCategoryData(int id)
        {
            try
            {
                StudentCategory studentCategory = _appContext.studentCategories.Find(id);
                return studentCategory;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int UpdateStudentCategory(StudentCategory studentCategory)
        {
            try
            {
                _appContext.Entry(studentCategory).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int DeleteStudentCategory(int id)
        {
            try
            {
                StudentCategory studentCategory = _appContext.studentCategories.Find(id);
                _appContext.studentCategories.Remove(studentCategory);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int MarkDailyStudentAttedance(IEnumerable<Student> students)
        {
            try
            {
                var student = students.ToList();

                return 1;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Student> DailyStudentAttedance()
        {
            try
            {
                var students = _appContext.students.Include(x=>x.studentAttendances).ToList();

                return students;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion
    }
}
