using NOI_Hackathon_Summer_Edition_2019_API.Models.ViewModels;

namespace NOI_Hackathon_Summer_Edition_2019_API.Controllers {
	public class TouristInformation
	{
		public FaceRecognitionFilter FaceRecognitionFilter { get; set; }
		public int[] QuestionResponseIds { get; set; }
	}
}