using Microsoft.AspNetCore.Mvc;

namespace NOI_Hackathon_Summer_Edition_2019_API.Controllers
{
	public class Question
	{
		public string Q { get; set; }
		public Question NextQuestion1 { get; set; }
		public Question NextQuestion2 { get; set; }
	}

	[Route("api/[controller]")]
	[ApiController]
	public class TouristController : ControllerBase
	{
		// GET api/values
		[HttpGet("questionTree")]
		public ActionResult<Question> GetQuestionTree()
		{
			//this tree is static for now, but in a productive environment options will be influenced by the kiosk location
			return new Question
				   {
					   NextQuestion1 = new Question
									   {
										   Q = "Historical cities",
										   NextQuestion1 = new Question
														   {
															   Q = "Local Eats",
															   NextQuestion1 = new Question
																			   {
																				   Q = "Famed Landmarks"
																			   },
															   NextQuestion2 = new Question
																			   {
																				   Q = "Cool neighborhoods"
																			   }
														   },
										   NextQuestion2 = new Question
														   {
															   Q = "Luxury Treats"
														   }
									   },
					   NextQuestion2 = new Question
									   {
										   Q = "Beautiful landscapes",
										   NextQuestion1 = new Question
														   {
															   Q = "Supreme relaxation",
															   NextQuestion1 = new Question
																			   {
																				   Q = "Impressive local music"
																			   },
															   NextQuestion2 = new Question
																			   {
																				   Q = "Luxury Treats"
																			   }
														   },
										   NextQuestion2 = new Question
														   {
															   Q = "Tremendous Hike in the mountains"
														   }
									   }
				   };
		}

		// POST api/values
		[HttpPost]
		public void Post([FromBody] string value) { }

		// PUT api/values/5
		[HttpPut("{id}")]
		public void Put(int id, [FromBody] string value) { }

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public void Delete(int id) { }
	}
}