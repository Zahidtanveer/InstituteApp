﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
   public class StudentCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Student> students { get; set; }
    }
}
