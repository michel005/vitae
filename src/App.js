import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import './App.scss'
import Header from './Header'
import Biography from './pages/Biography'
import Companies from './pages/Companies'
import Courses from './pages/Courses'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import School from './pages/School'

const App = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
	const [option, setOption] = useState({
		text: 'Biografia',
		name: 'biography',
		icon: 'person',
		render: () => <Biography />,
	})

	return (
		<div className={'app'}>
			<Header />
			<div className={'content'}>
				<div className={'biography contentPane ' + (option.name === 'biography' ? 'show' : '')}>
					<h1>Biografia</h1>
					<Biography />
				</div>
				<div className={'companies contentPane ' + (option.name === 'companies' ? 'show' : '')}>
					<h1>Empresas</h1>
					<Companies />
				</div>
				<div className={'courses contentPane ' + (option.name === 'courses' ? 'show' : '')}>
					<h1>Cursos</h1>
					<Courses />
				</div>
				<div className={'projects contentPane ' + (option.name === 'projects' ? 'show' : '')}>
					<h1>Projetos</h1>
					<Projects />
				</div>
				<div className={'experiences contentPane ' + (option.name === 'experiences' ? 'show' : '')}>
					<h1>Experiências</h1>
					<Experiences />
				</div>
				<div className={'school contentPane ' + (option.name === 'school' ? 'show' : '')}>
					<h1>Formação</h1>
					<School />
				</div>
			</div>
		</div>
	)
}

export default App
