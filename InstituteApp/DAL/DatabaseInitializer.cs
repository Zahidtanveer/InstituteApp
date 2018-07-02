using DAL.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Core;
using DAL.Core.Interfaces;
using DAL.Helpers;

namespace DAL
{
    public interface IDatabaseInitializer
    {
        Task SeedAsync();
    }

    public class DatabaseInitializer : IDatabaseInitializer
    {
        private readonly ApplicationDbContext _context;
        private readonly IAccountManager _accountManager;
        private readonly ILogger _logger;

        public DatabaseInitializer(ApplicationDbContext context, IAccountManager accountManager, ILogger<DatabaseInitializer> logger)
        {
            _accountManager = accountManager;
            _context = context;
            _logger = logger;
        }

        public async Task SeedAsync()
        {

            await _context.Database.MigrateAsync().ConfigureAwait(false);


            if (!await _context.Users.AnyAsync())
            {
                _logger.LogInformation("Generating inbuilt accounts");

                const string adminRoleName = "administrator";
                const string userRoleName = "user";

                await EnsureRoleAsync(adminRoleName, "Default administrator", ApplicationPermissions.GetAllPermissionValues());
                await EnsureRoleAsync(userRoleName, "Default user", new string[] { });

                await CreateUserAsync("admin", "tempP@ss123", "Inbuilt Administrator", "admin@smartschool.com", "+1 (123) 000-0000", new string[] { adminRoleName });
                await CreateUserAsync("user", "tempP@ss123", "Inbuilt Standard User", "user@smartschool.com", "+1 (123) 000-0001", new string[] { userRoleName });

                _logger.LogInformation("Inbuilt account generation completed");
            }



            if (!await _context.Institutes.AnyAsync() && !await _context.countries.AnyAsync() && !await _context.userTypes.AnyAsync())
            {
                _logger.LogInformation("Seeding initial data");


                List<Country> countries = new List<Country>();
                List<State> states = new List<State>();
                GetCountriesData.Get(countries, states);
                foreach (var c in countries)
                {
                    Country country = new Country
                    {
                        Name = c.Name
                    };
                    _context.countries.Add(country);
                    await _context.SaveChangesAsync();
                }
                foreach (var s in states)
                {
                    State state = new State
                    {
                        Name = s.Name,
                        CountryId = s.CountryId,
                    };
                    _context.States.Add(state);
                    await _context.SaveChangesAsync();
                }

                var userTypes = GetUserTypes.Get();
                foreach (var type in userTypes)
                {
                    UserType userType = new UserType
                    {
                        Name = type
                    };
                    _context.userTypes.Add(userType);
                    await _context.SaveChangesAsync();

                }

                Institute ins_1 = new Institute
                {
                    Name = "Institute 1",
                    Address = "test Address 1",
                    Email = "institute1@test.com",
                    Mobile = "03001234567",
                    Phone = "0421234567",
                    Fax = "0421234567",
                    Code = "024",
                    Country = "Pakistan",
                    TimeZone = "GMT+5",
                    Admin = "admin",
                    Languange = "English",
                    CreatedBy = "admin",
                    UpdatedBy = "admin",
                    CreatedDate = DateTime.UtcNow,
                    UpdatedDate = DateTime.UtcNow


                };
                Institute ins_2 = new Institute
                {
                    Name = "Institute 2",
                    Address = "test Address 2",
                    Email = "institute2@test.com",
                    Mobile = "03001234567",
                    Phone = "0421234567",
                    Fax = "0421234567",
                    Code = "029",
                    Country = "Pakistan",
                    TimeZone = "GMT+5",
                    Admin = "admin",
                    Languange = "English",
                    CreatedBy = "admin",
                    UpdatedBy = "admin",
                    CreatedDate = DateTime.UtcNow,
                    UpdatedDate = DateTime.UtcNow


                };
                _context.Institutes.Add(ins_1);
                _context.Institutes.Add(ins_2);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Seeding initial data completed");
            }
        }



        private async Task EnsureRoleAsync(string roleName, string description, string[] claims)
        {
            if ((await _accountManager.GetRoleByNameAsync(roleName)) == null)
            {
                ApplicationRole applicationRole = new ApplicationRole(roleName, description);

                var result = await this._accountManager.CreateRoleAsync(applicationRole, claims);

                if (!result.Item1)
                    throw new Exception($"Seeding \"{description}\" role failed. Errors: {string.Join(Environment.NewLine, result.Item2)}");
            }
        }

        private async Task<ApplicationUser> CreateUserAsync(string userName, string password, string fullName, string email, string phoneNumber, string[] roles)
        {
            ApplicationUser applicationUser = new ApplicationUser
            {
                UserName = userName,
                FullName = fullName,
                Email = email,
                PhoneNumber = phoneNumber,
                EmailConfirmed = true,
                IsEnabled = true
            };

            var result = await _accountManager.CreateUserAsync(applicationUser, roles, password);

            if (!result.Item1)
                throw new Exception($"Seeding \"{userName}\" user failed. Errors: {string.Join(Environment.NewLine, result.Item2)}");


            return applicationUser;
        }
    }
}
