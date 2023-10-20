
var js = $.noConflict();
js(document).ready(function () {
  dataload()
})

const dataload = async () => {
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

  createStructure(data);
}


function createStructure(data) {
  const dataLength = data.length;
  let incrementalNumber = 3
  if (incrementalNumber < dataLength) {
     
  }
}


















