using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    class CourseRepository: Repository<Course>, ICourseRepository
    {
        public CourseRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public int AddCourse(Course course)
        {
            try
            {
                _appContext.courses.Add(course);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

       

        public IEnumerable<Course> GetAllCourseData()
        {
            try
            {
                return _appContext.courses.Include(x=>x.syllabus).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Course GetCourseData(int id)
        {
            try
            {
                Course course = _appContext.courses.Find(id);
                return course;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateCourse(Course course)
        {
            try
            {
                _appContext.Entry(course).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public int DeleteCourse(int id)
        {
            try
            {
                Course course = _appContext.courses.Find(id);
                _appContext.courses.Remove(course);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
