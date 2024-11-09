function fixed11() {
    if(getComputedStyle(document.getElementById("s1"),null).position=="static") {
        Win_scroll = scrollY
        document.getElementById("s1").style.position="fixed"
        document.getElementById("s1").style.top="0"
        document.getElementById("s1").style.left="0"
        document.getElementById("s1").style.width="calc(100% - 100px)"
        document.getElementById("s1").style.height="100%"
        document.getElementById("s2").style.display="none"
        document.getElementById("s3").style.display="none"
        document.getElementById("s4").style.display="none"
        console.log(Win_scroll)
    }
    else{
    document.getElementById("s1").style.position="static"
    document.getElementById("s2").style.display="block"
    document.getElementById("s3").style.display="block"
    document.getElementById("s4").style.display="block"
    scrollTo (0 , Win_scroll)
}
}
document.getElementById("s2").addEventListener("mousemove" , function(event) {
 document.getElementById("pos2").innerHTML = event.clientX + "X" + "," + event.clientY + "Y"
})
function res() {
    document.getElementById("leaf1").classList.remove("anim")
    setTimeout('document.getElementById("leaf1").classList.add("anim")', 10)
    document.getElementById("leaf1").style.opacity = "1"
}
function res1() {
    document.getElementById("leaf2").classList.remove("anim")
    setTimeout('document.getElementById("leaf2").classList.add("anim")', 10)
    document.getElementById("leaf2").style.opacity = "1"
}
function res2() {
    document.getElementById("leaf3").classList.remove("anim")
    setTimeout('document.getElementById("leaf3").classList.add("anim")', 10)
    document.getElementById("leaf3").style.opacity = "1"
}
function res3() {
    document.getElementById("leaf4").classList.remove("anim")
    setTimeout('document.getElementById("leaf4").classList.add("anim")', 10)
    document.getElementById("leaf4").style.opacity = "1"
    
}