function date_time(id)
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        h = date.getHours();
        tHours = new Array('AM', 'PM') ;
        tHour = 0 ;
        if(h<10)
        {
                h = "0"+h;
                if(h==0)
                        h=12;
        }
        if(h>12)
        {
        	tHour = 1 ;
        	h = h-12 ;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        
        result = ''+days[day]+', '+months[month]+' '+d+' '+year+', '+h+':'+m+ ' '+ tHours[tHour];
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("'+id+'");','1000');
        return true;
}