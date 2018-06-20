using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
   public interface IReligionRepository:IRepository<Religion>
    {
        int AddReligion(Religion religion);
        int UpdateReligion(Religion religion);
        IEnumerable<Religion> GetAllReligionData();
        Religion GetReligionData(int id);
        int DeleteReligion(int id);
    }
}
