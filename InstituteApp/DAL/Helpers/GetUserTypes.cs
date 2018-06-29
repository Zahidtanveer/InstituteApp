using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Helpers
{
    public static class GetUserTypes
    {

        public static List<string> Get()
        {
            var userTypes = new List<string> { "Admin", "Teacher", "Student", "Guardian" };
            return userTypes;
        }
    }

}
