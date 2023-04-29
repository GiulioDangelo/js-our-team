const eleContent = document.querySelector('.content');


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





for (let key of arrTeam) {
    eleContent.innerHTML += 
    `<div class="col-4 content p-2">
        <div class = "card">
            <div class="img-container"><img src="img/${key.img}" class="w-100 p-2"></div>
            <div class="name m-1"><h3>${key.name}</h3></div>
            <div class="job fw-semibold fs-5"><span>${key.job}</span></div>
        </div>
    </div>`
}
