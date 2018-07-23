using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface ISubjectRepository: IRepository<Subjects>
    {
        #region Subject
        int AddSubject(Subjects Subject);
        int UpdateSubject(Subjects Subject);
        IEnumerable<Subjects> GetAllSubjectData();
        Subjects GetSubjectData(int id);
        int DeleteSubject(int id);
        #endregion

        #region Assign Subject
        int AddAssignSubject(AssignedSubjects Subject);
        int UpdateAssignSubject(AssignedSubjects Subject);
        IEnumerable<AssignedSubjects> GetAllAssignSubjectData();
        AssignedSubjects GetAssignSubjectData(int id);
        int DeleteAssignSubject(int id);
        #endregion

        #region Subject Allocation
        int AddSubjectAllocation(SubjectAllocation subjectAllocation);
        int UpdateSubjectAllocation(SubjectAllocation subjectAllocation);
        IEnumerable<SubjectAllocation> GetAllSubjectAllocationData();
        SubjectAllocation GetSubjectAllocationData(int id);
        int DeleteSubjectAllocation(int id);
        #endregion
      
        #region Elective Subject
        int AddElectiveSubject(ElectiveSubject electiveSubject);
        int UpdateElectiveSubject(ElectiveSubject electiveSubject);
        IEnumerable<ElectiveSubject> GetAllElectiveSubjectData();
        ElectiveSubject GetElectiveSubjectData(int id);
        int DeleteElectiveSubject(int id);
        #endregion

    }
}
