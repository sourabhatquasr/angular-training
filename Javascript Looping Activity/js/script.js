const courses=[
    {name:"ANGULAR TRAINING",img:"1.jpg",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae debitis recusandae incidunt vitae? Maiores, exercitationem minus at enim quasi, laudantium suscipit mollitia maxime qui aperiam dolorem a ducimus nemo!",fee:"20000/-"},

    {name:"REACT TRAINING",img:"2.png",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae debitis recusandae incidunt vitae? Maiores, exercitationem minus at enim quasi, laudantium suscipit mollitia maxime qui aperiam dolorem a ducimus nemo!",fee:"15000/-"},

    {name:"PHP",img:"3.webp",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae debitis recusandae incidunt vitae? Maiores, exercitationem minus at enim quasi, laudantium suscipit mollitia maxime qui aperiam dolorem a ducimus nemo!",fee:"18000/-"},

    {name:"NODE JS",img:"4.jpg",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae debitis recusandae incidunt vitae? Maiores, exercitationem minus at enim quasi, laudantium suscipit mollitia maxime qui aperiam dolorem a ducimus nemo!",fee:"25000/-"},

    {name:"HTML",img:"5.jpeg",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae debitis recusandae incidunt vitae? Maiores, exercitationem minus at enim quasi, laudantium suscipit mollitia maxime qui aperiam dolorem a ducimus nemo!",fee:"10000/-"},

    {name:"JAVASCRIPT",img:"6.jpg",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae debitis recusandae incidunt vitae? Maiores, exercitationem minus at enim quasi, laudantium suscipit mollitia maxime qui aperiam dolorem a ducimus nemo!",fee:"14000/-"},

   

]



var p="";
    p += `
    <table border>
    <thead>
    <tr>
    <th>Name</th>
    <th>Image</th>
    <th>Content</th>
    <th>Fees</th>
    </tr>
    </thead>
    <tbody>
`
    for(let x of courses){
    p+=`
    <tr>
    <td>${x.name}</td>
    <td><img src="./images/${x.img}"></td>
    <td>${x.content}</td>
    <td>${x.fee}</td>
    </tr>
    `
}

document.getElementById("msg").innerHTML=p




