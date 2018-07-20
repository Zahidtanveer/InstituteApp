using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface ISubjectRepository: IRepository<Subjects>
    {
        int AddSubject(Subjects Subject);
        int UpdateSubject(Subjects Subject);
        IEnumerable<Subjects> GetAllSubjectData();
        Subjects GetSubjectData(int id);
        int DeleteSubject(int id);

        int AddAssignSubject(AssignedSubjects Subject);
        int UpdateAssignSubject(AssignedSubjects Subject);
        IEnumerable<AssignedSubjects> GetAllAssignSubjectData();
        AssignedSubjects GetAssignSubjectData(int id);
        int DeleteAssignSubject(int id);
    }
}
