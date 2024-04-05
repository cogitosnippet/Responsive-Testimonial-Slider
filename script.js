const next_button = document.getElementById('next-button');
const prev_button = document.getElementById('prev-button');
const dashboard = document.getElementById('dashboard-id');
const user_content = document.getElementById('user-content');
const user_image = document.getElementById('user-image-id');
const user_name = document.getElementById('user-name');
const user_designation = document.getElementById('user-designation');

let currentSlide = 0;

  const array = [
  {
    index: 0,
    content: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
    'image-url': `images/image-tanya.jpg`,
    'user-name': `Tanya Sinclair`,
    designation: `UX Engineer`
  },
  {
    index: 1,
    content: `If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer.`,
    'image-url': `images/image-john.jpg`,
    'user-name': `John Tarkpor`,
    designation: `Junior Front End Developer`
  },

  // for testing
  // {
  //   index: 2,
  //   content: `hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi.`,
  //   'image-url': `images/image-tanya.jpg`,
  //   'user-name': `Abc Xyz`,
  //   designation: `Software Enginer`
  // },
  // {
  //   index: 3,
  //   content: ` "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello.`,
  //   'image-url': `images/image-john.jpg`,
  //   'user-name': `Geek Geek`,
  //   designation: `Data Engineer`
  // }
]


next_button.addEventListener('click', () => {

  currentSlide ++;
  let content_ = ``;
  let image_source = ``;
  let user = ``;
  let designation_ = ``;
  if(currentSlide>=array.length){
    currentSlide = array.length-1;
    content_ = array[currentSlide].content;
    image_source = array[currentSlide]["image-url"];
    user = array[currentSlide]["user-name"];
    designation_ = array[currentSlide].designation;
  }else{
    content_ = array[currentSlide].content;
    image_source = array[currentSlide]["image-url"];
    user = array[currentSlide]["user-name"];
    designation_ = array[currentSlide].designation;
  }

  document.getElementById('dashboard-id').style.opacity = 0;

  setTimeout(function () {
    document.getElementById('user-content').innerHTML = `${content_}`;
    document.getElementById('user-image-id').src = `${image_source}`;
    user_name.innerHTML = `${user}`;
    user_designation.innerHTML = `${designation_}`;

    document.getElementById('dashboard-id').style.opacity = 1;
  }, 500);

})


prev_button.addEventListener('click', () => {

  currentSlide --;
  let content_ =``;
  let image_source = ``;
  let user = ``;
  let designation_ = ``;
  if(currentSlide<=0){
    currentSlide = 0;
    content_ = array[currentSlide].content;
    image_source = array[currentSlide]["image-url"];
    user = array[currentSlide]["user-name"];
    designation_ = array[currentSlide].designation;
  }else{
    content_ = array[currentSlide].content;
    image_source = array[currentSlide]["image-url"];
    user = array[currentSlide]["user-name"];
    designation_ = array[currentSlide].designation;
  }
  document.getElementById('dashboard-id').style.opacity = 0;

  setTimeout(()=>{
    document.getElementById('user-content').innerHTML = `${content_}`;
    document.getElementById('user-image-id').src = `${image_source}`;
    user_name.innerHTML = `${user}`;
    user_designation.innerHTML = `${designation_}`;

    document.getElementById('dashboard-id').style.opacity =1;
  },500)


})

