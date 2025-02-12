// Project Data
const projects = {
    "project1": {
        "title": "Hospital Readmission Analysis",
        "description": "Developed predictive models using XGBoost with an AUC score of 0.69.",
        "link": "https://your-link.com/hospital-readmission"
    },
    "project2": {
        "title": "EPL Player Market Value Analysis",
        "description": "Analyzed EPL player performance, club trends, and valuations.",
        "link": "https://your-link.com/epl-analysis"
    },
    "project3": {
        "title": "Walmart Supply Chain",
        "description": "Analyzed Walmart's supply chain system for efficiency and sustainability.",
        "link": "https://your-link.com/walmart-scm"
    }
};

// Open Modal Function
function openModal(projectId) {
    document.getElementById('projectModal').style.display = 'flex';
    document.getElementById('modalTitle').innerText = projects[projectId].title;
    document.getElementById('modalDescription').innerText = projects[projectId].description;
    document.getElementById('modalLink').href = projects[projectId].link;
}

// Close Modal Function
function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}
