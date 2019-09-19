function getInitials(name) {
    return name.split(" ").map((word) => {
        return word[0];
    })
    .join('');
}

console.log(getInitials("Omondi Karanja Wanjama"));