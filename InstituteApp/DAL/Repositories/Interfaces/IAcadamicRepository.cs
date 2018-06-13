using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
    public interface IAcadamicRepository: IRepository<Acadamic>
    {
        int AddAcadamic(Acadamic acadamic);
        int UpdateAcadamic(Acadamic acadamic);
        IEnumerable<Acadamic> GetAllAcadamicData();
        Acadamic GetAcadamicData(int id);
        int DeleteAcadamic(int id);
    }
}
