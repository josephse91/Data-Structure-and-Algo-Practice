var numMatchingSubseq1 = function (s, words) {
    let letterCount = {};
    count = 0;

    for (let i = 0; i < s.length; i++) {
        letterCount[s[i]] ? letterCount[s[i]]++ : (letterCount[s[i]] = 1);
    }

    console.log(letterCount);
    for (let j = 0; j < words.length; j++) {
        let word = words[j];
        let sWord = Object.assign({}, letterCount);
        let possibleSeq = true;

        for (let idx = 0; idx < word.length; idx++) {
            let letter = word[idx];

            if (sWord[letter] > 0) {
                sWord[letter]--;
            } else {
                console.log(sWord, word, letter);
                possibleSeq = false;
                break;
            }
        }
        if (possibleSeq) count++;
    }
    return count;
};

var numMatchingSubseq = function (s, words) {
    let subs = {};
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let let1 = words[i][0];
        subs[let1] ? subs[let1].push(words[i]) : (subs[let1] = [words[i]]);
    }

    for (let n = 0; n < s.length; n++) {
        let letter = s[n];

        let strs = subs[letter];

        if (strs) {
            subs[letter] = [];
            for (let i = 0; i < strs.length; i++) {
                let part = strs[i];
                if (part.length === 1) {
                    console.log(strs, part, count);
                    count++;
                } else {
                    console.log(strs, part, count);
                    subs[part[1]] ? subs[part[1]].push(part.slice(1)) : (subs[part[1]] = [part.slice(1)]);
                }
            }
        }

        // console.log(subs, letter, count);
    }
    return count;
};

s = "abcde";
words = ["a", "bb", "acd", "ace"];

console.log(numMatchingSubseq(s, words));

s =
    "ricogwqznwxxcpueelcobbbkuvxxrvgyehsudccpsnuxpcqobtvwkuvsubiidjtccoqvuahijyefbpqhbejuisksutsowhufsygtwteiqyligsnbqglqblhpdzzeurtdohdcbjvzgjwylmmoiundjscnlhbrhookmioxqighkxfugpeekgtdofwzemelpyjsdeeppapjoliqlhbrbghqjezzaxuwyrbczodtrhsvnaxhcjiyiphbglyolnswlvtlbmkrsurrcsgdzutwgjofowhryrubnxkahocqjzwwagqidjhwbunvlchojtbvnzdzqpvrazfcxtvhkruvuturdicnucvndigovkzrqiyastqpmfmuouycodvsyjajekhvyjyrydhxkdhffyytldcdlxqbaszbuxsacqwqnhrewhagldzhryzdmmrwnxhaqfezeeabuacyswollycgiowuuudrgzmwnxaezuqlsfvchjfloczlwbefksxsbanrektvibbwxnokzkhndmdhweyeycamjeplecewpnpbshhidnzwopdjuwbecarkgapyjfgmanuavzrxricbgagblomyseyvoeurekqjyljosvbneofjzxtaizjypbcxnbfeibrfjwyjqrisuybfxpvqywqjdlyznmojdhbeomyjqptltpugzceyzenflfnhrptuugyfsghluythksqhmxlmggtcbdddeoincygycdpehteiugqbptyqbvokpwovbnplshnzafunqglnpjvwddvdlmjjyzmwwxzjckmaptilrbfpjxiarmwalhbdjiwbaknvcqovwcqiekzfskpbhgxpyomekqvzpqyirelpadooxjhsyxjkfqavbaoqqvvknqryhotjritrkvdveyapjfsfzenfpuazdrfdofhudqbfnzxnvpluwicurrtshyvevkriudayyysepzqfgqwhgobwyhxltligahroyshfndydvffd";

words = [
    "iowuuudrgzmw",
    "azfcxtvhkruvuturdicnucvndigovkzrq",
    "ylmmo",
    "maptilrbfpjxiarmwalhbd",
    "oqvuahijyefbpqhbejuisksutsowhufsygtwteiqyligsnbqgl",
    "ytldcdlxqbaszbuxsacqwqnhrewhagldzhr",
    "zeeab",
    "cqie",
    "pvrazfcxtvhkruvuturdicnucvndigovkzrqiya",
    "zxnvpluwicurrtshyvevkriudayyysepzq",
    "wyhxltligahroyshfn",
    "nhrewhagldzhryzdmmrwn",
    "yqbvokpwovbnplshnzafunqglnpjvwddvdlmjjyzmw",
    "nhrptuugyfsghluythksqhmxlmggtcbdd",
    "yligsnbqglqblhpdzzeurtdohdcbjvzgjwylmmoiundjsc",
    "zdrfdofhudqbfnzxnvpluwicurrtshyvevkriudayyysepzq",
    "ncygycdpehteiugqbptyqbvokpwovbnplshnzafun",
    "gdzutwgjofowhryrubnxkahocqjzww",
    "eppapjoliqlhbrbgh",
    "qwhgobwyhxltligahroys",
    "dzutwgjofowhryrubnxkah",
    "rydhxkdhffyytldcdlxqbaszbuxs",
    "tyqbvokpwovbnplshnzafunqglnpjvwddvdlmjjyzmwwxzjc",
    "khvyjyrydhxkdhffyytldcdlxqbasz",
    "jajekhvyjyrydhxkdhffyytldcdlxqbaszbuxsacqwqn",
    "ppapjoliqlhbrbghq",
    "zmwwxzjckmaptilrbfpjxiarm",
    "nxkahocqjzwwagqidjhwbunvlchoj",
    "ybfxpvqywqjdlyznmojdhbeomyjqptltp",
    "udrgzmwnxae",
    "nqglnpjvwddvdlmjjyzmww",
    "swlvtlbmkrsurrcsgdzutwgjofowhryrubn",
    "hudqbfnzxnvpluwicurr",
    "xaezuqlsfvchjf",
    "tvibbwxnokzkhndmdhweyeycamjeplec",
    "olnswlvtlbmkrsurrcsgdzu",
    "qiyastqpmfmuouycodvsyjajekhvyjyrydhxkdhffyyt",
    "eiqyligsnbqglqblhpdzzeurtdohdcbjvzgjwyl",
    "cgiowuuudrgzmwnxaezuqlsfvchjflocz",
    "rxric",
    "cygycdpehteiugqbptyqbvokpwovbnplshnzaf",
    "g",
    "surrcsgd",
    "yzenflfnhrptuugyfsghluythksqh",
    "gdzutwgjofowhryrubnxkahocqjzwwagqid",
    "ddeoincygycdpeh",
    "yznmojdhbeomyjqptltpugzceyzenflfnhrptuug",
    "ejuisks",
    "teiqyligsnbqglqblhpdzzeurtdohdcbjvzgjwylmmoi",
    "mrwnxhaqfezeeabuacyswollycgio",
    "qfskkpfakjretogrokmxemjjbvgmmqrfdxlkfvycwalbdeumav",
    "wjgjhlrpvhqozvvkifhftnfqcfjmmzhtxsoqbeduqmnpvimagq",
    "ibxhtobuolmllbasaxlanjgalgmbjuxmqpadllryaobcucdeqc",
    "ydlddogzvzttizzzjohfsenatvbpngarutztgdqczkzoenbxzv",
    "rmsakibpprdrttycxglfgtjlifznnnlkgjqseguijfctrcahbb",
    "pqquuarnoybphojyoyizhuyjfgwdlzcmkdbdqzatgmabhnpuyh",
    "akposmzwykwrenlcrqwrrvsfqxzohrramdajwzlseguupjfzvd",
    "vyldyqpvmnoemzeyxslcoysqfpvvotenkmehqvopynllvwhxzr",
    "ysyskgrbolixwmffygycvgewxqnxvjsfefpmxrtsqsvpowoctw",
    "oqjgumitldivceezxgoiwjgozfqcnkergctffspdxdbnmvjago",
    "bpfgqhlkvevfazcmpdqakonkudniuobhqzypqlyocjdngltywn",
    "ttucplgotbiceepzfxdebvluioeeitzmesmoxliuwqsftfmvlg",
    "xhkklcwblyjmdyhfscmeffmmerxdioseybombzxjatkkltrvzq",
    "qkvvbrgbzzfhzizulssaxupyqwniqradvkjivedckjrinrlxgi",
    "itjudnlqncbspswkbcwldkwujlshwsgziontsobirsvskmjbrq",
    "nmfgxfeqgqefxqivxtdrxeelsucufkhivijmzgioxioosmdpwx",
    "ihygxkykuczvyokuveuchermxceexajilpkcxjjnwmdbwnxccl",
    "etvcfbmadfxlprevjjnojxwonnnwjnamgrfwohgyhievupsdqd",
    "ngskodiaxeswtqvjaqyulpedaqcchcuktfjlzyvddfeblnczmh",
    "vnmntdvhaxqltluzwwwwrbpqwahebgtmhivtkadczpzabgcjzx",
    "yjqqdvoxxxjbrccoaqqspqlsnxcnderaewsaqpkigtiqoqopth",
    "wdytqvztzbdzffllbxexxughdvetajclynypnzaokqizfxqrjl",
    "yvvwkphuzosvvntckxkmvuflrubigexkivyzzaimkxvqitpixo",
    "lkdgtxmbgsenzmrlccmsunaezbausnsszryztfhjtezssttmsr",
    "idyybesughzyzfdiibylnkkdeatqjjqqjbertrcactapbcarzb",
    "ujiajnirancrfdvrfardygbcnzkqsvujkhcegdfibtcuxzbpds",
    "jjtkmalhmrknaasskjnixzwjgvusbozslrribgazdhaylaxobj",
    "nizuzttgartfxiwcsqchizlxvvnebqdtkmghtcyzjmgyzszwgi",
    "egtvislckyltpfogtvfbtxbsssuwvjcduxjnjuvnqyiykvmrxl",
    "ozvzwalcvaobxbicbwjrububyxlmfcokdxcrkvuehbnokkzala",
    "azhukctuheiwghkalboxfnuofwopsrutamthzyzlzkrlsefwcz",
    "yhvjjzsxlescylsnvmcxzcrrzgfhbsdsvdfcykwifzjcjjbmmu",
    "tspdebnuhrgnmhhuplbzvpkkhfpeilbwkkbgfjiuwrdmkftphk",
    "jvnbeqzaxecwxspuxhrngmvnkvulmgobvsnqyxdplrnnwfhfqq",
    "bcbkgwpfmmqwmzjgmflichzhrjdjxbcescfijfztpxpxvbzjch",
    "bdrkibtxygyicjcfnzigghdekmgoybvfwshxqnjlctcdkiunob",
    "koctqrqvfftflwsvssnokdotgtxalgegscyeotcrvyywmzescq",
    "boigqjvosgxpsnklxdjaxtrhqlyvanuvnpldmoknmzugnubfoa",
    "jjtxbxyazxldpnbxzgslgguvgyevyliywihuqottxuyowrwfar",
    "zqsacrwcysmkfbpzxoaszgqqsvqglnblmxhxtjqmnectaxntvb",
    "izcakfitdhgujdborjuhtwubqcoppsgkqtqoqyswjfldsbfcct",
    "rroiqffqzenlerchkvmjsbmoybisjafcdzgeppyhojoggdlpzq",
    "xwjqfobmmqomhczwufwlesolvmbtvpdxejzslxrvnijhvevxmc",
    "ccrubahioyaxuwzloyhqyluwoknxnydbedenrccljoydfxwaxy",
    "jjoeiuncnvixvhhynaxbkmlurwxcpukredieqlilgkupminjaj",
    "pdbsbjnrqzrbmewmdkqqhcpzielskcazuliiatmvhcaksrusae",
    "nizbnxpqbzsihakkadsbtgxovyuebgtzvrvbowxllkzevktkuu",
    "hklskdbopqjwdrefpgoxaoxzevpdaiubejuaxxbrhzbamdznrr",
    "uccnuegvmkqtagudujuildlwefbyoywypakjrhiibrxdmsspjl",
    "awinuyoppufjxgqvcddleqdhbkmolxqyvsqprnwcoehpturicf",
];

console.log(numMatchingSubseq(s, words));
