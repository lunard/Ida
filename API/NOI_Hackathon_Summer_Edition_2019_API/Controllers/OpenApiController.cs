using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using NOI_Hackathon_Summer_Edition_2019_API.Models;
using RestSharp;

namespace NOI_Hackathon_Summer_Edition_2019_API.Controllers
{
	[Route("api/[controller]")]
	public class OpenApiController : Controller
	{
		[HttpGet("weather")]
		public ActionResult<Weather> GetWeatherInfo()
		{
			var restClient = new RestClient("http://tourism.opendatahub.bz.it");
			var restRequest = new RestRequest("/api/Weather?language=en");

			var restResponse = restClient.Execute(restRequest);

			var x = JsonConvert.DeserializeObject<Weather>(restResponse.Content);
			return x;
		}
	}
}