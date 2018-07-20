using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class AssignedSubjects
    {
        public int Id { get; set; }

        public int CourseId { get; set; }
        [ForeignKey("CourseId")]
        public virtual Course course{get; set;}

        public int BatchId { get; set; }
        [ForeignKey("BatchId")]
        public virtual Batch batch { get; set; }

        public int SubjectId { get; set; }
        [ForeignKey("SubjectId")]
        public virtual Subjects subject { get; set; }

    }
}
