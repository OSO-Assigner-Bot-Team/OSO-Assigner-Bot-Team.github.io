async function fetchJobs() {
    const API_URL = "https://24.199.109.12:3000/jobs.0.csv"; // This is a CSV file, not JSON

    try {
        const response = await fetch(API_URL);
        const text = await response.text(); // Get CSV text
        console.log(text); // Debugging CSV response

        const jobs = csvToJson(text); // Convert CSV to JSON
        console.log(jobs); // Debugging JSON output

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
        console.error("Error fetching jobs:", error);
    }
}
