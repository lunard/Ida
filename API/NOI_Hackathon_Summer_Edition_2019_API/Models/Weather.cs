using System;
using System.Collections.Generic;

namespace NOI_Hackathon_Summer_Edition_2019_API.Models
{
	public class Weather
	{
		public int Id { get; set; }
		public DateTime date { get; set; }
		public string evolutiontitle { get; set; }
		public object evolution { get; set; }
		public List<Condition> Conditions { get; set; }
		public List<Forecast> Forecast { get; set; }
		public List<Mountain> Mountain { get; set; }
		public List<Stationdata> Stationdata { get; set; }
	}
}