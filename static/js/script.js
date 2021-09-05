//Get percentage capacity of Ward A
let ward_a_patients = document.getElementById('current-ward-a').innerHTML;
let ward_a_max_patients = 20;
let ward_a_percent = (ward_a_patients/ward_a_max_patients);
document.getElementById("ward-a-percent").innerHTML = Math.trunc((ward_a_percent*100)) + "% Full";
//Get percentage capacity of Ward B
let ward_b_patients = document.getElementById('current-ward-b').innerHTML;
let ward_b_max_patients = 15;
let ward_b_percent = (ward_b_patients/ward_b_max_patients);
document.getElementById("ward-b-percent").innerHTML = Math.trunc((ward_b_percent*100)) + "% Full";
//Get percentage capacity of Ward C
let ward_c_patients = document.getElementById('current-ward-c').innerHTML;
let ward_c_max_patients = 15;
let ward_c_percent = (ward_c_patients/ward_c_max_patients);
document.getElementById("ward-c-percent").innerHTML = Math.trunc((ward_c_percent*100)) + "% Full";
//Get percentage capacity of Ward D
let ward_d_patients = document.getElementById('current-ward-d').innerHTML;
console.log(ward_d_patients);
let ward_d_max_patients = 20;
let ward_d_percent = (ward_d_patients/ward_d_max_patients);
console.log(ward_d_percent);
document.getElementById("ward-d-percent").innerHTML = Math.trunc((ward_d_percent)*100) + "% Full";
