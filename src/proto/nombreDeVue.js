export function nombreVue(nbvue){
    if (nbvue >= 1000000) {
        nbvue=Math.round((nbvue*10)/1000000);
        return ""+(nbvue/10)+"M";
    } if(nbvue >= 1000){
        nbvue=Math.round(nbvue/1000);
        return ""+nbvue+"k";
    }
    else {
        return ""+nbvue;
    }
}