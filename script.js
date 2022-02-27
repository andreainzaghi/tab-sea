
var app = new Vue({
    el: '#app',
    data: {
        
        x : [
            {checkin:"14 MAGGIO 2022", checkout:"21 MAGGIO 2022", tariffa:"€ 550" , quattro:"Disponibile",image:"https://th.bing.com/th/id/R.22064400c0e725d71e3cf97a5c492f05?rik=yTBA0h%2fVdJCWUA&pid=ImgRaw&r=0"},
            {checkin:"21 MAGGIO 2022", checkout:"28 MAGGIO 2022", tariffa:"€ 550" , quattro:"Disponibile",image:"https://th.bing.com/th/id/R.22064400c0e725d71e3cf97a5c492f05?rik=yTBA0h%2fVdJCWUA&pid=ImgRaw&r=0"},
            {checkin:"28 MAGGIO 2022", checkout:"04 GIUGNO 2022", tariffa:"€ 550" , quattro:"Disponibile",image:"https://th.bing.com/th/id/R.22064400c0e725d71e3cf97a5c492f05?rik=yTBA0h%2fVdJCWUA&pid=ImgRaw&r=0"},
            {checkin:"04 GIUGNO 2022", checkout:"11 GIUGNO 2022", tariffa:"€ 600" , quattro:"Disponibile",image:"https://th.bing.com/th/id/OIP.Rnr14VF9_c1551boDjbAxgHaEV?pid=ImgDet&rs=1"},
            {checkin:"11 GIUGNO 2022", checkout:"18 GIUGNO 2022", tariffa:"€ 650" , quattro:"Disponibile",image:"https://th.bing.com/th/id/OIP.Rnr14VF9_c1551boDjbAxgHaEV?pid=ImgDet&rs=1"},
            {checkin:"18 GIUGNO 2022", checkout:"25 GIUGNO 2022", tariffa:"€ 700" , quattro:"Disponibile",image:"https://th.bing.com/th/id/OIP.Rnr14VF9_c1551boDjbAxgHaEV?pid=ImgDet&rs=1"},
            {checkin:"25 GIUGNO 2022", checkout:"02 LUGLIO 2022", tariffa:"€ 750" , quattro:"Disponibile",image:"https://th.bing.com/th/id/OIP.Rnr14VF9_c1551boDjbAxgHaEV?pid=ImgDet&rs=1"},
            {checkin:"02 LUGLIO 2022", checkout:"09 LUGLIO 2022", tariffa:"€ 950" , quattro:"PRENOTATA!",image:"https://media.cntraveler.com/photos/54cbfd919abb8d533165bf66/master/w_1200,c_limit/cape-view-clifton-cape-town-south-africa.jpg"},
            {checkin:"09 LUGLIO 2022", checkout:"16 LUGLIO 2022", tariffa:"€ 1090" , quattro:"PRENOTATA!",image:"https://media.cntraveler.com/photos/54cbfd919abb8d533165bf66/master/w_1200,c_limit/cape-view-clifton-cape-town-south-africa.jpg"},
            {checkin:"16 LUGLIO 2022", checkout:"23 LUGLIO 2022", tariffa:"€ 1250" , quattro:"Disponibile",image:"https://media.cntraveler.com/photos/54cbfd919abb8d533165bf66/master/w_1200,c_limit/cape-view-clifton-cape-town-south-africa.jpg"},
            {checkin:"23 LUGLIO 2022", checkout:"30 LUGLIO 2022", tariffa:"€ 1290" , quattro:"Disponibile",image:"https://media.cntraveler.com/photos/54cbfd919abb8d533165bf66/master/w_1200,c_limit/cape-view-clifton-cape-town-south-africa.jpg"},
            {checkin:"30 LUGLIO 2022", checkout:"06 AGOSTO 2022", tariffa:"€ 1390" , quattro:"Disponibile",image:"https://media.cntraveler.com/photos/54cbfd919abb8d533165bf66/master/w_1200,c_limit/cape-view-clifton-cape-town-south-africa.jpg"},
            {checkin:"06 AGOSTO 2022", checkout:"13 AGOSTO 2022", tariffa:"€ 1590" , quattro:"PRENOTATA!",image:"https://s3.envato.com/files/a2d95243-9606-41ae-a469-aa4891ce7098/inline_image_preview.jpg"},
            {checkin:"13 AGOSTO 2022", checkout:"20 AGOSTO 2022", tariffa:"€ 1590" , quattro:"PRENOTATA!",image:"https://s3.envato.com/files/a2d95243-9606-41ae-a469-aa4891ce7098/inline_image_preview.jpg"},
            {checkin:"20 AGOSTO 2022", checkout:"27 AGOSTO 2022", tariffa:"€ 1450" , quattro:"Disponibile",image:"https://s3.envato.com/files/a2d95243-9606-41ae-a469-aa4891ce7098/inline_image_preview.jpg"},
            {checkin:"27 AGOSTO 2022", checkout:"03 SETTEMBRE 2022", tariffa:"€ 1100" , quattro:"Disponibile",image:"https://s3.envato.com/files/a2d95243-9606-41ae-a469-aa4891ce7098/inline_image_preview.jpg"},
            {checkin:"03 SETTEMBRE 2022", checkout:"10 SETTEMBRE 2022", tariffa:"€ 800" , quattro:"Disponibile",image:"https://th.bing.com/th/id/R.937f0a5865f2ce40d2ce8ae5611004de?rik=PQirUWxKYT7a%2fw&pid=ImgRaw&r=0"},
            {checkin:"10 SETTEMBRE 2022", checkout:"17 SETTEMBRE 2022", tariffa:"€ 650" , quattro:"Disponibile",image:"https://th.bing.com/th/id/R.937f0a5865f2ce40d2ce8ae5611004de?rik=PQirUWxKYT7a%2fw&pid=ImgRaw&r=0"},
            {checkin:"17 SETTEMBRE 2022", checkout:"24 SETTEMBRE 2022", tariffa:"€ 600" , quattro:"Disponibile",image:"https://th.bing.com/th/id/R.937f0a5865f2ce40d2ce8ae5611004de?rik=PQirUWxKYT7a%2fw&pid=ImgRaw&r=0"},
            {checkin:"24 SETTEMBRE 2022", checkout:"01 OTTOBRE 2022", tariffa:"€ 550" , quattro:"Disponibile",image:"https://th.bing.com/th/id/R.937f0a5865f2ce40d2ce8ae5611004de?rik=PQirUWxKYT7a%2fw&pid=ImgRaw&r=0"}
            ]
   
  
    },
    methods: {
  
   
     
  
    }
  
  })

 
