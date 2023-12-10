
var arr=[
    {
        quate:"“Be yourself; everyone else is already taken.”",
        auther:"― Oscar Wilde",
    },
    {
        quate:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
        auther:"― Marilyn Monroe",
    },
    {
        quate:"So many books, so little time.",
        auther:"― Frank Zappa",
    },
    {
        quate:"A room without books is like a body without a soul.",
        auther:"― Marcus Tullius Cicero",
    },
    {
        quate:"You only live once, but if you do it right, once is enough.",
        auther:"― Mae West",
    }
]
var x;
function quateUp() {
    
    var elment=Math.floor(Math.random()*arr.length);
    if(elment==x){
        quateUp()
    }
    else{
        document.getElementById("quate").innerHTML=arr[elment].quate;
        document.getElementById("auther").innerHTML=arr[elment].auther;
        x==elment
    }
    
 
    
}
