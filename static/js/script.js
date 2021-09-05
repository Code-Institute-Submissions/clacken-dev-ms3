let ward_a_patients = document.getElementById('current_ward_a').innerHTML;
console.log(ward_a_patients);
let ward_a_max_patients = 20;
let ward_a_percent = (ward_a_patients/ward_a_max_patients);
console.log("percentage is " + ward_a_percent*100);