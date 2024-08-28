document.addEventListener("DOMContentLoaded", function() {
    const complaints = [
        { id: "001", description: "Login issues", status: "r" },
        { id: "002", description: "Payment not processed", status: "p" },
        { id: "003", description: "Unable to access account", status: "p" },
        { id: "004", description: "Error in booking ticket", status: "p" }
    ];

    const complaintList = document.getElementById("complaint-list");

    complaints.forEach(complaint => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${complaint.id}</td>
            <td>${complaint.description}</td>
            <td class="status-${complaint.status}">${complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}</td>
        `;
        complaintList.appendChild(row);
    });
});
