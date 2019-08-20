function fetchIssues() {

    let storedIssues = JSON.parse(localStorage.getItem("jsIssues"))
    let issuesList = document.getElementById("issueList")

    if (issuesListDiv) {

        storedIssues.forEach(issue => {
            issuesList.insertAdjacentHTML += `<div class="well"> \
                                        <h6>Issue ID: ${issue.id}</h6> \
                                        <p><span class="label label-info>${issue.status}</span></p> \
                                        <h3>${issue.desc}</h3> \
                                        <p><span class="glypicon glypicon-time"></span>${issue.severity} \
                                        <span class="glypicon glypicon-user"></span>${issue.assignedTo}<//p> \
                                        <a href="#" class="btn btn-warning" onclick="setStatusClosed(${issue.id})>Close</a> \
                                        <a href="#" class="btn btn-danger" onclick="deleteIssue(${issue.id})>Delete</a> \
                                        </div>` 
        });
    }
}

function addIssue() {

    fetchIssues()
}

function updateIssue() {

    fetchIssues()
}

function deleteIssue() {

    fetxhIssues()
}