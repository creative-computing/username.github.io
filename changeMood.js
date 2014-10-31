
function changeMood(e) {
e.preventDefault();
var mood = document.getElementById('moodTextBox').value;
document.getElementById('moodToday').textContent = mood;
document.getElementById('moodTextBox').value = '';
}

addEventListener('submit', changeMood, false);