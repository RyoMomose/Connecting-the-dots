// グラフ作成
  var ctx = document.getElementById("chart");
  var myScatterChart = new Chart(ctx, {
    type: 'scatter', 
    data: { 
      datasets: [
		{
          label: 'ミドルドッツ',
          data: [{x:0, y:0},{x:100, y:5}],
          backgroundColor: '#FCE347',
		  pointRadius: 25,
        }, 
        {
          label: 'メインユーザー',
          data: [{x:0, y:0},{x:15, y:2}],
          backgroundColor: 'RGBA(225,95,150, 1)',
		  pointRadius: 10,
		  fill: false,
          showLine: true,
		  lineTension: 0,
        }, 
        {
          label: '他のユーザー01',
          data: [{x:0, y:0},{x:10, y:1},{x:25, y:2},{x:55, y:4},{x:75, y:3},{x:92, y:4},{x:100, y:5}],
          backgroundColor: 'RGBA(115,255,25, 1)',
		  pointRadius: 10,
		  fill: false,
          showLine: true,
		  lineTension: 0,
        }]
    },
    options:{
      title: {
        display: true,
          text: 'コネクティングザドッツ'
      },
      scales: {
        xAxes: [{        
          scaleLabel: {             
            display: true,          
            labelString: '達成率' 
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            stepSize: 10,
            callback: function(value, index, values){
              return  value +  '％'
            }
          }
        }],
        yAxes: [{        
          scaleLabel: {             
            display: true,          
            labelString: '満足度' 
          },
          ticks: {
            suggestedMax: 6,
            suggestedMin: 0,
            stepSize: 1,
            callback: function(value, index, values){
              return  value
            }
          }
        }]
      }
    }
  });

document.getElementById("btn").onclick = function() {
	//セレクトボックスから満足度を取得
	const satisfaction_level = document.form1.satisfaction_level;
	const num = satisfaction_level.selectedIndex;
	const Y_num = satisfaction_level.options[num].value;
	
	//数値バーから達成度を取得
	const achievement_level = document.getElementById('achievement_level');
	const X_num = achievement_level.value;
	
	//ドッツを追加
	myScatterChart.data.datasets[1].data.push({x:X_num, y:Y_num});
	//グラフを更新
	myScatterChart.update();
};

//更新ボタン押下時のイベント(※2)
	  $('#btn').on('click', function(){
		myScatterChart.data.datasets[1].data.push({x:85, y:4});
		//グラフを更新
		chart1.update();
		alert("できた");
	});

  