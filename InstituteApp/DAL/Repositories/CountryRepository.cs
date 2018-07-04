using DAL.Models;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class CountryRepository:Repository<Country>, ICountryRepository
    {

        public CountryRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public IEnumerable<Country> GetAllCountriesData()
        {
            try
            {

                return _appContext.countries.ToList();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<State> GetAllStatesData()
        {
            try
            {

                return _appContext.States.ToList();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
