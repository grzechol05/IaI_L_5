let nav =  '<nav><a href="index.html">Home </a>' +
    '<a href="contact.html">Kontakt</a></nav>';

let navbar = document.querySelector(".navbar");

navbar.innerHTML =nav;



var a="   ";
var b="  ";
for(var i=1; i<=10; i++)
{
a += (i+"  ");
}
console.log(a);

for(var j=1; j<=10; j++)
{
console.log(j);
}



for(var n=1; n<=10; n++)
{
for( m=1; m<=10; m++)
{

b += (" "+ m*n+" ");

}
}
console.log(b);
