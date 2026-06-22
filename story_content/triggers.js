function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5yzOAS14xFi":
        Script1();
        break;
      case "5Vb6RspnNBZ":
        Script2();
        break;
      case "601Y53gv4fo":
        Script3();
        break;
      case "6MJ75C821hj":
        Script4();
        break;
      case "5dR1eVxZe0Y":
        Script5();
        break;
      case "6Y1ufn4h7xa":
        Script6();
        break;
      case "6Tcf2Ae2mry":
        Script7();
        break;
      case "5d5CtN7in1K":
        Script8();
        break;
      case "6ZhSA3jXhvl":
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
