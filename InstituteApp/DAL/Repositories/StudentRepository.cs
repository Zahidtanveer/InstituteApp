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
                _appContext.students.Add(student);
                _appContext.SaveChanges();
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

                var Students = _appContext.students.ToList();
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
                Student Student = _appContext.students.Find(id);
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
        #endregion
    }
}
