using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface ISyllabusRepository: IRepository<Syllabus>
    {
        int AddSyllabus(Syllabus syllabus);
        int UpdateSyllabus(Syllabus syllabus);
        IEnumerable<Syllabus> GetAllSyllabusData();
        Syllabus GetSyllabusData(int id);
        int DeleteSyllabus(int id);

    }
}
