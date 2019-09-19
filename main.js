document.getElementById('issueInputForm').addEventListener('submit', addIssue)

function fetchIssues() {

    let storedIssues = JSON.parse(localStorage.getItem("jsIssues"))
    let issuesList = document.getElementById("issuesList")

    if (issuesList) {

        if (storedIssues) {

            storedIssues.forEach(issue => {
                issuesList.insertAdjacentHTML('afterbegin', `<div class="well"> \
                                            <h6>Issue ID: ${issue.id}</h6> \
                                            <p><span class="label label-info>${issue.status}</span></p> \
                                            <h3>${issue.desc}</h3> \
                                            <p><span class="glypicon glypicon-time"></span>${issue.severity} \
                                            <span class="glypicon glypicon-user"></span>${issue.assignedTo}<//p> \
                                            <a href="#" class="btn btn-warning" onclick="setStatusClosed(${issue.id})>Close</a> \
                                            <a href="#" class="btn btn-danger" onclick="deleteIssue(${issue.id})>Delete</a> \
                                            </div>`
                ) 
            });
        }
        else {
            // issuesList.
        }
    }
}

function addIssue(e) {

    fetchIssues()
}

function updateIssue() {

    fetchIssues()
}

function deleteIssue(issueId) {

    fetchIssues()
}

function setStatusClosed(issueId) {

    fetchIssues()

}