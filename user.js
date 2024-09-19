function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6OaFWzcnL0C":
        Script1();
        break;
      case "6evHX8Fvcb0":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src = "musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.05;

}

