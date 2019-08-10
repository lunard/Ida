using System;

namespace NOI_Hackathon_Summer_Edition_2019_API.Models
{
	public class Stationdata
	{
		public DateTime date { get; set; }
		public int Id { get; set; }
		public string CityName { get; set; }
		public string WeatherCode { get; set; }
		public string WeatherDesc { get; set; }
		public string WeatherImgUrl { get; set; }
		public int MinTemp { get; set; }
		public int Maxtemp { get; set; }
	}
}