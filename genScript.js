editsCounter = 0

function btnHomeClick() {
    parent.location = "https://thelankydude118.github.io";
}

function btnMusicClick() {
    parent.location = "https://thelankydude118.github.io/music";
}

function btnTestClick() {
    parent.location = "https://thelankydude118.github.io/scriptTest";
}

function noScroll() {
    window.scrollTo(0, 0);
}

function downloadBJ() {
    parent.location = "http://TheLankyDude118.github.io/downloads/BlackJack.exe";
    return false;
}

function openRAG() {
    parent.location = "http://TheLankyDude118.github.io/RandomArticle";
    return false;
}

function openGenImpComp() {
    parent.location = "http://TheLankyDude.github.io/";
    return false;
}

function downloadGames() {
    parent.location = "http://TheLankyDude118.github.io/downloads/GamesHub.exe";
    return false;
}

function downloadFloppy() {
    parent.location = "http://TheLankyDude118.github.io/downloads/FloppyBird.exe";
    return false;
}

function downloadSnake() {
    parent.location = "http://TheLankyDude118.github.io/downloads/Snake.exe";
    return false;
}

function downloadDele() {
    parent.location = "http://TheLankyDude118.github.io/pics/Edits/Dele_Edit.png";
    return false;
}

function scrollLock() {
    if (editsCounter == 0) {
        window.scrollTo(0, 0);
    }
    else {
        if (window.pageYOffset < document.getElementById('first').offsetTop) {
            window.scrollTo(0, document.getElementById('first').offsetTop);
        }
    }
}
    
function btnFirstClick() {
    if (editsCounter == 0) {
        editsCounter = 1;
        document.getElementById('first').scrollIntoView();
        window.removeEventListener('scroll', noScroll);
        document.getElementById('btnScroll').src = "pics/BackToTop.png";
    }
    else {
        editsCounter = 0;
        document.getElementById('top').scrollIntoView();
        window.addEventListener('scroll', noScroll);
        document.getElementById('btnScroll').src = "pics/SeeImages.png";
    }
}

function goToBottom() {
    editsCounter = 1;
    window.removeEventListener('scroll', noScroll);
    document.getElementById('bottom').scrollIntoView();
    document.getElementById('btnScroll').src = "pics/BackToTop.png";
}