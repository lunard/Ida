using System;

namespace NOI_Hackathon_Summer_Edition_2019_API.Models
{
	public class Forecast
	{
		public DateTime date { get; set; }
		public int TempMaxmax { get; set; }
		public int TempMaxmin { get; set; }
		public int TempMinmax { get; set; }
		public int TempMinmin { get; set; }
		public string Weatherdesc { get; set; }
		public string Weathercode { get; set; }
		public string WeatherImgurl { get; set; }
		public string Reliability { get; set; }
	}
}