using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface IInstituteRepository : IRepository<Institute>
    {
        int AddInstitute(Institute institute);
        int UpdateInstitute(Institute institute);
        IEnumerable<Institute> GetAllInstituteData();
        Institute GetInstituteData(int id);
        int DeleteInstitute(int id);
    }
}
