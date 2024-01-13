const courses = [];

// Function to add a new course
function addCourse() {
    const courseName = document.getElementById("course-name").value;
    const course = { name: courseName, cards: [] };
    courses.push(course);
    displayCourses();
}

// Function to display courses and their cards
function displayCourses() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    courses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("card");
        courseDiv.textContent = course.name;
        courseDiv.onclick = () => displayCards(course);
        cardContainer.appendChild(courseDiv);
    });
}

// Function to display cards for a specific course
function displayCards(course) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    const backBtn = document.createElement("button");
    backBtn.textContent = "Back to Courses";
    backBtn.onclick = displayCourses;
    cardContainer.appendChild(backBtn);

    const courseTitle = document.createElement("h2");
    courseTitle.textContent = course.name;
    cardContainer.appendChild(courseTitle);

    const addCardForm = document.createElement("form");
    addCardForm.id = "add-card-form";
    addCardForm.innerHTML = `
            <label for="term">Term:</label>
            <input type="text" id="term" required>
            <label for="definition">Definition:</label>
            <input type="text" id="definition" required>
            <button type="button" onclick="addCard('${course.name}')">Add Card</button>
        `;
    cardContainer.appendChild(addCardForm);

    const cardsDiv = document.createElement("div");
    cardsDiv.style.display = "flex";
    cardsDiv.style.flexWrap = "wrap";

    course.cards.forEach((card, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.textContent = card.term;
        cardDiv.onclick = () => flipCard(cardDiv, card.definition);
        cardsDiv.appendChild(cardDiv);
    });

    cardContainer.appendChild(cardsDiv);
}

// Function to add a new card to a course
function addCard(courseName) {
    const term = document.getElementById("term").value;
    const definition = document.getElementById("definition").value;

    const course = courses.find(c => c.name === courseName);
    if (course) {
        course.cards.push({ term, definition });
        displayCards(course);
    }
}

// Function to flip a card and display its definition
function flipCard(cardDiv, definition) {
    cardDiv.textContent = definition;
    cardDiv.onclick = () => flipCardBack(cardDiv, definition);
}

// Function to flip a card back to its term
function flipCardBack(cardDiv, term) {
    cardDiv.textContent = term;
    cardDiv.onclick = () => flipCard(cardDiv, term);
}
