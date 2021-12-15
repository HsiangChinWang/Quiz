function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6qAg3pBYGmK":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var score = player.GetVar("score");

var lmsAPI = parent;

lmsAPI.SetScore(score, 300, -300);
}

