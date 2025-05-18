const apiUrl = 'http://localhost:5000/roll';

document.getElementById('roll-button').addEventListener('click', async () => {
    // Fix input IDs to match HTML
    const sides = parseInt(document.getElementById('sides').value);
    const count = parseInt(document.getElementById('count').value);

    if (isNaN(sides) || isNaN(count) || sides < 2 || count < 1) {
        alert('Please enter valid numbers (sides ≥ 2, count ≥ 1)');
        return;
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sides, count }),
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Network response was not ok');
        }

        displayResults(data.results);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while rolling the dice. Please try again.');
    }
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    
    const total = results.reduce((sum, val) => sum + val, 0);
    
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result';  // Add the result class
        resultItem.textContent = `Rolled: ${result}`;
        resultsContainer.appendChild(resultItem);
    });
    
    // Add total
    const totalElement = document.createElement('div');
    totalElement.className = 'result';
    totalElement.textContent = `Total: ${total}`;
    resultsContainer.appendChild(totalElement);
}