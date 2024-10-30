export const saveUserProgress = (progress: any) => {
    fetch('http://localhost:5180/data/saveUserProgress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId: '12345', progress })
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json();
    })
    .then(data => {
      console.log("User progress saved:", data);
    })
    .catch(error => {
      console.error("Error saving user progress:", error);
    });
  };