import { Guitar, BassGuitar, Keytar } from "./guitar.js";

const fenderStrat = new Guitar(
    "Fender",
    "Stratocaster",
    "Ocean Blue",
    6,
    "humbuckers"
)

const whiteFalcon = new Guitar(
    "Gretsch",
    "Falcon",
    "White",
    12,
    "FilterTron"
);

console.log(fenderStrat);
fenderStrat.strum();

console.log(whiteFalcon);
whiteFalcon.strum();

const precisionBass = new BassGuitar();
console.log(precisionBass);
precisionBass.strum();
precisionBass.slapDaBass();

const alesis = new Keytar(
    "Alesis",
    "Vortex",
    "Black",
    49
);

console.log(alesis);
alesis.slide();