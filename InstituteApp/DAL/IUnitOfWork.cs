using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IUnitOfWork
    {
       
        IInstituteRepository Institute { get; }
        IAcadamicRepository Acadamics { get; }
        ICasteRepository Caste { get; }
        IReligionRepository Religion { get; }
        ICourseRepository Course { get; }
        IBatchRepository Batch { get; }
        ISyllabusRepository Syllabus { get; }
        IAllocatedBatchTeacherRepository AllocatedBatchTeacher { get;  }
        IUserTypesRepository UserTypes { get; }
        IDepartmentRepository Department { get; }
        IDesignationRepository Designation { get; }
        IEmployeeRepository Employee { get; }
        int SaveChanges();
    }
}
