using DAL.Models;
using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repositories
{
    public class AcadamicRepository:Repository<Acadamic>,IAcadamicRepository
    {
        public AcadamicRepository(ApplicationDbContext context) : base(context) { }


        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
    }
}
