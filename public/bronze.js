let h = "hello1";
function hello(a,g){
    let b = document.querySelector(a);
    let h = "hello1";
b.onclick = () => { //Event Oject
    document.getElementById(g).style.display = "block";
}

b.ondblclick = () => { 
    document.getElementById(g).style.display = "none";
}
}
hello("#b5","test5");
hello("#b1","test1");
hello("#b2","test2");
hello("#b3","test3");
hello("#b4","test4");
hello("#b7","test7");
hello("#b6","test6");
hello("#b8","test8");
hello("#b9","test9");
hello("#b10","test10");
hello("#b11","test11");
hello("#b12","test12");
hello("#b13","test13");
hello("#b14","test14");
hello("#b15","test15");
