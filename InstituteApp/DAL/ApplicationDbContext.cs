﻿using DAL.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using DAL.Models.Interfaces;

namespace DAL
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, string>
    {
        public string CurrentUserId { get; set; }

        public DbSet<Institute> Institutes { get; set; }
        public DbSet<Acadamic> Acadamics { get; set; }
        public DbSet<Caste> Castes { get; set; }
        public DbSet<Religion> Religions { get; set; }
        public DbSet<Course> courses { get; set; }
        public DbSet<Batch> batches { get; set; }
        public DbSet<Syllabus> syllabus { get; set; }

        public DbSet<Department> departments { get; set; }
        public DbSet<Designation> designations { get; set; }
        public DbSet<Country> countries { get; set; }
        public DbSet<State> States { get; set; }
        public DbSet<UserType> userTypes { get; set; }

        public DbSet<Guardian> guardians { get; set; }
        public DbSet<StudentCategory> studentCategories { get; set; }
        public DbSet<Student> students { get; set; }
        public DbSet<StudentAttendance> studentAttendances { get; set; }
        public DbSet<Employee> employees { get; set; }
        public DbSet<EmployeeAttendance> employeeAttendances { get; set; }
        public DbSet<Leave> leaves { get; set; }
        public DbSet<LeaveCategory> leaveCategories { get; set; }
        public DbSet<ContactDetails> contactDetails { get; set; }
        public DbSet<PersonalDetails> personalDetails { get; set; }
        public DbSet<AllocatedBatchTeacher> allocatedBatchTeachers { get; set; }
        public DbSet<TimeTable> timeTables { get; set; }

        //Subjects
        public DbSet<Subjects> subjects { get; set; }
        public DbSet<AssignedSubjects> assignedSubject { get; set; }
        public DbSet<SubjectAllocation> subjectAllocation { get; set; }
        public DbSet<ElectiveSubject> electiveSubjects { get; set; }


        public ApplicationDbContext(DbContextOptions options) : base(options)
        { }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ApplicationUser>().HasMany(u => u.Claims).WithOne().HasForeignKey(c => c.UserId).IsRequired().OnDelete(DeleteBehavior.Cascade);
            builder.Entity<ApplicationUser>().HasMany(u => u.Roles).WithOne().HasForeignKey(r => r.UserId).IsRequired().OnDelete(DeleteBehavior.Cascade);

            builder.Entity<ApplicationRole>().HasMany(r => r.Claims).WithOne().HasForeignKey(c => c.RoleId).IsRequired().OnDelete(DeleteBehavior.Cascade);
            builder.Entity<ApplicationRole>().HasMany(r => r.Users).WithOne().HasForeignKey(r => r.RoleId).IsRequired().OnDelete(DeleteBehavior.Cascade);


            builder.Entity<Institute>().ToTable($"App{nameof(this.Institutes)}");
            builder.Entity<Acadamic>().ToTable($"App{nameof(this.Acadamics)}");
            builder.Entity<Caste>().ToTable("caste");
            builder.Entity<Religion>().ToTable("religion");

            builder.Entity<State>().HasOne(s => s.country).WithMany(c => c.states).HasForeignKey(s => s.CountryId);
            builder.Entity<Batch>() .HasOne(c => c.course).WithMany(b => b.batches).HasForeignKey(c => c.CourseId);
            builder.Entity<Course>().HasOne(c => c.syllabus).WithMany(b => b.courses).HasForeignKey(c => c.SyllabusName);

            builder.Entity<AllocatedBatchTeacher>().HasOne(c => c.course).WithMany(b => b.batchTeacher).HasForeignKey(c => c.CourseId);
            builder.Entity<AllocatedBatchTeacher>().HasOne(c => c.batches).WithMany(b => b.batchTeachers).HasForeignKey(c => c.BatchId);

            builder.Entity<PersonalDetails>().HasOne(e => e.employee).WithOne(p => p.personalDetails).IsRequired(false);
            builder.Entity<PersonalDetails>().HasOne(e => e.student).WithOne(p => p.personalDetails).IsRequired(false);

            builder.Entity<ContactDetails>().HasOne(e => e.student).WithOne(c => c.contactDetails).IsRequired(false);
            builder.Entity<ContactDetails>().HasOne(e => e.employee).WithOne(c => c.contactDetails).IsRequired(false);
            builder.Entity<ContactDetails>().HasOne(e => e.guardian).WithOne(c => c.ContactDetails).IsRequired(false);

            builder.Entity<TimeTable>().HasOne(e => e.employee).WithMany(c => c.timeTable).IsRequired(false);
            builder.Entity<TimeTable>().HasOne(e => e.subject).WithMany(c => c.timeTable).IsRequired(false);
           



        }




        public override int SaveChanges()
        {
            UpdateAuditEntities();
            return base.SaveChanges();
        }


        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            UpdateAuditEntities();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }


        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            UpdateAuditEntities();
            return base.SaveChangesAsync(cancellationToken);
        }


        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default(CancellationToken))
        {
            UpdateAuditEntities();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }


        private void UpdateAuditEntities()
        {
            var modifiedEntries = ChangeTracker.Entries()
                .Where(x => x.Entity is IAuditableEntity && (x.State == EntityState.Added || x.State == EntityState.Modified));


            foreach (var entry in modifiedEntries)
            {
                var entity = (IAuditableEntity)entry.Entity;
                DateTime now = DateTime.UtcNow;

                if (entry.State == EntityState.Added)
                {
                    entity.CreatedDate = now;
                    entity.CreatedBy = CurrentUserId;
                }
                else
                {
                    base.Entry(entity).Property(x => x.CreatedBy).IsModified = false;
                    base.Entry(entity).Property(x => x.CreatedDate).IsModified = false;
                }

                entity.UpdatedDate = now;
                entity.UpdatedBy = CurrentUserId;
            }
        }
    }
}
