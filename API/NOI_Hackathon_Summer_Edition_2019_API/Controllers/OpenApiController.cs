using Microsoft.AspNetCore.Mvc;

namespace NOI_Hackathon_Summer_Edition_2019_API.Controllers
{
	[Route("api/[controller]")]
	public class OpenApiSController : Controller
	{
		[HttpGet("weather")]
		public ActionResult GetWeatherInfo()
		{
			return null;
		}
	}
}