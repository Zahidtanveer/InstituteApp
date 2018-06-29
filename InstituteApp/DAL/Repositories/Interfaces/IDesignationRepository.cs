using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface IDesignationRepository: IRepository<Designation>
    {
        int AddDesignation(Designation designation);
        int UpdateDesignation(Designation designation);
        IEnumerable<Designation> GetAllDesignationData();
        Designation GetDesignationData(int id);
        int DeleteDesignation(int id);
    }
}
