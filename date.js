function renderTime(){
    var mydate = new Date();
    
    var year = mydate.getFullYear();
        if(year < 1000){
            year+=1900
        }
    
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();



    var dayarray = new Array("Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag");
    var montharray = new Array("Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember");
 

    var myClock = document.getElementById("clockDisplay");
    myClock.innerText = "" +dayarray[day]+ ", " +daym+ " " +montharray[month]+ ", " +year+ "";

}
renderTime();