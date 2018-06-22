using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface ICourseRepository:IRepository<Course>
    {
        int AddCourse(Course course);
        int UpdateCourse(Course course);
        IEnumerable<Course> GetAllCourseData();
        Course GetCourseData(int id);
        int DeleteCourse(int id);
    }
}
