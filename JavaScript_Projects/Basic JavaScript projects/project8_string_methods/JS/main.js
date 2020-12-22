function full_Sentence() {//contenate sentence
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4)
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
}

function slice_Method() {// slices words 
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function Hello() {
var str = "Hello World";
var res = str.toUpperCase();
document.getElementById("Capital").innerHTML = res;
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fix_It() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("Fix").innerHTML = n;
}