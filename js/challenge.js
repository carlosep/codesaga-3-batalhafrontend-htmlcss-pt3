$(document).ready(function() {
  $('#solution').load(function() {
    var h1 = $("#solution").contents().find("h1");
    var img = $("#solution").contents().find("img");
    var errors = new Array();
    
    if (h1.css("color") != "rgb(255, 0, 0)"){
      errors.push("Your \'h1\' tag is not \'red\'.")
    }
    
    if (img.attr("src") == null){
      errors.push("Your image should be valid.")
    }
    
    var result = $("#result");
    if (errors.length == 0){
      result.addClass("alert-success");
      result.append("Success. You are ready to the next challenge.")
    }
    else {
      result.addClass("alert-danger");
      result.append("Ops... You still have " + errors.length + " errors:<br>");
      result.append(errors.join("<br>"));
    }
  });
});

function strcmp(a, b)
{   
  return (a<b?-1:(a>b?1:0));  
}