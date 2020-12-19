function my_Dictionary() {//function call my_Dictionary
    var Animal =() { //varible for KVP's
        Species: "Dog",
        Color:"Brown",
        Breed: "German Sheapard",
        Age: "2",
        Sound:"Bark!"
    };
    delete Animal.Sound;//deletes Animal.Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound;//document method called .getElementById
}
