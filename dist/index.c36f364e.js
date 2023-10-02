const input = document.querySelector(".input");
const card = document.querySelector(".card");
const button = document.querySelector(".btn");
const URL = "https://api.github.com/users/";
const cardtemplate = document.querySelector("[data-card]");
button.addEventListener("click", ()=>{
    let username = input.value;
    input.value = "";
    card.classList.remove("hide");
    card.innerHTML = "LOADING...";
    getData(username);
});
function getData(username) {
    //   const result = await fetch(`${URL}${username}`);
    //   console.log(result);
    //   const data = await result.json();
    //   console.log(data);
    //   await setData(data);
    fetch(`${URL}${username}`).then((response)=>response.json()).then((data)=>setData(data)).catch((e)=>console.log(e));
}
async function setData(data) {
    console.log("here");
    const newCard = cardtemplate.content.cloneNode(true);
    const name = newCard.querySelector(".users-name");
    const image = newCard.querySelector(".userimage");
    const twitterid = newCard.querySelector(".twitter");
    const location = newCard.querySelector(".location");
    const followers = newCard.querySelector("#followerCount");
    const following = newCard.querySelector("#followingCount");
    const repo = newCard.querySelector("#reposCount");
    const activedate = newCard.querySelector(".date");
    const user_name = newCard.querySelector(".username");
    name.innerText = data.name;
    image.src = data.avatar_url;
    twitterid.innerText = data.twitter_username || "not given";
    location.innerText = data.location || "not given";
    followers.innerText = data.followers;
    following.innerText = data.following;
    //date formatting
    let date = new Date(data.created_at);
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    activedate.innerText = dateFormatter.format(date);
    repo.innerText = data.public_repos;
    user_name.innerText = data.login;
    card.innerHTML = "";
    card.appendChild(newCard);
} // button.addEventListener('click', ()=>  {
 //     console.log(input.value);
 //     getData(input.value);
 // })

//# sourceMappingURL=index.c36f364e.js.map
