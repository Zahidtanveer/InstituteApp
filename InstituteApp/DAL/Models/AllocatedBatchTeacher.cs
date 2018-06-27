using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
   public class AllocatedBatchTeacher
    {
        [Key]
        public int Id { get; set; }
        public int CourseId { get; set; }
        public int BatchId { get; set; }
        public int TeacherId { get; set; }
        [ForeignKey("CourseId")]
        public virtual Course course { get; set; }
        [ForeignKey("BatchId")]
        public virtual Batch batches { get; set; }
        

    }
}
