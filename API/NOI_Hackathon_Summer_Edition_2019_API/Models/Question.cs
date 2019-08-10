namespace NOI_Hackathon_Summer_Edition_2019_API.Models
{
	public class Question
	{
		public string Q { get; set; }
		public int Id { get; set; }
		public Question NextQuestion1 { get; set; }
		public Question NextQuestion2 { get; set; }
        public string ImageUrl { get; set; }
    }
}