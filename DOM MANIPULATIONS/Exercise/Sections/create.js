function create(sentences) {
    let content = document.getElementById('content');
    sentences.forEach(s => {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = s;
        p.style.display = 'none';

        div.addEventListener('click', displayParagraph);
        div.appendChild(p);
        content.appendChild(div);

        function displayParagraph(event) {
            event.target.children[0].style.display = 'inline-block';
        }
    });
}
