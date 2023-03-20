function scroll_btn_one(name) {
  window.scrollTo({
    top: document.querySelector("#" + name).offsetTop,
    behavior: "smooth",
  });
}

function get_height() {
  var height = document.documentElement.scrollTop;

  if (height < 400) {
    $("#one_btn").css("color", "lightgray");
    $("#one_btn").css("font-size", "1.2rem");

    $("#two_btn").css("color", "gray");
    $("#two_btn").css("font-size", "1rem");

    $("#three_btn").css("color", "gray");
    $("#three_btn").css("font-size", "1rem");
  } else if (height < 1100) {
    $("#one_btn").css("color", "gray");
    $("#one_btn").css("font-size", "1rem");

    $("#two_btn").css("color", "lightgray");
    $("#two_btn").css("font-size", "1.2rem");

    $("#three_btn").css("color", "gray");
    $("#three_btn").css("font-size", "1rem");
  } else if (height < 1442) {
    $("#one_btn").css("color", "gray");
    $("#one_btn").css("font-size", "1rem");

    $("#two_btn").css("color", "gray");
    $("#two_btn").css("font-size", "1rem");

    $("#three_btn").css("color", "lightgray");
    $("#three_btn").css("font-size", "1.2rem");
  }
}

var chose = 0;

function tab_btn_right() {
  chose++;
  console.log(chose);
}
function tab_btn_left() {
  chose--;
  console.log(chose);
}

function check_chose() {
  if (chose > 1) {
    chose = 1;
  } else if (chose < -1) {
    chose = -1;
  }

  switch (chose) {
    case -1:
      document.getElementById("skill_tab").classList.add("sel_tab_pic");
      document.getElementById("skill_dis").classList.add("sel_dis")

      document.getElementById("Intro_tab").classList.remove("sel_tab_pic");
      document.getElementById("Intro_dis").classList.remove("sel_dis");

      document.getElementById("love_tab").classList.remove("sel_tab_pic");
      document.getElementById("love_dis").classList.remove("sel_dis");
      document.getElementById("love_dis_1").classList.remove("sel_dis");
      break;

    case 0:
      document.getElementById("skill_tab").classList.remove("sel_tab_pic");
      document.getElementById("skill_dis").classList.remove("sel_dis")

      document.getElementById("Intro_tab").classList.add("sel_tab_pic");
      document.getElementById("Intro_dis").classList.add("sel_dis");

      document.getElementById("love_tab").classList.remove("sel_tab_pic");
      document.getElementById("love_dis").classList.remove("sel_dis");
      document.getElementById("love_dis_1").classList.remove("sel_dis");
      break;

    case 1:
      document.getElementById("skill_tab").classList.remove("sel_tab_pic");
      document.getElementById("skill_dis").classList.remove("sel_dis")

      document.getElementById("Intro_tab").classList.remove("sel_tab_pic");
      document.getElementById("Intro_dis").classList.remove("sel_dis");

      document.getElementById("love_tab").classList.add("sel_tab_pic");
      document.getElementById("love_dis").classList.add("sel_dis");
      document.getElementById("love_dis_1").classList.add("sel_dis");

      break;
  }
}

function copy(){

	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("Link copied!")
}

setInterval(get_height, 100);
setInterval(check_chose, 10);