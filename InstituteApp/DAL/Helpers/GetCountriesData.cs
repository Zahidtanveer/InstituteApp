using DAL.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace DAL.Helpers
{
    
    #region Get Countries and States Data
    public static class GetCountriesData
    {
     public static void Get(List<Country> countries, List<State> states)
        {
            using (StreamReader r = new StreamReader("Data/countriesData.json"))
            {
                string json = r.ReadToEnd();
                int i = 1;
                int j = 1;
                var countryList = JsonConvert.DeserializeObject<ListCountries>(json);

                foreach (var c in countryList.countries)
                {
                    string countryName = c.country;
                    Country country = new Country
                    {
                        Id = i,
                        Name = countryName
                    };
                    countries.Add(country);
                    foreach (string item in c.states)
                    {
                        string stateName = item;
                        State state = new State
                        {
                            Id = j,
                            Name = stateName,
                            CountryId = i
                        };
                        states.Add(state);
                        j++;
                    }

                    i++;
                }

            }
        }
    }
    #endregion
   
    #region Classes for Parsing json Data of Countries and States
    public class CountryData
    {
        public string country { get; set; }
        public List<object> states { get; set; }
    }
    public class ListCountries
    {
        public List<CountryData> countries { get; set; }
    }
    #endregion
}
