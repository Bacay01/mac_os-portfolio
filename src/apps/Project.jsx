import { useEffect, useState } from 'react'
import axios from 'axios'

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const featuredRepos = [
    "ORAIMO-CLONE",
    "Movers_Bit-frontend",
    "Todo-list",
    "go-daddy",
    "Grading-system",
    "mac_os-portfolio",
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const results = await Promise.all(
          featuredRepos.map((repo) =>
            axios.get(`https://api.github.com/repos/Bacay01/${repo}`)
          )
        );
        setProjects(results.map((res) => res.data));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading projects...</p>;
  }

  return (
    <div className="projects">
      {projects.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="project-card"
        >
          <h3>{repo.name}</h3>
          <p>{repo.description || "No description provided"}</p>
          <div className="project-meta">
            <span>{repo.language || "Mixed"}</span>
            <span>⭐ {repo.stargazers_count}</span>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Projects