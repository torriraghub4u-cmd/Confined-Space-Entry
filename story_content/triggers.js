function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nXLZPJG5Ys":
        Script1();
        break;
      case "5mG951o0zSM":
        Script2();
        break;
      case "6bR2KM9IVBD":
        Script3();
        break;
      case "5k1ivq5r36h":
        Script4();
        break;
      case "6crGiLNGS2q":
        Script5();
        break;
      case "67hE5qyDv87":
        Script6();
        break;
      case "5xlcdYpuIHL":
        Script7();
        break;
      case "6ZrZeDYN7jE":
        Script8();
        break;
      case "6fIzusU4s23":
        Script9();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  player.once(() => {
const target = object('5chpUtnCbZo');
const duration = 750;
const easing = 'ease-out';
const id = '5Xyft4Tjdnc';
const pulseAmount = 0.07;
const delay = 17969;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
