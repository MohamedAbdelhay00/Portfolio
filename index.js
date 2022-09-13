
const year = new Date().getFullYear();

const handleYear = () => {
    return document.getElementById("copyright").innerHTML = "Copyright ⓒ " + year;
}