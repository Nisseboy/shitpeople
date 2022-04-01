let sites = [
  {name: "Cubefield", url: "https://totallyscience.co/assets/games/cubedodge.html"},
  {name: "Getting over it", url: "https://scratch.mit.edu/projects/389464290/embed/"},
  {name: "Google", url: "https://www.google.com/webhp?igu=1"},
  {name: "The Final Earth 2", url: "https://florianvanstrien.nl/TheFinalEarth2/play/"}
];

let pString = "";
for (let i = 0; i < sites.length; i++) {
  pString += i + ": " + sites[i].name + "\n"; 
}

let ans = sites[prompt(pString)];
if (ans != undefined) {
  let src = "https://herboproxy.herokuapp.com/" + ans.url;
  document.body.innerHTML += "<iframe id=\"coolframe\" src=\"" + src + "\" width=1 height=1></iframe>";
}
