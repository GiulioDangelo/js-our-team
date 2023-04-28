const eleContent = document.querySelectorAll('.content');
const eleImg = document.querySelector('.img-container');
const eleName = document.querySelector('.name');
const eleJob = document.querySelector('.job');


const arrTeam =[ {
    name : 'Wayne Barnett',
    job : 'Founder & CEO',
    img : 'wayne-barnett-founder-ceo.jpg'
},
{
    name : 'Angela Caroll',
    job : 'Chief Editor',
    img : 'angela-caroll-chief-editor.jpg'
},
{
    name : 'Walter Gordon',
    job : 'Office Manager',
    img : 'walter-gordon-office-manager.jpg'
},
{
    name : 'Angela Lopez',
    job : 'Social Media Manager',
    img : 'angela-lopez-social-media-manager.jpg'
},
{
    name : 'Scott Estrada',
    job : 'Developer',
    img : 'scott-estrada-developer.jpg'
},
{
    name : 'Barbara Ramos',
    job : 'Graphic Designer',
    img : 'barbara-ramos-graphic-designer.jpg'
}
]







for (let i = 0; i < eleContent.length; i++) {
    eleImg.innerHTML += `<img src="img/${arrTeam[i].img}" alt="">`;
    eleName.innerHTML += `<h3>${arrTeam[i].name}</h3>`;
    eleJob.innerHTML += `<span>${arrTeam[i].job}</span>`;
}