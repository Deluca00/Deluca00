function openForm(formId) {
  document.getElementById(formId).style.display = "block";
}

function closeForm(formId) {
  document.getElementById(formId).style.display = "none";
}
function notify(){
  // if( type="submit" = true)
  alert("✅ We have received the quotation and will contact you as soon as possible")
}
// init show all item
filterSelection("filterDivNew","all");
filterSelection("filterDivOld","all");

// function handle filter
function filterSelection(section, type) {
  var x, i;
  x = document.getElementsByClassName(section);
  if (type == "all") { type = ""; }
  for (i = 0; i < x.length; i++) {
    // x[i].classList.remove("show");
    // if (x[i].className.indexOf(type) > -1) { x[i].classList.add("show"); }
    x[i].style.display = "none";
    if (x[i].className.indexOf(type) > -1) { x[i].style.display = "block"; }
  }
}

// Handle type button actived
var featuress = document.getElementsByClassName("featured-item");
for (var i = 0; i < featuress.length; i++) {
  featuress[i].addEventListener("click", function(){
  	var sameFeaturess, j;
  	sameFeaturess = this.parentElement.children;
  	for (j = 0; j < sameFeaturess.length; j++) {
    	sameFeaturess[j].classList.remove("active");
  	}
    this.classList.add("active");
  });
}