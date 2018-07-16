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
        public int AddStudent(Student student)
        {
            try
            {

                var guardian = new Guardian
                {
                    Name = student.guardian.Name,
                    Income = student.guardian.Income,
                    Education = student.guardian.Education,
                    Occuption = student.guardian.Occuption,
                };
                if (guardian != null)
                {
                    _appContext.guardians.Add(guardian);
                    _appContext.SaveChanges();
                }
                var GuardianID = guardian.Id;
                var dstudent = new Student
                {
                    AcadamicYear = student.AcadamicYear,
                    RegisterNumber = student.RegisterNumber,
                    JoiningDate = student.JoiningDate,
                    Course = student.Course,
                    Batch = student.Batch,
                    RollNo = student.RollNo,


                    FatherName = student.FatherName,
                    FatherCNIC = student.FatherCNIC,
                    FatherJob = student.FatherJob,
                    FatherMobile = student.FatherMobile,
                    MotherName = student.MotherName,
                    MotherCNIC = student.MotherCNIC,
                    MotherJob = student.MotherJob,
                    MotherMobile = student.MotherMobile,

                    SchoolName = student.SchoolName,
                    schoolAddress = student.schoolAddress,
                    Qualification = student.Qualification,
                    GuardianId = GuardianID,
                    CategoryId = Convert.ToInt32(student.personalDetails.Category)


                };
                if (dstudent != null)
                {
                    _appContext.students.Add(student);
                    _appContext.SaveChanges();
                }
                int StudentID = student.Id;
                var personalDetails = new PersonalDetails
                {
                    StudentId = StudentID,
                    FirstName = student.personalDetails.FirstName,
                    MiddleName = student.personalDetails.MiddleName,
                    LastName = student.personalDetails.LastName,
                    DateOfBirth = student.personalDetails.DateOfBirth,
                    Gender = student.personalDetails.Gender,
                    CNIC = student.personalDetails.CNIC,
                    Category = student.personalDetails.Category,
                    BirthPlace = student.personalDetails.BirthPlace,
                    Nationality = student.personalDetails.Nationality,
                    BloodGroup = student.personalDetails.BloodGroup,
                    Religion = student.personalDetails.Religion,
                    Caste = student.personalDetails.Caste
                };
                if (personalDetails != null)
                {
                    _appContext.personalDetails.Add(personalDetails);
                    _appContext.SaveChanges();
                }
                var contactDetails = new ContactDetails
                {
                    StudentId = StudentID,
                    PermanentAddress = student.contactDetails.PermanentAddress,
                    PresentAddress = student.contactDetails.PresentAddress,
                    City = student.contactDetails.City,
                    PostalCode = student.contactDetails.PostalCode,
                    Country = student.contactDetails.Country,
                    State = student.contactDetails.State,
                    Phone = student.contactDetails.Phone,
                    Mobile = student.contactDetails.Mobile,
                    Email = student.contactDetails.Email
                };
                if (contactDetails != null)
                {
                     _appContext.contactDetails.Add(contactDetails);
                    _appContext.SaveChanges();
                }
                 var g_contactDetails = new ContactDetails
                 {
                     GuardianId=GuardianID,
                     PermanentAddress = student.guardian.ContactDetails.PresentAddress,
                     City = student.guardian.ContactDetails.City,
                     PostalCode = student.guardian.ContactDetails.PostalCode,
                     Country = student.guardian.ContactDetails.Country,
                     State = student.guardian.ContactDetails.State,
                     Phone = student.guardian.ContactDetails.Phone,
                     Mobile = student.guardian.ContactDetails.Mobile,
                     Email = student.guardian.ContactDetails.Email
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

                var students = _appContext.students
               .Include(c => c.contactDetails)
               .Include(p => p.personalDetails)
               .Include(x => x.guardian)
                      .ThenInclude(gc => gc.ContactDetails)
               .Include(a => a.studentAttendances).ToList();
                return students;
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
                Student student = _appContext.students
                    .Where(s=>s.Id==id)
                    .Include(p=>p.personalDetails)
                    .Include(c=>c.contactDetails)
                    .Include(g=>g.guardian)
                    .ThenInclude(x=>x.ContactDetails)
                    .FirstOrDefault();

                return student;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int UpdateStudent(Student student)
        {
            try
            {
                int StudentID = student.Id;
                var dbcontactDetail = _appContext.contactDetails.SingleOrDefault(x => x.StudentId == StudentID);
                var dbpersonalDetail = _appContext.personalDetails.SingleOrDefault(x => x.StudentId == StudentID);
                var dbguardian = _appContext.guardians.SingleOrDefault(x => x.Id == student.guardian.Id);
                var g_dbcontactDetail= _appContext.contactDetails.SingleOrDefault(x => x.GuardianId == student.guardian.Id);

                var dstudent = new Student
                {
                    Id = StudentID,
                    AcadamicYear = student.AcadamicYear,
                    RegisterNumber = student.RegisterNumber,
                    JoiningDate = student.JoiningDate,
                    Course = student.Course,
                    Batch = student.Batch,
                    RollNo = student.RollNo,


                    FatherName = student.FatherName,
                    FatherCNIC = student.FatherCNIC,
                    FatherJob = student.FatherJob,
                    FatherMobile = student.FatherMobile,
                    MotherName = student.MotherName,
                    MotherCNIC = student.MotherCNIC,
                    MotherJob = student.MotherJob,
                    MotherMobile = student.MotherMobile,

                    SchoolName = student.SchoolName,
                    schoolAddress = student.schoolAddress,
                    Qualification = student.Qualification,
                    GuardianId = student.guardian.Id,
                    CategoryId = Convert.ToInt32(student.personalDetails.Category)


                };
            
                dbcontactDetail.PresentAddress = student.contactDetails.PresentAddress;
                dbcontactDetail.PermanentAddress = student.contactDetails.PermanentAddress;
                dbcontactDetail.City = student.contactDetails.City;
                dbcontactDetail.PostalCode = student.contactDetails.PostalCode;
                dbcontactDetail.Country = student.contactDetails.Country;
                dbcontactDetail.State = student.contactDetails.State;
                dbcontactDetail.Phone = student.contactDetails.Phone;
                dbcontactDetail.Mobile = student.contactDetails.Mobile;
                dbcontactDetail.Email = student.contactDetails.Email;
                dbcontactDetail.StudentId = StudentID;
               
                dbpersonalDetail.FirstName = student.personalDetails.FirstName;
                dbpersonalDetail.MiddleName = student.personalDetails.MiddleName;
                dbpersonalDetail.LastName = student.personalDetails.LastName;
                dbpersonalDetail.DateOfBirth = student.personalDetails.DateOfBirth;
                dbpersonalDetail.Gender = student.personalDetails.Gender;
                dbpersonalDetail.CNIC = student.personalDetails.CNIC;
                dbpersonalDetail.StudentId = StudentID;
   
                dbguardian.Income = student.guardian.Income;
                dbguardian.Name = student.guardian.Name;
                dbguardian.Education = student.guardian.Education;
                dbguardian.Occuption = student.guardian.Occuption;
           
                g_dbcontactDetail.PresentAddress = student.guardian.ContactDetails.PresentAddress;
                g_dbcontactDetail.PermanentAddress = student.guardian.ContactDetails.PermanentAddress;
                g_dbcontactDetail.City = student.guardian.ContactDetails.City;
                g_dbcontactDetail.PostalCode = student.guardian.ContactDetails.PostalCode;
                g_dbcontactDetail.Country = student.guardian.ContactDetails.Country;
                g_dbcontactDetail.State = student.guardian.ContactDetails.State;
                g_dbcontactDetail.Phone = student.guardian.ContactDetails.Phone;
                g_dbcontactDetail.Mobile = student.guardian.ContactDetails.Mobile;
                g_dbcontactDetail.Email = student.guardian.ContactDetails.Email;
                g_dbcontactDetail.GuardianId =student.guardian.Id;
             

                _appContext.Entry(dbguardian).State = EntityState.Modified;
                _appContext.SaveChanges();
                _appContext.Entry(dstudent).State = EntityState.Modified;
                _appContext.SaveChanges();
                _appContext.Entry(dbcontactDetail).State = EntityState.Modified;
                _appContext.SaveChanges();
                _appContext.Entry(dbpersonalDetail).State = EntityState.Modified;
                _appContext.SaveChanges();
               
                _appContext.Entry(g_dbcontactDetail).State = EntityState.Modified;
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

        public IEnumerable<Student> FilterStudent(string course, string batch, string date)
        {
            var students = _appContext.students
                .Include(c => c.contactDetails)
                .Include(p => p.personalDetails)
                .Include(x => x.guardian)
                       .ThenInclude(gc => gc.ContactDetails)
                .Include(a => a.studentAttendances).ToList();

            if(course!=null && batch != null && date==null)
            {
                students = students.Where(x => (x.Course == course) && (x.Batch == batch)).ToList();
                return students;
            }
            else if(date!=null)
            {
                students = students.Where(x => (x.Course == course) && (x.Batch == batch)).ToList();
                return students;
            }
            return null;
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

        public IEnumerable<StudentAttendance> DailyStudentAttedance()
        {
            try
            {
                var students = _appContext.students.Include(x=>x.studentAttendances).ToList();
                foreach (var stu in students)
                {
                   
                    var batches = _appContext.batches.Where(x => x.Name == stu.Batch).ToList();
                    if (batches!=null){
                         foreach (var batch in batches)
                        {
                            var batchTeacher = _appContext.allocatedBatchTeachers.SingleOrDefault(x => (x.BatchId == batch.Id));
                            var dstudentAttendance = new StudentAttendance
                            {
                                AttendanceDate = DateTime.Today,
                                Year = DateTime.Now.Year.ToString(),
                                Day = DateTime.Now.Day.ToString(),
                                Month = DateTime.Now.Month.ToString(),
                                CourseId = batchTeacher.CourseId,
                                BatchId = batch.Id,
                                BatchTeacherId = batchTeacher.Id,
                                StudentId = stu.Id
                            };
                            var dbStudentAttendance = _appContext.studentAttendances.Where(x => (x.AttendanceDate == DateTime.Today) && (x.StudentId == stu.Id));
                            if (dbStudentAttendance.Count() == 0)
                            {
                                _appContext.studentAttendances.Add(dstudentAttendance);
                                _appContext.SaveChanges();

                            }
                        }
                    }

                }
                var studentAttendace = _appContext.studentAttendances
                .Include(s =>s.student)
                .Include(c=>c.course)
                .Include(b=>b.batch)
                .Include(bt=>bt.allocatedBatchTeacher).ToList();
                return studentAttendace;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public IEnumerable<StudentAttendance> FilterStudentAttendance(string course, string batch, DateTime date)
        {
            DailyStudentAttedance();
            var studentAttendace = _appContext.studentAttendances
               .Include(s => s.student)
               .Include(c => c.course)
               .Include(b => b.batch)
               .Include(bt => bt.allocatedBatchTeacher).ToList();
            studentAttendace =studentAttendace.Where(x => (x.BatchId ==Convert.ToInt32(batch)) && (x.CourseId== Convert.ToInt32(course)) && (x.AttendanceDate == date)).ToList();
            return studentAttendace;
        }


        #endregion
    }
}
