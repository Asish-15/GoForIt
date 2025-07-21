/*function toggleLecture(id) {
    var lecture = document.getElementById(id);
    if (lecture.style.display === "block") {
        lecture.style.display = "none";
    } else {
        lecture.style.display = "block";
    }
}*/


function toggleLecture(id) {
    var lecture = document.getElementById(id);
    var icon = lecture.previousElementSibling.querySelector('.toggle-icon');
    if (lecture.style.display === "block") {
        lecture.style.display = "none";
        icon.textContent = '▶';
    } else {
        lecture.style.display = "block";
        icon.textContent = '▼';
    }
}