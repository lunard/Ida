using System;

namespace NOI_Hackathon_Summer_Edition_2019_API.Models
{
	public class Condition
	{
		public DateTime date { get; set; }
		public string Title { get; set; }
		public string WeatherCondition { get; set; }
		public string WeatherImgurl { get; set; }
		public string Temperatures { get; set; }
		public string Weatherdesc { get; set; }
	}
}