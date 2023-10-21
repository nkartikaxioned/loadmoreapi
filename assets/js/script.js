
let initialValue = 0,
   cardsToDisplay = 6;

var js = $.noConflict();

//function to fetch data from api
const fetchData = async () => {
  try {
    var result = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!result) {
      throw new Error('Failed to fetch data');
    } else {
      var data = await result.json();
      console.log(data);
    }
  } catch (error) {
    alert(error);
  }

  createCards(data);
}

//function to create cards
function createCards(data) {

  const container = js('.img-container');
  const dataLength = data.length;
  const end = initialValue + cardsToDisplay;
 for(let i = initialValue; i < end ; i++ ){
    if( i >= dataLength ) {
      js('.button').hide();
      break;
    }
   const post = data[i];
   const card = js('<li class="card"></li>');
   const heading = js('<h2></h2>').text(post.title);
   const paragraph = js('<p></p>').text(post.body);

   card.append(heading,paragraph);
   container.append(card);
 }
  initialValue = end;
}

js('.button').click(function () {
  fetchData();
});

js(document).ready(function () {
  fetchData();
});  









