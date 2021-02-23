// import React from "react";
// import { Bar } from "react-chartjs-2";
// // import { MDBContainer } from "mdbreact";
// import { useSelector } from "react-redux"
// import html2canvas from "html2canvas";
// const pdfConverter = require("jspdf");

// export default function ChartsPage() {

//     const div2PDF = e => {
//         /////////////////////////////
//         // Hide/show button if you need
//         /////////////////////////////
    
//         const but = e.target;
//         but.style.display = true;
//         let input = window.document.getElementsByClassName("div2PDF")[0];
    
//         html2canvas(input).then(canvas => {
//           const img = canvas.toDataURL("image/png");
//           const pdf = new pdfConverter("l", "pt");
//           pdf.addImage(
//             img,
//             "png",
//             input.offsetLeft,
//             input.offsetTop,
//             input.clientWidth,
//             input.clientHeight
//           );
//           pdf.save("chart.pdf");
//           but.style.display = "block";
//         });
//       };


//     const UpdatedData = useSelector(state => state.staticDetailsReducer);
//     const state = {
//         dataBar: {
//             labels: 
//             ["contact", "papers", "projects", "tasks"],
//             datasets: [
//                 {
//                     data: [
//                         UpdatedData.leaderStatic.sumContacts,
//                         UpdatedData.leaderStatic.sumPapers,
//                         UpdatedData.leaderStatic.sumProjects,
//                         UpdatedData.leaderStatic.sumTasks,
//                     ],
//                     backgroundColor: [
//                         'rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'
//                     ],
//                 }
//             ]
//         },
//         barChartOptions: {
//                 legend: {
//                     display: false
//                 },
//                 tooltips: {
//                     callbacks: {
//                        label: function(tooltipItem) {
//                               return tooltipItem.yLabel;
//                        }
//                     }
//                 },
//             responsive: true,
//             title: {
//                 display: false,},
//                 scales: {
//                     yAxes: [{
//                         ticks: {
//                           beginAtZero: true
//                         }
//                       }],
//                     xAxes: [{
//                         gridLines: {
//                             offsetGridLines: true
//                         }
//                     }]
//                 }
//             //   ,  legend: {
//             //         labels: {
//             //             // This more specific font property overrides the global property
//             //             fontColor: 'yellow'
//             //         }
//             //     }
//         }
//     }

//     return (
//         <div>
//             <Bar data={state.dataBar} options={state.barChartOptions}  width="500" height="370" /></div>     
//     );
// }
