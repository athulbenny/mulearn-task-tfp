var takenid=document.getElementById('details');
var repository=document.getElementById('repository');

async function details(){
    var res =await fetch('https://api.github.com/users/athulbenny');
    var resj=await res.json();

    var repo =await fetch(resj.repos_url);
    var repoj=await repo.json();

    var name=document.createElement('p');
    name.innerHTML=resj.name;
    takenid.appendChild(name)

    avatar=new Image(100,100);
    avatar.src=resj.avatar_url;
    takenid.appendChild(avatar)

    var bio=document.createElement('p');
    bio.innerHTML=resj.bio;
    takenid.appendChild(bio)

    var pubrep=document.createElement('p');
    pubrep.innerHTML=`number of public repos: ${resj.public_repos}`;
    takenid.appendChild(pubrep)

    for(i=0;i<repoj.length;i++){

    var repname=document.createElement('p');
    repname.innerHTML=repoj[i].name;
    repository.appendChild(repname)

    var repurl=document.createElement('p');
    repurl.innerHTML=repoj[i].html_url;
    repository.appendChild(repurl)

    var replang=document.createElement('p');
    replang.innerHTML=repoj[i].language;
    repository.appendChild(replang)

    var br=document.createElement('br');
    repository.appendChild(br)

    var br=document.createElement('hr');
    repository.appendChild(br)
    }
    


}
takenid.style.backgroundColor='orange'
takenid.style.textAlign='center'

repository.style.backgroundColor='lightblue'
repository.style.textAlign='center'
details();