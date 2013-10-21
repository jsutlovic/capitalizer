$(function() {
  // Get our input box
  var incoming = $("#incoming");
  // Get the output box
  var outgoing = $("#outgoing");

  $("#doit").click(function(e) {
    e.preventDefault();

    // Figure out what option we're using
    var caps_type = $("#caps-type").val();

    var input = incoming.val();

    var capitalizer = new Capitalizer(caps_type);

    var output = capitalizer.capitalize(input);

    outgoing.val(output);
  });
});
