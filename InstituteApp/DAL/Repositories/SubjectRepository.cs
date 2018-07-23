using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class SubjectRepository: Repository<Subjects>, ISubjectRepository
    {
        public SubjectRepository(ApplicationDbContext context) : base(context) { }

        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        #region Subjects
        public int AddSubject(Subjects Subject)
        {
            try
            {
                _appContext.subjects.Add(Subject);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Subjects> GetAllSubjectData()
        {
            try
            {
                return _appContext.subjects.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Subjects GetSubjectData(int id)
        {
            try
            {
                Subjects Subject = _appContext.subjects.Find(id);
                return Subject;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateSubject(Subjects Subject)
        {
            try
            {
                _appContext.Entry(Subject).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int DeleteSubject(int id)
        {
            try
            {
                Subjects subject = _appContext.subjects.Find(id);
                _appContext.subjects.Remove(subject);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        #region Assign Subject
        public int AddAssignSubject(AssignedSubjects subject)
        {
            try
            {
                _appContext.assignedSubject.Add(subject);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<AssignedSubjects> GetAllAssignSubjectData()
        {
            try
            {
                return _appContext.assignedSubject
                    .Include(c=>c.course)
                    .Include(b=>b.batch)
                    .Include(s=>s.subject).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public AssignedSubjects GetAssignSubjectData(int id)
        {
            try
            {
                AssignedSubjects Subject = _appContext.assignedSubject.Find(id);
                return Subject;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateAssignSubject(AssignedSubjects assignSubject)
        {
            try
            {
                _appContext.Entry(assignSubject).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int DeleteAssignSubject(int id)
        {
            try
            {
                AssignedSubjects subject = _appContext.assignedSubject.Find(id);
                _appContext.assignedSubject.Remove(subject);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        #region Subject Allocation
        public int AddSubjectAllocation(SubjectAllocation subjectAllocation)
        {
            try
            {
                _appContext.subjectAllocation.Add(subjectAllocation);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<SubjectAllocation> GetAllSubjectAllocationData()
        {
            try
            {
                return _appContext.subjectAllocation
                    .Include(x=>x.department)
                    .Include(x=>x.employee)
                    .Include(c => c.course)
                    .Include(b => b.batch)
                    .Include(s => s.subject)
                    .ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public SubjectAllocation GetSubjectAllocationData(int id)
        {
            try
            {
                SubjectAllocation subjectAllocation = _appContext.subjectAllocation.Find(id);
                return subjectAllocation;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateSubjectAllocation(SubjectAllocation subjectAllocation)
        {
            try
            {
                _appContext.Entry(subjectAllocation).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int DeleteSubjectAllocation(int id)
        {
            try
            {
                SubjectAllocation subjectAllocation = _appContext.subjectAllocation.Find(id);
                _appContext.subjectAllocation.Remove(subjectAllocation);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion

        #region Elective Subject 
        public int AddElectiveSubject(ElectiveSubject electiveSubject)
        {
            try
            {
                _appContext.electiveSubjects.Add(electiveSubject);
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<ElectiveSubject> GetAllElectiveSubjectData()
        {
            try
            {
                return _appContext.electiveSubjects
                    .Include(c => c.course)
                    .Include(b => b.batch)
                    .Include(s => s.subject)
                    .Include(x => x.student)
                    .ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public ElectiveSubject GetElectiveSubjectData(int id)
        {
            try
            {
                ElectiveSubject electiveSubject = _appContext.electiveSubjects.Find(id);
                return electiveSubject;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateElectiveSubject(ElectiveSubject ElectiveSubject)
        {
            try
            {
                _appContext.Entry(ElectiveSubject).State = EntityState.Modified;
                _appContext.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int DeleteElectiveSubject(int id)
        {
            try
            {
                ElectiveSubject electiveSubject = _appContext.electiveSubjects.Find(id);
                _appContext.electiveSubjects.Remove(electiveSubject);
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
