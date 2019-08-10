using System;

namespace NOI_Hackathon_Summer_Edition_2019_API.Models
{
	public class Mountain
	{
		public DateTime date { get; set; }
		public string Title { get; set; }
		public string Conditions { get; set; }
		public string Weatherdesc { get; set; }
		public string Zerolimit { get; set; }
		public string MountainImgurl { get; set; }
		public string Reliability { get; set; }
		public string Sunrise { get; set; }
		public string Sunset { get; set; }
		public string Moonrise { get; set; }
		public string Moonset { get; set; }
		public string Northcode { get; set; }
		public string Northdesc { get; set; }
		public string Northimgurl { get; set; }
		public string Southcode { get; set; }
		public string Southdesc { get; set; }
		public string Southimgurl { get; set; }
		public int Temp1000 { get; set; }
		public int Temp2000 { get; set; }
		public int Temp3000 { get; set; }
		public int Temp4000 { get; set; }
		public string Windcode { get; set; }
		public string Winddesc { get; set; }
		public string WindImgurl { get; set; }
	}
}