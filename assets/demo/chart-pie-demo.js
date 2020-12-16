// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var temp_arr = [];
var pie_var = new XMLHttpRequest();
    
    pie_var.open("GET", "https://hiput6bvql.execute-api.us-east-1.amazonaws.com/icu-api-get-pie-graph");
    pie_var.send();
    pie_var.onreadystatechange = function () {

      if (pie_var.readyState !== XMLHttpRequest.DONE) return;
      if (pie_var.status === 200) {
        pie_obj = JSON.parse(pie_var.responseText);
        //console.log( pie_obj[1].cheat_num );
        
        pie_obj.forEach((element) => {
          
          temp_arr.push(element.count);
            
        });
      } else {
        console.log(`[${pie_var.status}] : ${pie_var.statusText}`);
      }
    };


console.log(temp_arr);
console.log(temp_arr['0']);
console.log(temp_arr[0]);


var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["시선이동", "디바이스착용", "사람감지"],
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
