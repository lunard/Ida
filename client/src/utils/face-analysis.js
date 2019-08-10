import $ from 'jquery';

const faceAnalysis = data => {
  var faceResult = {
    peopleCount: data.length,
    people: [],
  };

  $.each(data, (index, value) => {
    var emotions = value.faceAttributes.emotion;
    var emotionsRatings = [];
    for (let index = 0; index < Object.keys(emotions).length; index++) {
      emotionsRatings.push(parseFloat(emotions[Object.keys(emotions)[index]]));
    }
    var emotionWithHighestRating = $.inArray(
      Math.max.apply(Math, emotionsRatings),
      emotionsRatings
    );
    var mostRatedEmotion = Object.keys(emotions)[emotionWithHighestRating];
    var currentPersonData = {
      age: value.faceAttributes.age,
      gender: {
        name: value.faceAttributes.gender,
        id: value.faceAttributes.gender === 'male' ? 1 : 2,
      },
      emotion: {
        name: mostRatedEmotion,
        id: emotionWithHighestRating,
      },
    };

    faceResult.people.push(currentPersonData);
  });

  // Group analisys
  var ages = $.map(faceResult.people, (people, index) => {
    return people.age;
  });
  if (faceResult.peopleCount === 1) {
    faceResult.groupType = { name: 'solo', id: 1 };
  } else if (faceResult.peopleCount === 2) {
    if (Math.max.apply(Math, ages) - Math.min.apply(Math, ages) < 15)
      faceResult.groupType = { name: 'couple', id: 2 };
    else faceResult.groupType = { name: 'group', id: 3 };
  } else if (faceResult.peopleCount > 2) {
    faceResult.groupType = { name: 'group', id: 3 };
  }
  return faceResult;
};
export default faceAnalysis;