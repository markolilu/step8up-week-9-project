// use Github API to fetch and display a list of projects, including project name, description, and link to the repository

function ProjectList({ repos }) {
    
    return (
        <div>
            <h2>My GitHub Repositories</h2>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
                        
}

export default ProjectList;