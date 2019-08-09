namespace NOI_Hackathon_Summer_Edition_2019_API.Controllers {
	public class Question
	{
		public string Q { get; set; }
		public Question NextQuestion1 { get; set; }
		public Question NextQuestion2 { get; set; }
	}
}