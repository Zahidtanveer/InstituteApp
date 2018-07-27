using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class TimeTable
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DayOfWeek { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }

        public int CourseId { get; set; }
        [ForeignKey("CourseId")]
        public Course course { get; set; }

        public int BatchId { get; set; }
        [ForeignKey("BatchId")]
        public Batch batch { get; set; }

        public int TeacherId { get; set; }
        [ForeignKey("TeacherId")]
        public Employee employee { get; set; }

        public int SubjectId { get; set; }
        [ForeignKey("SubjectId")]
        public Subjects subject { get; set; }

        public bool IsActive { get; set; }
     }
}
