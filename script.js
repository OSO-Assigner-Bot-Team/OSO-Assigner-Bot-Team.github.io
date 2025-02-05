async function fetchJobs() {
    const API_URL = "http://24.199.109.12:3000/jobs.v0.csv"; // Replace with your actual API URL

    try {
        const response = await fetch(API_URL);
        const jobs = await response.json();
        console.log(jobs); // Debugging

        const table = document.getElementById("jobTable");

        jobs.forEach(job => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${job["Scene ID"] || "N/A"}</td>
                <td>${job.Description || "N/A"}</td>
                <td>${job.Attachments || "N/A"}</td>
                <td>${job.Attributes || "N/A"}</td>
                <td>${job["Required roles"] || "N/A"}</td>
                <td>${job.Deadline || "N/A"}</td>
                <td>${job.Status || "N/A"}</td>
                <td>${job.Assignee || "N/A"}</td>
                <td>${job.Work || "N/A"}</td>
            `;

            table.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching job data:", error);
    }
}

window.onload = fetchJobs;