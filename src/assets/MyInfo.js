import MOOSample from './moo_sample.png'
import GrigoSample from './grigo_sample.png'
import GerFinWEBSample from './gerfinweb_sample.png'

const MyInfo = {
	name: 'Michel Douglas Grigoli',
	nameReduced: 'Michel D. Grigoli',
	email: 'mdgrigoli@hotmail.com.br',
	birthday: '19/12/1991',
	phone: '(44) 99129-9291',
	country: 'Brasil',
	state: 'Paraná',
	city: 'Maringá',
	languages: 'Inglês e Português',
	startOnTI: '01/01/2013',
	linkedin: 'https://www.linkedin.com/in/michel-douglas-grigoli-a59a02198/',
	facebook: 'https://www.facebook.com/micheldouglas.grigoli',
	instagram: 'https://www.instagram.com/mdgrigoli005/',
	github: 'https://github.com/michel005',
	biography: {
		description: [
			'Sou um programador apaixonado por programação, sempre gostei muito de tecnologia e estou sempre disposto a aprender coisas novas, assuntos relacionados a área de TI, sugerir melhorias no processo de desenvolvimento e trabalhar para uma melhor convivência no time que atuo.',
			'Possuo hoje (@#DATE@#) @#YEAR@# anos de experiência com as tecnologias mais atuais do mercado e melhores metodologias de desenvolvimento.',
		],
		objectives: [
			'Quero crescer profissionalmente, adiquirir sempre mais conhecimento, atuar com as áreas do meu interesse. Hoje gosto muito da área de UX, e eu mesmo já pesquisei e implementei muitas coisas por conta própria mas nunca trabalhei profissionalmente com isso.',
			'Pretendo sempre aperfeissoar meus conhecimentos com PL/SQL de alta performance, estudar sobre desenvolvimento mobile (que atualmente é o meu ponto fraco), e desenvolver projetos com foco em alta escalabilidade.',
		],
	},
	school: [
		{
			name: 'Colégio Estadual Dr. Gastão Vidgal',
			location: 'Maringá, Paraná, Brasil',
			timeRange: '1996 - 2011',
			description: 'Ensino fundamental e médio',
		},
		{
			name: 'Faculdades Alvorada de Maringá',
			location: 'Maringá, Paraná, Brasil',
			timeRange: '2012 - 2015',
			description: 'Ciência da Computação',
		},
	],
	companies: [
		{
			hide: false,
			company: 'Atual Consultoria',
			location: 'Maringá, Paraná, Brasil',
			yearRange: {
				start: '01/2013',
				end: '11/2013',
			},
			job: 'Programador',
			description: [
				'Desenvolvimento de sistemas de PDV para frente de caixa na linguagem JAVA e sistema de controle de produção e linhas de montagem. Aprendizado em JavaFX, banco de dados MS Server e algumas bibliotecas como Hibernate e Spring.',
			],
			hashtag: '#java #javaFX #sqlServer #hibernate #spring',
		},
		{
			hide: false,
			company: 'BENNER',
			location: 'Maringá, Paraná, Brasil',
			yearRange: {
				start: '01/2015',
				end: '10/2015',
			},
			job: 'Programador Trainee',
			description: [
				'Desenvolvimento de sistemas voltado a plano de saúde usando uma integração entre as linguagens C#, Delphi, Visual Basic e C# Web.',
			],
			hashtag: '#cSharp #delphi #visualBasic #sqlServer #oracle',
		},
		{
			hide: false,
			company: 'MATERA Systems',
			location: 'Maringá, Paraná, Brasil',
			yearRange: {
				start: '10/2015',
				end: '03/2022',
			},
			job: 'Analista de Sistemas Sênior',
			description: [
				'Desenvolvimento e suporte de funcionalidades na solução MATERA Banco, voltada a instituições financeiras. Desenvolvia funcionalidades para uma aplicação WAR java 8 (que futuramente foi migrada para java 11). Auditoria de código e atuação com vários tipos de fluxo de desenvolvimento como scrum e kanban, sempre auxiliando no controle de entrada e saída de chamados, controle de qualidade, testes automáticos. Atuei também com o atendimento ao cliente e plantões para acompanhamento de atualizações de versão.',
				'Fui muito influente na solução de vários problemas de performance envolvendo o banco de dados Oracle, mudando rotinas em PL/SQL, alterando a estrutura de tabelas e índices, incentivando os clientes a realizar frequentemente processos que otimizam a performance',
			],
			hashtag:
				'#java #java8 #java11 #oracle #aws #scrum #kanban #plSQL #performance #tkprof #indices #react #springBoot',
		},
		{
			current: true,
			company: 'Instituto Eldorado de Pesquisa e Desenvolvimento',
			location: 'Maringá, Paraná, Brasil',
			yearRange: {
				start: '03/2022',
				end: `${(new Date().getMonth() + 1)
					.toString()
					.padStart(2, '0')}/${new Date().getFullYear()}`,
			},
			job: 'Analista de Sistemas Sênior',
			description: [
				'Atuo em um projeto com a HP no desenvolvimento de novas funcionalidades e correção de bugs em MFE’s desenvolvidas em React. Pesquisa e implementações de novas ferramentas para controle de logs, controle de conteúdo (imagens, traduções e arquivos adicionais de projeto) como contentstack. Fluxo de desenvolvimento scrum onde atuo no desenvolvimento, auditoria de código (code review) e auxílio na geração da build com a publicação final.',
			],
			hashtag: '#react #contentStack #npm #yarn #aws #figma #scrum',
		},
	],
	courses: [
		{
			title: 'AWS Lightsail',
			progress: 1,
		},
		{
			title: 'AWS Cloud watch',
			progress: 0.8,
		},
		{
			title: 'AWS S3',
			progress: 1,
		},
		{
			title: 'React com Typescript',
			progress: 1,
		},
		{
			title: 'Introdução ao FIGMA',
			progress: 1,
		},
	],
	projects: [
		{
			title: 'Meu Orçamento Online',
			description: 'Site para gestão de orçamentos de forma facilitada',
			tecnology: 'Java 11 + React + AWS',
			image: MOOSample,
			url: 'https://meuorcamentoonline.com.br',
		},
		{
			title: 'Grigo Training',
			description: 'Protótipo de site para gestão de treinos e dieta',
			tecnology: 'React + AWS',
			image: GrigoSample,
			url: 'https://grigotraining.com.br',
		},
		{
			title: 'GerFinWEB',
			description: 'Gerenciador financeiro pessoal',
			tecnology: 'React + Java + Mongo DB',
			image: GerFinWEBSample,
			url: 'https://grigotraining.com.br',
		},
	],
	experiences: [
		{
			name: 'AWS S3',
			version: '',
			level: 5,
		},
		{
			name: 'AWS EC2',
			version: '',
			level: 4,
		},
		{
			name: 'AWS Maintance',
			version: '',
			level: 3,
		},
		{
			name: 'AWS Cloudfront',
			version: '',
			level: 4,
		},
		{
			name: 'AWS Certificate Manager',
			version: '',
			level: 4,
		},
		{
			name: 'AWS Route 53',
			version: '',
			level: 5,
		},
		{
			name: 'AWS Load Balancer',
			version: '',
			level: 3,
		},
		{
			name: 'AWS RDS',
			version: '',
			level: 5,
		},
		{
			name: 'Java',
			version: '6',
			level: 3,
		},
		{
			name: 'Java',
			version: '7',
			level: 4,
		},
		{
			name: 'Java',
			version: '8',
			level: 5,
		},
		{
			name: 'Java',
			version: '11',
			level: 5,
		},
		{
			name: 'React',
			version: '',
			level: 4,
		},
		{
			name: 'React Test Suite',
			version: '',
			level: 4,
		},
		{
			name: 'Spring Boot',
			version: '',
			level: 5,
		},
		{
			name: 'Spring Security',
			version: '',
			level: 3,
		},
		{
			name: 'Spring JPA',
			version: '',
			level: 4,
		},
		{
			name: 'Spring Mongo DB',
			version: '',
			level: 4,
		},
		{
			name: 'Spring Thymeleaf',
			version: '',
			level: 5,
		},
		{
			name: 'Spring Batch',
			version: '',
			level: 5,
		},
		{
			name: 'Java FX',
			version: 'Java 8 ou Superior',
			level: 5,
		},
		{
			name: 'Figma',
			version: '',
			level: 3,
		},
		{
			name: 'Framer',
			version: '',
			level: 3,
		},
		{
			name: 'Jira',
			version: '',
			level: 5,
		},
		{
			name: 'Git',
			version: '',
			level: 5,
		},
		{
			name: 'Maven',
			version: '2, 3',
			level: 5,
		},
		{
			name: 'Yarn',
			version: '',
			level: 5,
		},
		{
			name: 'NPM',
			version: '',
			level: 5,
		},
		{
			name: 'Mongo DB',
			version: '',
			level: 4,
		},
		{
			name: 'MySQL',
			version: '',
			level: 5,
		},
		{
			name: 'Oracle DB',
			version: '10, 11g, 12c, 18',
			level: 5,
		},
		{
			name: 'Oracle TKPROF, Profile',
			version: '10, 11g, 12c, 18',
			level: 5,
		},
		{
			name: 'PL/SQL',
			version: '10, 11g, 12c, 18',
			level: 5,
		},
		{
			name: 'Delphi',
			version: 'XE3',
			level: 2,
		},
		{
			name: 'C#',
			version: '2018',
			level: 3,
		},
		{
			name: 'Scrum',
			version: '',
			level: 5,
		},
		{
			name: 'Kanban',
			version: '',
			level: 5,
		},
		{
			name: 'Jenkins',
			version: '',
			level: 4,
		},
		{
			name: 'Teamcity',
			version: '',
			level: 3,
		},
		{
			name: 'Nexus',
			version: '',
			level: 3,
		},
		{
			name: 'Docker',
			version: '',
			level: 4,
		},
		{
			name: 'Kubernets',
			version: '',
			level: 2,
		},
		{
			name: 'Content Stack',
			version: '',
			level: 5,
		},
		{
			name: 'Tomcat',
			version: '7, 8, 9',
			level: 5,
		},
		{
			name: 'JBoss',
			version: '5',
			level: 4,
		},
		{
			name: 'TestNG',
			version: '',
			level: 5,
		},
		{
			name: 'Junit',
			version: '',
			level: 5,
		},
		{
			name: 'Padrão de projeto',
			version: 'Strategy, Builder, Factory, Singleton',
			level: 5,
		},
	],
}

export default MyInfo
