﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class Batch
    {
        public int Id { get; set; }
       
        public int CourseId { get; set; }
        public string Name { get; set; }
        public DateTime SatrtDate { get; set;}
        public DateTime EndDate { get; set; }
        public string MaxNumberOfStudent { get; set; }
        [ForeignKey("CourseId")]
        public virtual Course course { get; set; }
        public virtual ICollection<AllocatedBatchTeacher> batchTeachers { get; set; }

        public virtual ICollection<AssignedSubjects> assignedSubjects { get; set; }
        public virtual ICollection<TimeTable> timeTable { get; set; }

    }
}
