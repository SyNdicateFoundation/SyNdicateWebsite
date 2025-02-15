document.addEventListener('DOMContentLoaded', function() {
    const repoNumberElement = document.getElementById('repo-number');

    fetch('https://api.github.com/orgs/SyNdicateFoundation/repos')
        .then(response => response.json())
        .then(data => {
            repoNumberElement.textContent = data.length;
        })
        .catch(error => {
            console.error('Error fetching repository count:', error);
            repoNumberElement.textContent = 'Error';
        });
});
