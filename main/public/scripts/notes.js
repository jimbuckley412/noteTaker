const notesForm = document.querySelector('#notesForm');
const homeBtn = document.querySelector('#homeBtn');

homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.replace('/');
});

// handles when a user clicks the submit button

if (notesForm) {
    notesForm
        .addEventListener('submit', async (e) => {
            e.preventDefault();
            
            let notes = document.querySelector('#notes').value;
            
            const newNote = {
                notes
            };

            fetch('/api/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newNote)
            })
                .then((res) => res.json())
                .then((data) => {
                    alert(data.status);
                    note = '';
                    console.log(data);
                    window.location.replace('/');
                });
        })
        .catch((err) => { 
            console.error('Error', err);
        });
}