﻿// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Repositories;
using DAL.Repositories.Interfaces;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        readonly ApplicationDbContext _context;

        ICustomerRepository _customers;
        IProductRepository _products;
        IOrdersRepository _orders;
        IInstituteRepository _institute;
        IAcadamicRepository _acadamic;
        ICasteRepository _caste;
        IReligionRepository _religion;
        ICourseRepository _course;
        IBatchRepository _batch;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }



        public ICustomerRepository Customers
        {
            get
            {
                if (_customers == null)
                    _customers = new CustomerRepository(_context);

                return _customers;
            }
        }



        public IProductRepository Products
        {
            get
            {
                if (_products == null)
                    _products = new ProductRepository(_context);

                return _products;
            }
        }



        public IOrdersRepository Orders
        {
            get
            {
                if (_orders == null)
                    _orders = new OrdersRepository(_context);

                return _orders;
            }
        }

        public IInstituteRepository Institute
        {
            get
            {
                if (_institute == null)
                    _institute = new InstituteRepository(_context);
                return _institute;
            }
        }

        public IAcadamicRepository Acadamics
        {
            get
            {
                if (_acadamic == null)
                    _acadamic = new AcadamicRepository(_context);
                return _acadamic;
            }
        }
      

        public ICasteRepository Caste {
            get
            {
                if (_caste == null)
                    _caste = new CasteRepository(_context);
                return _caste;
            }
        }

        public IReligionRepository Religion {

            get
            {
                if (_religion == null)
                    _religion = new ReligionRepository(_context);
                return _religion;
            }
        }

        public ICourseRepository Course
        {
            get
            {
                if (_course == null)
                    _course = new CourseRepository(_context);
                return _course;
            }
        }

        public IBatchRepository Batch
        {
            get
            {
                if (_batch == null)
                    _batch = new BatchRepository(_context);
                return _batch;
            }

        }

        public int SaveChanges()
        {
            return _context.SaveChanges();
        }
    }
}
