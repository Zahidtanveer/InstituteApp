using DAL.Models;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL.Repositories
{
    public class UserTypeRepository : Repository<UserType>, IUserTypesRepository
    {
        public UserTypeRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        public IEnumerable<UserType> GetAllUserTypesData()
        {
            try
            {
                return _appContext.userTypes.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
