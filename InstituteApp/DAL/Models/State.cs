using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models
{
    public class State
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string CountryId { get; set; }
        public virtual Country country { get; set; }
    }
}
