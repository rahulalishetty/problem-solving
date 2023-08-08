// generate all substrings of a string s
// ABCD
// {ABCD}
// {ABC}{D}
// {AB}{CD}
// {AB}{C}{D}
// {A}{BCD}
// {A}{BC}{D}
// {A}{B}{CD}
// {A}{B}{C}{D}

const OPEN_BRACKET = "{";
const CLOSE_BRACKET = "}";

function recursivelyGenerate(s, sub) {
    if(s === "") console.log(sub);

    const n = s.length;
    for(let i=1;i<=n;i++) {
        const substr = OPEN_BRACKET + s.substring(0,i) + CLOSE_BRACKET;
        const rem = s.substring(i, s.length);
        
        recursivelyGenerate(rem, sub + substr);
    }
}

function generateAllSubstrings(s) {
    recursivelyGenerate(s, "");
}

generateAllSubstrings("ABCD");
