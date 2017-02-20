window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
var ts = ["To think Being itself explicitly requires disregarding Being to the extent that it is only grounded and interpreted in terms of beings and for beings as their ground, as in all metaphysics.",
"We name time when we say: every thing has its time. This means: everything which actually is, every being comes and goes at the right time and remains for a time during the time allotted to it. Every thing has its time.",
"The most thought-provoking thing in our thought-provoking time is that we are still not thinking.",
"Man acts as though he were the shaper and master of language, while in fact language remains the master of man.",
"If I take death into my life, acknowledge it, and face it squarely, I will free myself from the anxiety of death and the pettiness of life - and only then will I be free to become myself.",
"Man is not the lord of beings. Man is the shepherd of Being.",
"Thinking begins only when we have come to know that reason, glorified for centuries, is the stiff-necked adversary of thought.",
"When modern physics exerts itself to establish the world's formula, what occurs thereby is this: the being of entities has resolved itself into the method of the totally calculable.",
"Agriculture is now a motorized food industry, the same thing in its essence as the production of corpses in the gas chambers and the extermination camps, the same thing as blockades and the reduction of countries to famine, the same thing as the manufacture of hydrogen bombs.",
"Language is the House of Being. In its home human beings dwell.",
"As the ego cogito, subjectivity is the consciousness that represents something, relates this representation back to itself, and so gathers with itself.",
"Whatever can be noted historically can be found within history.",
"Why are there beings at all, instead of Nothing?",
"You ask: <i>\"Comment redonner un sens au mot 'Humanisme'?\" </i> This question proceeds from your intention to retain the word <i>\"humanism\"</i>. I wonder whether that is necessary. Or is the damage caused by all such terms still not sufficiently obvious?",
"It is Hegel who, for the first time, thinks the philosophy of the Greeks as a whole and thinks this whole philosophically. In what way is this possible? By virtue of the fact that Hegel determines history as such in such a way that it must be philosophical in its fundamental trait. The history of philosophy is for Hegel the intrinsically unitary and hence necessary process of the advance of spirit toward itself. The history of philosophy is no mere sequence of diverse opinions and teachings that supersede each other without any connection."];
var ts2 = ts.split(' ').join('+');
function suvaVarv() {
  var HX = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + HX.toString(16)).substr(-6);
}
function VALGUSTA(value) {
var suva = Math.floor(Math.random() * (15));
var tss = ts[suva].split(' ').join('+');
var taustavarv = suvaVarv();
var aadress = '<a class="twitter-share-button" href=https://twitter.com/intent/tweet?text=' + tss + '><input type="button" value="Tweet"</a>';
if(suva == 13) {
  aadress = [];
};
document.getElementById('zitat').innerHTML = ts[suva];
document.getElementById('nimi').innerHTML = "<b>- Martin Heidegger</b>";           document.getElementById('varv').style.backgroundColor = taustavarv;
document.getElementById('tw').innerHTML = aadress;
  
  };