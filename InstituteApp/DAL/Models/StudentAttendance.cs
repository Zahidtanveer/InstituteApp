using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class StudentAttendance
    {
        public int Id { get; set; }
        public DateTime AttendanceDate { get; set; }
        public string Year { get; set; }
        public string Month { get; set; }
        public string Day { get; set; }
        public bool IsPresent { get; set; }
        //if Subject wise
        public string Subject { get; set; }
        public string SubjectTeacher { get; set; }


        public int CourseId { get; set; }
        [ForeignKey("CourseId")]
        public virtual Course course { get; set; }

        public int BatchId { get; set; }
        [ForeignKey("BatchId")]
        public virtual Batch batch { get; set; }

        public int BatchTeacherId { get; set; }
        [ForeignKey("BatchTeacherId")]
        public virtual AllocatedBatchTeacher allocatedBatchTeacher { get; set; }
       
        public int StudentId { get; set; }
        [ForeignKey("StudentId")]
        public virtual Student student { get; set; }

    }
}
