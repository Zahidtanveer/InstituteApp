using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories.Interfaces
{
   public interface ICountryRepository:IRepository<Country>
    {
        IEnumerable<Country> GetAllCountriesData();
        IEnumerable<State> GetAllStatesData();
    }
}
