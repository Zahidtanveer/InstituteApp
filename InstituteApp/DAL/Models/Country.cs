using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class Country
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<State> states { get; set; }
    }

}
