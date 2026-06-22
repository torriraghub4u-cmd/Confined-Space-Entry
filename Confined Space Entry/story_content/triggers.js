function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pGqckJfJYI":
        Script1();
        break;
      case "6rJjkOOBaga":
        Script2();
        break;
      case "63HWXNTkIWn":
        Script3();
        break;
      case "6AZMUY6bsDg":
        Script4();
        break;
      case "6anBt2ixiOa":
        Script5();
        break;
      case "6dBnEeUFpVC":
        Script6();
        break;
      case "5YPI6avBayb":
        Script7();
        break;
      case "6c5tX3IE3Yc":
        Script8();
        break;
      case "60BYGJ3eHNV":
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
