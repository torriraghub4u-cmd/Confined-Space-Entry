function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BwH13S83iL":
        Script1();
        break;
      case "5veu1M796wB":
        Script2();
        break;
      case "5gPARx01zjk":
        Script3();
        break;
      case "6GDIpi7v0MX":
        Script4();
        break;
      case "6GID6X3ZddG":
        Script5();
        break;
      case "6UvN4ykyJFy":
        Script6();
        break;
      case "5vtFcjUBiDy":
        Script7();
        break;
      case "67xwRDW0w7R":
        Script8();
        break;
      case "5t5OMl0T2eM":
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
