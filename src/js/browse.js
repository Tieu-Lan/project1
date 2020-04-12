function move() {
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var add;
    if (s1.value === "none"){
        add = new Array("Filter by City");
    } else if(s1.value === "China"){
        add = new Array('Shanghai','Kunming','Beijing','Yantai');
    } else if(s1.value === "Japan"){
        add = new Array('Tokyo', 'Osaka', 'Kamakura');
    } else if(s1.value === "Italy"){
        add = new Array('Roma','Milan','Venice','Florence');
    } else if(s1.value === "America"){
        add = new Array('New York','San Francisco', 'Washington');
    }
    else {
        add = null;
    }
    s2.length = 0;
    for (var i = 0;add.length;i++){
        var s=new Option();
        s.text=add[i].split()[0];
        s.value=add[i].split()[0];
        s2.add(s);
    }
}