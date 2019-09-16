function getInitials(name) {
    let initials = "";
    let waitingForSpace = false;

    for (var i =0; i < name.length; i++){
        if(!waitingForSpace){
            initials += name[i];
            waitingForSpace = true;
        }

        if (name[i] === " "){
            waitingForSpace = false;
        }
    }

    return initials;
}

console.log ( getInitials("Omondi Karanja Wanjama"));