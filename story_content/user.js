function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Z1F0rMF4BL":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var score = player.GetVar("score")

var lmsAPI = parent;

lmsAPI.SetScore(score, 300, 0);
}

