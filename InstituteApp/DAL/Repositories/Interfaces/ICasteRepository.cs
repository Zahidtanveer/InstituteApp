using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
   public interface ICasteRepository:IRepository<Caste>
    {
        int AddCaste(Caste caste);
        int UpdateCaste(Caste caste);
        IEnumerable<Caste> GetAllCasteData();
        Caste GetCasteData(int id);
        int DeleteCaste(int id);
    }
}
