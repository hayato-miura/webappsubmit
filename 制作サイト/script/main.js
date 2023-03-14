

// 学習時間の棒グラフ

var barChartData = {
  // からの配列を作る
    labels: ['','2','','4','','6','','8','','10','','12','','14','','16','','18','','20','','22','','24','','26','','28','','30',''],
    datasets: [
      {
        label: 'blue',
        data: ['3','5','5','4','2','5','4','7','3','7','3','6','4','2','3','1','5','2','5','4','2','3','5','5','2','3','4','2','3','8','5'],
        borderColor : "rgba(54,164,235,0.8)",
        backgroundColor : "rgba(54,164,235,0.5)"
      },
    ],
  };
  
  var complexChartOption = {
    responsive: true,
  };
  
  window.onload = function() {
    ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: 'bar',
      data: barChartData,
      // options: complexChartOption
      options :{
        scales: {
          xAxes: [{
            display: true,
            stacked: false,
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 8,
              stepSize: 2,
              callback: function(tick) {
                return tick.toString() + 'h';
              }
            }
            

            
          }]
        }
      }
    });
  };


//   学習コンテンツドーナツグラフ



  var ctx = document.getElementById("myDoughnutChart1");
  var myDoughnutChart1= new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["JavaScript", "CSS", "PHP", "HTML"], 
      //データ項目のラベル
      // ラベルを消してHTMLCSSで調整する
      datasets: [{
          backgroundColor: [
              "#0345ec",
              "#0f71bd",
              "#20bdde",
              "#3ccefe"
          ],
          data: [45, 32, 18, 5] //グラフのデータ
      }]
    },
    options: {
      title: {
        display: true,

        //グラフタイトル
      },
      legend:{
        display:false
      },
      responsive: false,
      // tooltips: {
      //   callbacks: {
      //     label: function (tooltipItem, data) {
      //       return data.labels[tooltipItem.index]
      //         + ": "
      //         + data.datasets[0].data[tooltipItem.index]
      //         + " %"; //ここで単位を付けます
      //     }
      //   }
      // }
        plugins: {
            datalabels: {
                color: '#000',
                font: {
                    weight: 'bold',
                    size: 20,
                },
                formatter: (value) => {
                    return value + '%';
                }
            }
        }
    }
  });


  // プラグインの関数定義
//   var dataLabelPlugin = {
//     afterDatasetsDraw: function (chart, easing) {
//       // To only draw at the end of animation, check for easing === 1
//       var ctx = chart.ctx;

//       chart.data.datasets.forEach(function (dataset, i) {
//           var meta = chart.getDatasetMeta(i);
//           if (!meta.hidden) {
//               meta.data.forEach(function (element, index) {
//                   // Draw the text in black, with the specified font
//                   ctx.fillStyle = 'rgb(0, 0, 0)';

//                   var fontSize = 16;
//                   var fontStyle = 'normal';
//                   var fontFamily = 'Helvetica Neue';
//                   ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

//                   // Just naively convert to string for now
//                   var dataString = dataset.data[index].toString();

//                   // Make sure alignment settings are correct
//                   ctx.textAlign = 'center';
//                   ctx.textBaseline = 'middle';

//                   var padding = 5;
//                   var position = element.tooltipPosition();
//                   ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
//               });
//           }
//       });
//   }
// };


  var ctx = document.getElementById("myDoughnutChart2");
  var myDoughnutChart2= new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["賛成", "反対", "わからない", "未回答"], //データ項目のラベル
      datasets: [{
          backgroundColor: [
            "#0345ec",
            "#0f71bd",
            "#20bdde",
            "#3cccefe"
          ],
          data: [45, 32, 18, 5] ,
          //グラフのデータ
          // plugins: [dataLabelPlugin]
      }]
    },
    options: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        //グラフタイトル
        text: '新法案賛否'
      }
    }
    });




//  モーダルローディング
var button = $('.button'),
    loadComp = $('.load__complete__box'),
    upSide = $('.upside'),
    spinner = '<span class="spinner"></span>';



button.click(function() {
  if (!button.hasClass('loading')) {
    button.toggleClass('loading').html(spinner);
    $(function () { 
      setTimeout(function () { 
        upSide.addClass('load__complete');
       },0);
     });
    $(function () { 
      setTimeout(function () { 
        button.addClass('load__complete');
        loadComp.addClass('load__complete');
       },3000);
     });
  }
  else {
    button.toggleClass('loading').html("Load");
  }
}) ;

// twitter入力フォーム





const twitterShareBtn = document.querySelector('.twitter-share-btn'); 
const twitterShare = document.getElementById("twitter")
// twitter共有機能

twitterShare.addEventListener('click', function(event) {
  event.preventDefault();
  var left = Math.round(window.screen.width / 2 - 275);
  var top = (window.screen.height > 420) ? Math.round(window.screen.height / 2 - 210) : 0;
  if(twitterShareBtn.checked){
    window.open(
      "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("content").value),
      null,
      "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + left + ",top=" + top);
  };
});
