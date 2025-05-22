const dictionary = {
  fing: "yes", fong: "no", ging: "he", gang: "she", ork: "wanna", bon: "meet",
  fu: "in", burt: "the", cab: "bathroom", ter: "what", fi: "is", chak: "yap", sob: "about",
  ti: "so", pew: "annoying", tas: "the", min: "did", jam: "have", nay: "for", niplip: "dinner",
  nep: "but", sol: "also", met: "time", ringga: "particular", thic: "moment", fo: "it", 
  wek: "knew", chip: "lunch", chop: "breakfast", ur: "four", ve: "five", ix: "six", 
  en: "seven", tet: "eight", ine: "nine", ban: "shut", ru: "up", ri: "down", kro: "that", 
  rip: "can", pir: "not", glis: "will", ting: "good", tang: "bad", pow: "how", zcow: "are", 
  shako: "hello", nic: "library", hon: "hala", bee: "base", radas: "classroom", dow: "woods", 
  ring: "field", gam: "muga", ram: "home", hep: "shop", carp: "foynes", ig: "off", ag: "of", 
  rob: "fat", rab: "skinny", ii: "a", soy: "sorry", cin: "nice", ame: "mean", pum: "jump", 
  nur: "run", wig: "fly", tif: "fight", kal: "walk", caw: "crawl", niw: "win", sel: "lose", 
  la: "at", ni: "in", lat: "talk", hus: "shout", pig: "him", pog: "her", vov: "love", kie: "like", 
  teh: "hate", panla: "anyway", bur: "bro", wak: "know", ion: "now", win: "new", wah: "old", 
  woh: "how", hu: "who", hew: "when", reeh: "where", wing: "right", wong: "wrong", 
  pings: "guys", ping: "lads", ta: "do", du: "to", duu: "too", oc: "we", ep: "us", 
  cen: "our", oo: "i", wur: "go", gic: "want", gac: "need", ro: "zero", ne: "one", 
  wo: "two", ree: "three"
};

const englishToBork = Object.entries(dictionary).reduce((obj, [bork, eng]) => {
  obj[eng] = bork;
  return obj;
}, {});

function normalize(word) {
  return word.replace(/'/g, "").toLowerCase();
}

function translate() {
  const mode = document.querySelector('input[name="mode"]:checked').value;
  const input = document.getElementById("inputText").value;
  const words = input.split(/\s+/);
  let output = [];

  for (let raw of words) {
    let word = normalize(raw);
    let suffix = "";

    // Check for -ing, -ed, -s suffixes
    if (/(ing|ed|s)$/.test(word)) {
      const match = word.match(/(ing|ed|s)$/);
      if (match) {
        suffix = match[0];
        word = word.slice(0, -suffix.length);
      }
    }

    let translated = "";
    if (mode === "en-to-bork") {
      translated = englishToBork[word] || word;
    } else {
      translated = dictionary[word] || word;
    }

    output.push(translated + suffix);
  }

  document.getElementById("outputText").value = output.join(" ");
}
