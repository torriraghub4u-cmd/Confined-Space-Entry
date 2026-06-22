function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5yAdmZTt7Kn":
        Script1();
        break;
      case "6cCuyQI6abm":
        Script2();
        break;
      case "5bElfuneNpF":
        Script3();
        break;
      case "62Q8QmIFzBB":
        Script4();
        break;
      case "5pPm266tJQA":
        Script5();
        break;
      case "5chm6xDcdus":
        Script6();
        break;
      case "5sCpzP92Ly1":
        Script7();
        break;
      case "6LN74uiffdo":
        Script8();
        break;
      case "6nQ2ymv877s":
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
