export function viewNumbers(view){
    if (view >= 1000000) {
        view=Math.round((view*10)/1000000);
        return ""+(view/10)+"M";
    } if(view >= 1000){
        view=Math.round(view/1000);
        return ""+view+"k";
    }
    else {
        return ""+view;
    }
}