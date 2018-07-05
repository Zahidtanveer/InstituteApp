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

      
        IInstituteRepository _institute;
        IAcadamicRepository _acadamic;
        ICasteRepository _caste;
        IReligionRepository _religion;
        ICourseRepository _course;
        IBatchRepository _batch;
        ISyllabusRepository _syllabus;
        IAllocatedBatchTeacherRepository _allocatedBatchTeacherRepository;
        IUserTypesRepository _userTypesRepository;
        IDepartmentRepository _departmentRepository;
        IDesignationRepository _designationRepository;
        IEmployeeRepository _employeeRepository;
        ICountryRepository _countryRepository;
        ILeaveRepository _leaveRepository;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
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

        public ISyllabusRepository Syllabus {

            get
            {
                if (_syllabus == null)
                    _syllabus = new SyllabusRepository(_context);
                return _syllabus;
            }
        }
        public IAllocatedBatchTeacherRepository AllocatedBatchTeacher {
            get
            {
                if (_allocatedBatchTeacherRepository == null)
                    _allocatedBatchTeacherRepository= new AllocatedBatchTeacherRepository(_context);
                return _allocatedBatchTeacherRepository;
            }
        }

        public IUserTypesRepository UserTypes
        {
            get
            {
                if (_userTypesRepository == null)
                    _userTypesRepository = new UserTypeRepository(_context);
                return _userTypesRepository;
            }
        }

        public IDepartmentRepository Department
        {
            get
            {
                if (_departmentRepository == null)
                    _departmentRepository = new DepartmentRepository(_context);
                return _departmentRepository;
            }
        }

        public IDesignationRepository Designation
        {
            get
            {
                if (_designationRepository == null)
                   _designationRepository = new DesignationRepository(_context);
                return _designationRepository;
            }
        }

        public IEmployeeRepository Employee
        {
            get
            {
                if (_employeeRepository == null)
                    _employeeRepository = new EmployeeRepository(_context);
                return _employeeRepository;
            }
        }

        public ICountryRepository Countries
        {
            get
            {
                if (_countryRepository == null)
                    _countryRepository = new CountryRepository(_context);
                return _countryRepository;
            }
        }

        public ILeaveRepository Leave
        {
            get
            {
                if (_leaveRepository == null)
                    _leaveRepository = new LeaveRepository(_context);
                return _leaveRepository;
            }
        }

        public int SaveChanges()
        {
            return _context.SaveChanges();
        }
    }
}
