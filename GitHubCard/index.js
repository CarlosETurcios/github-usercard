/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get('https://api.github.com/users/CarlosETurcios')
  .then(response => {
    console.log(response.data);
    let cards = document.querySelector('.cards');
    cards.appendChild(gitCard(response));
  })
  .catch(err => {
    console.log(err);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(i => {
  console.log('ca', 'https://api.github.com/users/' + i);
  axios
    .get('https://api.github.com/users/' + i)
    .then(response => {
      console.log(response.data);
      let cards = document.querySelector('.cards');
      cards.appendChild(gitCard(response));
    })
    .catch(err => {
      console.log(err);
    });
});
// axios.get('https://api.github.com/users').then(response => {
//   console.log(response.data);
//   response.data.forEach(items => {
//     console.log('carlos', items.login);
//     let Card = gitCard(items);
//     cards.appendChild(Card);
//   });
// });

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function gitCard(userInfo) {
  //create Elements
  const Card = document.createElement('div');
  const newImg = document.createElement('img');
  const info = document.createElement('div');
  const uName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const userBio = document.createElement('p');

  //set content

  uName.textContent = userInfo.data.name;
  userName.textContent = userInfo.data.login;
  userLocation.textContent = 'Location: ' + userInfo.data.location;
  userProfile.href = userInfo.data.html_url;
  userProfile.textContent = 'https://github.com/' + userInfo.data.login;
  followers.textContent = 'followers: ' + userInfo.data.followers;
  following.textContent = 'following: ' + userInfo.data.following;
  userBio.textContent = 'bio: ' + userInfo.data.bio;
  newImg.setAttribute('src', userInfo.data.avatar_url);

  //creat Structure
  Card.appendChild(newImg);
  Card.appendChild(info);
  info.appendChild(uName);
  info.appendChild(userName);
  info.appendChild(userLocation);
  info.appendChild(userProfile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(userBio);

  //apply styles
  Card.classList.add('card');
  info.classList.add('card-info');
  uName.classList.add('name');
  userName.classList.add('username');

  return Card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
