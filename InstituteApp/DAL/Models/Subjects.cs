﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Subjects
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }

        public virtual ICollection<AssignedSubjects> assignedSubjects { get; set; }
        public virtual ICollection<TimeTable> timeTable { get; set; }
    }
}
