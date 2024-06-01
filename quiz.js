// Quiz data
const questions = [
    {
        question: "Which of the following is not a form of intelletual Property ?",
        options: ["Patents", "Trademarks", "Real Estate", "Copyrights"],
        answer: 2
    },
    {
        question: "The term of a patent is generally :",
        options: ["10 years", "20 years", "50 years", "70 years"],
        answer: 1
    },
    {
        question: "Which of the following can be patented ?",
        options: ["Scientific theories", "Mathematicals Methods", "A new chemical process", "Literary works"],
        answer: 2
    },
    {
        question: "A trademark typically protects :",
        options: ["The visual appereance of a product", "The invention of a new machine", "A brand name or logo", "Software code"],
        answer: 2
    },
    {
        question: "Copyrights generally last for the life of the author plus how many years ?",
        options: ["20 years", "50 years", "70 years", "100 years"],
        answer: 2
    },
    {
        question: "Geographical Indications protect :",
        options: ["Industrial designs", "Inventions", "Products that have a specific geographical origin", "Software"],
        answer: 2
    },
    {
        question: "Which international treaty governs the protection of industrial designs ? ",
        options: ["Berne Convention", "Paris Convention", "Hague Agreement", "TRIPS Agreement"],
        answer: 2
    },
    {
        question: "Which body administers the TRIPS Agreement ? ",
        options: ["WIPO", "WTO", "UNESCO", "UNESCO", "ICC"],
        answer: 1
    },
    {
        question: "What does the term 'IPR infringement' refer to ? ",
        options: ["Legal use of intellectual property", "Unauthorized use of intellectual property", "Expiration of intellectual property rights", "Transfer of intellectual property rights"],
        answer: 1
    },
    {
        question: "Which of the following is an example of a collective mark ? ",
        options: ["Nike swoosh", "ISO certification ", "Microsoft Windows", "Apple logo"],
        answer: 1
    },
    {
        question: "Which type of intellectual property protects the layout design of integrated circuits ? ",
        options: ["Trademark ", "Patent", "Industrial design", "Semiconductor layout design"],
        answer: 3
    },
    {
        question: "The 'first to file' rule is associated with: ",
        options: ["Patents ", "Trademarks", "Copyrights", "Trade secrets"],
        answer: 0
    },
    {
        question: "Trade secrets are protected by ",
        options: ["Registration with a government office", "Disclosure to the public", "Maintaining confidentiality", "Filing a patent application"],
        answer: 2
    },
    {
        question: "The Berne Convention deals primarily with: ",
        options: ["  Patents", "Trademarks", " Industrial designs", "Copyrights"],
        answer: 3
    },
    {
        question: "The Madrid System is used for : ",
        options: ["International patent applications", "International trademark registrations", "International copyright protections", "International design protections"],
        answer: 1
    },
    {
        question: "Which of the following is not typically protected by copyright ?  ",
        options: ["Books", "Software", "Music", "Inventions"],
        answer: 3
    },
    {
        question: "Industrial designs are protected for a maximum period of:   ",
        options: ["5 years", "10  years", "15 years", "25 years"],
        answer: 1
    },
    {
        question: "The term 'prior art' refers to: ",
        options: ["A new invention ", "Publicly known information relevant to a patent's claims", "An expired patent", "A trademark registration"],
        answer: 1
    },
    {
        question: "Which of the following is true about utility patents ? ",
        options: ["They are granted for ornamental designs", "They protect functional aspects of inventions", "They last for 50 years", "They are only available in the United States"],
        answer: 1
    },
    {
        question: "Fair use is a limitation on: ",
        options: ["Patent rights ", "Trademark rights", "Copyright rights", "Trade secret rights"],
        answer: 2
    },
    {
        question: "An example of a non-obvious invention could be:",
        options: ["A new mathematical formula ", "A simple mechanical device", "An innovative pharmaceutical compounds", "A natural discovery"],
        answer: 2
    },
    {
        question: "The main purpose of a patent is to: ",
        options: [" Protect a brand name", "Encourage innovation by granting exclusive rights", "Protect artistic works", "Safeguard trade secrets"],
        answer: 1
    },
    {
        question: "Which document must be filed to initiate a patent application ? ",
        options: ["Notice of infringement", "Declaration of originality", "Patent specification", "Trademark application"],
        answer: 2
    },
    {
        question: "The PCT (Patent Cooperation Treaty) is primarily used for:",
        options: ["National patent filings", "International patent applications", " Trademark registrations", "Copyright protections"],
        answer: 1
    },
    {
        question: "A famous trademark is:",
        options: ["Generic and widely used", "Distinctive and well-known globally", "Specific to a local region", "Used for a short period"],
        answer: 1
    },
    {
        question: "The duration of protection for a trade secret is:",
        options: ["Fixed by law", "Indefinite as long as secrecy is maintained ", "20 years", "50 years"],
        answer: 1
    },
    {
        question: "In the context of patents, 'claims' refer to:",
        options: ["The abstract of the patent", "The legal definitions of the invention's scope", "The background of the invention", "The illustrations of the invention"],
        answer: 1
    },
    {
        question: "Which of the following is not a requirement for patentability ? ",
        options: ["Novelty ", "Non-obviousness", "Usefulness", "Commercial viability"],
        answer: 3
    },
    {
        question: "Which agreement focuses on the enforcement of IP rights internationally ?  ",
        options: ["Paris Convention ", "TRIPS Agreement", "Berne Convention", "Madrid Protocol"],
        answer: 1
    },
    {
        question: "Which is a remedy for IP infringement ? ",
        options: ["Monetary damages", "Patent registration", "Trademark licensing", "Copyright assignment"],
        answer: 0
    },
    {
        question: "An industrial design primarily protects: ",
        options: ["Functional features of a product ", "Ornamental aspects of a product", "Scientific discoveries", "Business methods"],
        answer: 1
    },
    {
        question: "Copyright infringement can be defended by:",
        options: ["Claiming ignorance of the law ", "Fair use doctrine", "Length of infringement", "Registration status"],
        answer: 1
    },
    {
        question: "A 'cease and desist' letter is used to:",
        options: ["Apply for a trademark", "Inform an infringer to stop illegal activities", "Register a copyright", "File a patent"],
        answer: 1
    },
    {
        question: "Intellectual Property Rights are important because they:",
        options: ["Prevent the sharing of knowledge", "Promote innovation and creativity", "Are optional for businesses", "Limit international trade"],
        answer: 1
    },
    {
        question: "Trademark dilution refers to:",
        options: ["The enhancement of a trademark's value", "The use of a mark that reduces the distinctiveness of a famous mark", "Trademark infringement", "Trademark registration"],
        answer: 1
    },
    {
        question: "The Digital Millennium Copyright Act (DMCA) is a law that:",
        options: [" Encourages software piracy", "Protects digital copyrights", "Regulates patent filings", "Registers trademarks online"],
        answer: 1
    },
    {
        question: "Which of the following is a digital rights management (DRM) tool ? ",
        options: [" Patent specification", "Encryption software", "Trademark registration", " Industrial design application"],
        answer: 1
    },
    {
        question: "Who is considered the 'inventor' in a patent application ?",
        options: ["The person who finances the invention", "The person who manufactures the invention", "The person who conceptualizes the invention", "The person who markets the invention"],
        answer: 2
    },
    {
        question: "Which entity primarily deals with global intellectual property issues ? ",
        options: [" WIPO", "WTO", "IMF", "WHO"],
        answer: 0
    },
    {
        question: "What is the primary function of a patent office ? ",
        options: ["To enforce IP laws", "To grant patents", "To litigate IP disputes", "To promote international trade"],
        answer: 1
    },
    {
        question: "What is the term of copyright for an author of a book ?",
        options: ["100 years", "The life of the author", "The life of the author plus 50 years", "The life of the author plus 60 years"],
        answer: 3
    },
    {
        question: "How long does a patent typically last from the filing date in most countries ?",
        options: ["5 years", "10 years", "20 years", "50 years"],
        answer: 2
    },
    {
        question: "Which international agreement is primarily concerned with the protection of intellectual property rights ?",
        options: [" Paris Convention", "TRIPS Agreement", "Berne Convention", "Geneva Convention"],
        answer: 1
    },
    {
        question: "The use of information ad ideas protected by IPR are of ?",
        options: ["Cultural value", "Social value", "Commercial value", "Moral value"],
        answer: 2
    },
    {
        question: "Which of the following can be protected under copyright law :",
        options: ["A new chemical formula", "A company logo", "A novel", "A business method"],
        answer: 2
    },
    {
        question: "Which office is responsible for the registration of trademarks in United States ?",
        options: ["United States Patent and Trademark Office (USPTO)", "Library of Congress", "Copyright Office", "Federal Trade Commission (FTC)"],
        answer: 0
    },
    {
        question: "In the context of patents, what does the term “prior art” refer to ?",
        options: ["Artistic works created before a specific date", " All information made available to the public in any form before a given date", " Artworks that are in the public domain", "Previous patents filed in the same field"],
        answer: 1
    },
    {
        question: "Which of the following is a requirement for a work to be eligible for copyright protection ?",
        options: ["It must be registered with the Copyright Office", "It must be published", "It must be original and fixed in a tangible medium of expression", "It must be novel and non-obvious"],
        answer: 2
    },
    {
        question: "Which among the following is closely associated with intellectual property rights ?",
        options: ["GATS", "TRIMS", "TRIPs", "MFN"],
        answer: 2
    },
    {
        question: "Under which type of agreement royalty is paid on the basis of sale ?",
        options: ["Mining", "Patent", "Copyright", "Licensing"],
        answer: 2
    }
];

// Initialize quiz
function initQuiz() {
    const quizContainer = document.getElementById('quiz');
    let quizHTML = '';

    questions.forEach((question, index) => {
        quizHTML += `
            <div class="question" style='padding:20px;'>
                <p>${index + 1}. ${question.question}</p>
                <div class="options">
        `;
        question.options.forEach((option, optionIndex) => {
            quizHTML += `
                <div>
                    <input type="radio" id="option_${index}_${optionIndex}" name="question${index}" value="${optionIndex}">
                    <label for="option_${index}_${optionIndex}">${option}</label>
                </div>
            `;
        });
        quizHTML += `</div></div>`;
    });

    quizContainer.innerHTML = quizHTML;
}

// Calculate score
function calculateScore() {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (parseInt(selectedOption.value) === question.answer) {
                score++;
            }
        }
    });
    return score;
}

// Display result
function showResult() {
    const resultContainer = document.getElementById('result');
    const score = calculateScore();
    resultContainer.innerHTML = `<p>Your score is: ${score}/${questions.length}</p>`;
}

// Event listeners
document.addEventListener('DOMContentLoaded', initQuiz);
document.getElementById('submit').addEventListener('click', showResult);
