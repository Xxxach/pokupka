if (window.innerWidth > 768) {
alert("Этот сайт доступен только на мобильных устройствах.");
}

document.querySelectorAll('.tabs a').forEach(tab => {
    tab.onclick = e => {
        e.preventDefault();
        let currentTab = e.target;
        let targetContent = document.querySelector(currentTab.getAttribute('href'));

        // Удаляем активный класс со всех вкладок и содержимого
        document.querySelectorAll('.tabs a').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Активируем текущую вкладку и ее содержимое
        currentTab.classList.add('active');
        targetContent.classList.add('active');
    };
});

function resetForm() { // Сброс всех инпутов 
document.querySelectorAll('input').forEach(input => { 
    if (input.type === 'text' || input.type === 'email' || input.type === 'number') {
         input.value = ''; // Сброс текстовых полей 
         } 
         else if (input.type === 'checkbox') { 
            input.checked = false; // Снятие галочек 
            } 
        }
    );
} 

function clearInput() {
    const input = document.getElementById("obyom__ot-input");
    input.value = "";
    input.focus();
}