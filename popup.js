chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var url = tabs[0].url;
  var urlParts = url.split("?");

  // Display the full URL
  document.getElementById('fullUrl').innerHTML = "<b>Full URL:</b> " + url + "<br>";

  // Check if there are query parameters
  if (urlParts.length > 1) {
    var paramTable = document.getElementById('paramTable');
    paramTable.innerHTML = ""; // Clear table content 

    // Create table header row
    var headerRow = paramTable.insertRow();
    var keyCell = headerRow.insertCell();
    keyCell.innerHTML = "<b>Parameter</b>";
    var valueCell = headerRow.insertCell();
    valueCell.innerHTML = "<b>Value</b>";

    // Split query parameters by & and iterate
    var params = urlParts[1].split("&");
    for (var i = 0; i < params.length; i++) {
      var paramPair = params[i].split("=");
      var row = paramTable.insertRow();
      var keyCell = row.insertCell();
      keyCell.innerHTML = paramPair[0];
      var valueCell = row.insertCell();
      valueCell.innerHTML = paramPair[1];
    }
  } else {
    document.getElementById('paramTable').innerHTML += "No query parameters found.";
  }
});
