function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma (string) {
    var lowerCase = "I can't hear you!";
    var upperCase = "YES INDEED!";
    var loveYouToo = "I love you, too.";
    if (string.toLowerCase(string) === string) {
      return lowerCase;
    }
    else if (string.toUpperCase(string) === string) {
      return upperCase;
    }
    else if ("I love you, Grandma." === string) {
      return loveYouToo;
    }
}