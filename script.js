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

function navigate(route) {
    // Hide all content sections
    document.querySelectorAll('.route-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Show the selected content section
    document.getElementById(`${route}-content`).style.display = 'block';
    
    // Update active link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`.nav-link[href="#${route}"]`).classList.add('active');
}

// Initialize the page with AWS content visible
document.addEventListener('DOMContentLoaded', () => {
    navigate('aws');
});


function setActiveLink(element, section) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    element.classList.add('active');
    if (typeof navigate === 'function') {
        navigate(section);
    }
}

function handleButtonClick(action) {
    const button = event.target;
    button.style.backgroundColor = '#e55a00';
    setTimeout(() => {
        button.style.backgroundColor = 'transparent';
    }, 200);
    console.log(`${action} button clicked`);
}