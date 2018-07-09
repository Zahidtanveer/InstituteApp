using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface IStudentRepository: IRepository<Student>
    {

        int AddStudent(Student Student);
        int UpdateStudent(Student Student);
        IEnumerable<Student> GetAllStudentData();
        Student GetStudentData(int id);
        int DeleteStudent(int id);

        int AddStudentCategory(StudentCategory StudentCategory);
        int UpdateStudentCategory(StudentCategory StudentCategory);
        IEnumerable<StudentCategory> GetAllStudentCategoryData();
        StudentCategory GetStudentCategoryData(int id);
        int DeleteStudentCategory(int id);
        int MarkDailyStudentAttedance(IEnumerable<Student> students);
        IEnumerable<Student> DailyStudentAttedance();
    }
}
