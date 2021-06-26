var buttonCount = 0;

function openTab(evt, chosenTab) {
    var i, tabs, tablinks;
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");

    for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" checked", "");
    }
    document.getElementById(chosenTab).style.display = "block";
    evt.currentTarget.className += " checked";
}

function stopani() {

    buttonCount++;

    if (buttonCount % 2 != 0) {
        document.getElementById("matswitch").style.backgroundImage = "url('../images/index/switchgifstill.png')";
        document.getElementById("stopani").value = "הפעלת אנימציה";
    }
    else {
        document.getElementById("matswitch").style.backgroundImage = "url('../images/index/switchgif.gif')";
        document.getElementById("stopani").value = "עצירת אנימציה";
    }
}