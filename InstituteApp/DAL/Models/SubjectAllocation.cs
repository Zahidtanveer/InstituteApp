using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class SubjectAllocation
    {
        public int Id { get; set; }

        public int DepartmentId { get; set; }
        [ForeignKey("DepartmentId")]
        public virtual Department department { get; set; }

        public int TeacherId { get; set; }
        [ForeignKey("TeacherId")]
        public virtual Employee employee { get; set; }

        public int CourseId { get; set; }
        [ForeignKey("CourseId")]
        public virtual Course course { get; set; }

        public int BatchId { get; set; }
        [ForeignKey("BatchId")]
        public virtual Batch batch { get; set; }

        public int SubjectId { get; set; }
        [ForeignKey("SubjectId")]
        public virtual Subjects subject { get; set; }

    }
}
