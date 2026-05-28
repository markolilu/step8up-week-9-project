// use Github API to fetch and display a list of projects, including project name, description, and link to the repository

function ProjectList({ repos }) {
    

    return (
        <div>
            <h2>My GitHub Repositories</h2>
            
                {repos.map(repo => (
                    <div key={repo.id} className='repo-card'>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            View Repository
                        </a>
                    </div>
                ))}
            
        </div>
    );
                        
}

export default ProjectList;