using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace NOI_Hackathon_Summer_Edition_2019_API.Models.ViewModels
{
    [DataContract]
    public class FaceRecognitionFilter
    {
        [DataMember(Name = "peopleCount")]
        public int peopleCount { get; set; }

        [DataMember(Name = "groupType")]
        public GroupType GroupType { get; set; }

        [DataMember(Name = "people")]
        public List<People> PeopleList { get; set; }

    }


    [DataContract]
    public class People
    {
        [DataMember(Name = "emotion")]
        public Emotion Emotion { get; set; }

        [DataMember(Name = "gender")]
        public Gender Gender { get; set; }

        [DataMember(Name = "gender")]
        public int Age { get; set; }

    }

    [DataContract]
    public class Gender : BaseTypeData
    {
    }

    [DataContract]
    public class Emotion : BaseTypeData
    {
    }

    [DataContract]
    public class GroupType: BaseTypeData
    {
    }

    [DataContract]
    public class BaseTypeData
    {
        [DataMember(Name = "id")]
        public int Id { get; set; }

        [DataMember(Name = "name")]
        public string Name { get; set; }
    }
}
