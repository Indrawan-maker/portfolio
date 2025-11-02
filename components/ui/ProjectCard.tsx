import projectImage1 from '@/components/images/project1.webp'
import projectImage2 from '@/components/images/project2.webp'
import { Card } from './Card';




export const ProjectCard = () => {
    return (
        <div className='md:ml-0 md:flex md:gap-4 grid items-center justify-center'>
        <Card projectTitle='Puzzle 3 x 3'
        projectDescription='An anime image puzzle game in a 3x3 grid.' 
        projectImage={projectImage1} 
        projectLink='https://anime-puzzle-3x3.vercel.app/'
        techStack={['tailwindCSS']}
        />
        {/* pemisah antar project */}
        <Card projectTitle='Personal Portfolio'
        projectDescription='A simple portfolio to showcase my project as a developer.' 
        projectImage={projectImage2} 
        projectLink='https://portfolio-sigma-virid-u677bz60w1.vercel.app/'
        techStack={['tailwindCSS', 'nextJS']}
        />
        </div>
    )
}