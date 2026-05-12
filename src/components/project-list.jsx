// use Github API to fetch and display a list of projects, including project name, description, and link to the repository

import { useState, useEffect } from "react";

import axios from 'axios';

function RepoList() {
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        async function fetchRepos() {
            try {

            const response = await axios.get('https://api.github.com/users/markolilu/repos');
            setRepos(response.data);
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