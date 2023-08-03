const apiurl='https://reqres.in/api/users';
const xhr=new XMLHttpRequest();
xhr.open('GET',apiurl,true);
xhr.timeout=5000;
xhr.onreadystatechange=function() {
    if(xhr.status===200 && xhr.readyState===4){
        const response=JSON.parse(xhr.responseText);
        console.log(response.data);
        fun(response.data);
    }
};
xhr.send();
function fun(data){
    var mad=document.querySelector('#madh tbody');
    data.forEach(function(p){
        var row=document.createElement('tr');

        var a1=document.createElement('td');
        a1.textContent=p.id;
        row.appendChild(a1);

        var a2=document.createElement('td');
        a2.textContent=p.email;
        row.appendChild(a2);


        var a3=document.createElement('td');
        a3.textContent=p.firstname;
        row.appendChild(a3);


        var a4=document.createElement('td');
        a4.textContent=p.lastname;
        row.appendChild(a4);


        var a5=document.createElement('td');
        var a6=document.createElement('img');
        a6.src=p.avathar;
        a6.alt=p.firstname;
        a5.appendChild(a6);
        row.appendChild(a5);


        mad.append(row);
    });
}
