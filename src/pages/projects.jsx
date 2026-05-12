import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProjectList from '../components/project-list';

function Projects() {
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
            <h1>My Projects</h1>
            <ProjectList repos={repos} />
        </div>
    );
}

export default Projects;

