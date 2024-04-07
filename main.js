let url = 'http://localhost:3000/users'



fetch(url)
    .then(data => data.json())
    .then(res => console.log(res.json()))  


    //let elm = document.querySelector('');
//    async function getCurrentUser(){
//      return fetch('http://localhost:3000/api/current_user')
//      .then((response) =>  {
//      if(!response.ok){
//         throw new Error ('Failed to Fetch User info')
//      }
//      return response.json();
//      })
//      .then((data) => {
//         console.log('User information:', data);
//         return data;
//      })
//      .catch((error) => {
//         console.error('Error fetching user info:', error);
//      })
//    вывод инфы в профиль}
//function addCurrentUser(){
//   getCurrentUser()
//   .then((data) => {
//      const username = data.username;
//      const elm = document.querySelector();
//      elm.textContent = `Username: ${username}`;
//   })
//   .catch((error) =>{
//      console.error('Error assing current user:', error);
//   })
//}

//addCurrentUser();