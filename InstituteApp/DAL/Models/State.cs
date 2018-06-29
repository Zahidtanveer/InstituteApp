using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
    public class State
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int CountryId { get; set; }
        [ForeignKey("CountryId")]
        public virtual Country country { get; set; }
    }
}
