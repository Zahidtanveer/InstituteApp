﻿using DAL.Models;
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
        int UpdateStudentRollNo(Dictionary<int, string> studentDict);
        IEnumerable<Student> FilterStudent(string course, string batch,string date);


        int AddStudentCategory(StudentCategory StudentCategory);
        int UpdateStudentCategory(StudentCategory StudentCategory);
        IEnumerable<StudentCategory> GetAllStudentCategoryData();
        StudentCategory GetStudentCategoryData(int id);
        int DeleteStudentCategory(int id);
        int MarkDailyStudentAttedance(Dictionary<int, bool> studentDict);
        IEnumerable<StudentAttendance> DailyStudentAttedance();
        IEnumerable<StudentAttendance> FilterStudentAttendance(string course, string batch, DateTime date);
    }
}
