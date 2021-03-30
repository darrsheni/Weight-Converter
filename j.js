document.getElementById('kgInput').addEventListener('input',
function(e){
  let kgs = e.target.value;
  document.getElementById('btn1').addEventListener('click',function(){
  document.getElementById('lbsOutput').innerHTML= (kgs*2.20462).toFixed(2);
  document.getElementById('ozOutput').innerHTML = (kgs*35.274).toFixed(2);
  document.getElementById('gramsOutput').innerHTML= (kgs*1000).toFixed(0);
  });
});
