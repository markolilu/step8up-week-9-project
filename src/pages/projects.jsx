import { useState, useEffect } from "react";

function RepoList() {
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        async function fetchRepos() {
            try {

            const response = await fetch('https://api.github.com/users/markolilu/repos');
            const data = await response.json();
            setRepos(data);
            } catch (error) {
                console.error('Error fetching repos:', error);
            }

        }
        fetchRepos();
    }, []);


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