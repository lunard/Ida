using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using NOI_Hackathon_Summer_Edition_2019_API.Models;
using NOI_Hackathon_Summer_Edition_2019_API.Models.ViewModels;

namespace NOI_Hackathon_Summer_Edition_2019_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TouristController : ControllerBase
    {
        // GET api/values
        [HttpPost("questionTree")]
        public ActionResult<Question> GetQuestionTree([FromBody] FaceRecognitionFilter faceRecognitionFilter)
        {
            //this tree is static for now, but in a productive environment options will be influenced by the kiosk location
            return Ok(new Question
            {
                NextQuestion1 = new Question
                {
                    Id = 1,
                    Q = "Historical cities",
                    ImageUrl = GetQuestionImageDownloadUri("q1"),
                    NextQuestion1 = new Question
                    {
                        Id = 2,
                        Q = "Local Eats",
                        ImageUrl = GetQuestionImageDownloadUri("q1-1"),
                        NextQuestion1 = new Question
                        {
                            Id = 3,
                            Q = "Famed Landmarks",
                            ImageUrl = GetQuestionImageDownloadUri("q1-1-1")
                        },
                        NextQuestion2 = new Question
                        {
                            Id = 4,
                            Q = "Cool neighborhoods",
                            ImageUrl = GetQuestionImageDownloadUri("q1-1-2")
                        }
                    },
                    NextQuestion2 = new Question
                    {
                        Id = 5,
                        Q = "Luxury Treats",
                        ImageUrl = GetQuestionImageDownloadUri("q1-2")
                    }
                },
                NextQuestion2 = new Question
                {
                    Id = 6,
                    Q = "Beautiful landscapes",
                    ImageUrl = GetQuestionImageDownloadUri("q2"),
                    NextQuestion1 = new Question
                    {
                        Id = 7,
                        Q = "Supreme relaxation",
                        NextQuestion1 = new Question
                        {
                            Id = 8,
                            Q = "Impressive local music"
                        },
                        NextQuestion2 = new Question
                        {
                            Id = 9,
                            Q = "Luxury Treats"
                        }
                    },
                    NextQuestion2 = new Question
                    {
                        Id = 10,
                        Q = "Tremendous Hike in the mountains"
                    }
                }
            });
        }

        [HttpGet("questionimage")]
        public ActionResult GetImage(string imageAlias)
        {
            return File($"~/Assets/WizardResources/{imageAlias}.jpg", "image/jpeg");
        }

        // POST api/values
        [HttpPost("uniqueExperiences")]
        public ActionResult<ICollection<UniqueExperiences>> Post([FromBody] TouristInformation value)
        {
            return Ok(new List<UniqueExperiences>
                      {
                          new UniqueExperiences
                          {
                              Id = 1,
                              Name = "Unique hike to the Dolomites & the natural world",
                              Description = @"
There will always be adventure waiting in nature and hiking is the perfect way to find it. Going for hikes connects us with our roots, we become intimate with earth and learn how to ‘tune in’ to her frequency. All our senses are awakened when we spend time in Nature.
Hydrate properly. Every terrain and body is different but as a general rule of thumb you should stick to carrying about 1 litre of water for every two hours you will be hiking.
Although the hiking doesn’t require much gear other than shoes we still believe that having some essentials will help you during your journey and possibly help keep you safe if any mishaps were to occur.
",
                              AdditionalInformation = "Take the autobus 420 to get to your destination."
                          },
                          new UniqueExperiences
                          {
                              Id = 2,
                              Name = "Tri-border landmark",
                              Description = @"
Hike from the upper Val Venosta (Vinschgau) Valley, past the foot of Piz Lat Mountain, to the Cippo della Triplice Frontiera (Dreiländerstein) tri-border landmark, where the Austrian, Swiss and Italian borders meet.

You can park at Tendershof Farm near the village of Resia (Reschen Dorf). From there, follow an agricultural road leading uphill. After two bends, follow Trail No. 3, through a shady forest, up to the boundary path, which runs beneath the mighty peaks of Piz Lat Mountain and close to the national border. The way to the Cippo della Triplice Frontiera (Dreiländerstein), the tri-border landmark, where the borders of Italy, Austria and Switzerland meet, is well marked and signposted. From there you have a panoramic view of Inntal Valley, Engadine Valley and the Samnauner and Nauderer Mountains. Descent: Returning on the same trail you can enjoy the view over Lago di Resia (Reschensee) Lake and the Gruppo dell’ Ortles-Cevedale (Ortlergruppe) Mountains.
",
                              AdditionalInformation = "Best way to get there is by car."
                          },
                          new UniqueExperiences
                          {
                              Id = 3,
                              Name = "To the Brandhof hut",
                              Description = @"
Leisurely excursion from Rio Lagudndo to the Brandhof hut with a possible downhill walk to the valley.

Take the cablecar from Rablà to Rio Lagundo (1,400 m), then take trail no. 16 and follow the marker towards ""Hofschank Brandhof"" (1,044 m). The excursion lasts approx. 1 ¼ hours and is ideal for everyone: children, the elderly, etc. Please note the trail is not pram-friendly. You can also head downhill to the valley passing by Birchberg/Plaus.
",
                              AdditionalInformation = "Go to the Rio Lagundo and take the cablecar."
                          },
                          new UniqueExperiences
                          {
                              Id = 4,
                              Name = "Cima Cervina (Hirzer) Mountain",
                              Description = @"
Reach the highest peak of Val Sarentino (Sarntal) Valley from Sonvigo (Aberstückl)
DIRECTIONS

Drive through Val Sarentino (Sarntal) Valley up to the hamlet of Sonvigo (Aberstückl) (1,329 m) and on to Lahnerhof Farm (1,566 m). From there follow Trail No. 7A, turning slightly left through the woods uphill to a knoll with a cross (called Kirchberg, 1,850 m). Continue on the partly flat and uphill slopes and eroding ditches to Malga Anteran (Anteranalm) mountain pasture (2,053 m; 1.5 hours from Lahnerhof). From the hut, take the steep Trail No. 7 up to the fork, and then turn right at the fork. Continue on Trail No. 7 (a well-marked trail), past stony grassy slopes and finally over craggy ground and boulders in switchbacks up to the summit at 2,781 m; just under 2 hours from the pasture; 3.5 hours from Lahnerhof Farm. Descent: Return using the same trail; about 2.5 hours from the summit.",
                              AdditionalInformation = "Small parking area at Maso Lahner (Lahnerhof) Farm in the district of Sonvigo (Aberstückl)"
                          }
                      });
        }

        private string GetQuestionImageDownloadUri(string iA)
        {
            return $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}{Url.Action("GetImage", new { imageAlias = iA })}";
        }
    }
}