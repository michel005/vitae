const MyInfo = {
	name: 'Michel Douglas Grigoli',
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
			company: 'Atual Consultoria',
			location: 'Maringá, Paraná, Brasil',
			yearRange: {
				start: '01/2013',
				end: '11/2013',
			},
			job: 'Programador',
			description: [
				<>
					<p>
						Desenvolvimento de sistemas de PDV para frente de caixa na linguagem JAVA e sistema de
						controle de produção e linhas de montagem. Aprendizado em JavaFX, banco de dados MS
						Server e algumas bibliotecas como Hibernate e Spring.
					</p>
				</>,
			],
			hashtag: '#java #javaFX #sqlServer #hibernate #spring',
		},
		{
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
			company: 'MATERA Systems',
			location: 'Maringá, Paraná, Brasil',
			yearRange: {
				start: '10/2015',
				end: '03/2022',
			},
			job: 'Analista de Sistemas Sênior',
			description: [
				<>
					<p>
						Trabalhei no ramo de sistemas para instituições financeiras no setor de regulatórios,
						onde me tornei referencia não só pelo conhecimento técnico mas também pelo conhecimento
						vasto na regra de negócio. Realizava a manutenção do sistema onde o backend utilizava
						banco de dados PL/SQL ou SQL server, aplicação Java com a suite spring, utilizando os
						módulos a seguir.
					</p>
					<ul>
						<li>
							<u>Spring Security</u>: Para autenticação e controle de acesso dos usuários. Tive que
							realizar manutenções para trocar a forma de autenticação para o{' '}
							<a href="https://www.keycloak.org/" target="_blank">
								Keycloak
							</a>
							, adaptando a troca de tokens e permissões de acesso.
						</li>
						<li>
							<u>Spring JPA</u>: Mapeamento e persistencia de tabelas. Parte mais importante no qual
							tive que realizar várias manutenções de performance e em alguns casos inclusive
							modificar totalmente a query gerada pelo JPA, por uma que usa-se um plano de execução
							especifico.
						</li>
						<li>
							<u>Spring Batch</u>: Criação de rotinas de alta performance para importação de dados
							em multi thread. Fui pioneiro na utilização desta tecnologia no time que atuei e fiz a
							otimização de vários processos single thread que demoravam horas para execultar, onde
							em alguns casos o multi thread ocazionou uma melhora de até 80%.
						</li>
						<li>
							<u>Spring Config</u>: Manutenção de configurações da aplicação, permitindo colocar
							estar configurações em um repositório como SVN ou GIT, mantendo tudo centralizado.
						</li>
					</ul>
					<p>
						Antes da utiliação de alguns modulos, passamos por uma série de treinamentos sobre como
						a suite spring funciona e os principais conceitos envolvidos.
					</p>
					<p>
						Nesta empresa também iniciei minha atuação com o React, iniciando o processo de migração
						de telas desenvolvidas em Java AWT + Web Start para frontend React, utilizando Redux,
						axiose styled components.
					</p>
					<p>
						Durante meu ultimo ano na MATERA, eu trabalhei no planejamento arquitetural desta
						migração, criando diagramas e prototipos funcionais para que fosse possível modularizar
						o produto em pequenas MFEs, onde cada MFE poderia ser adiquirida de forma individual
						pelo cliente, e não de forma unica (como já acontecia atualmente na empresa).
					</p>
					<p>
						Minha maior experiência foi com certeza aprender como o banco de dados Oracle opera por
						baixo dos panos e como realizar boas melhorias de performance com algumas das
						tecnologias a seguir:
					</p>
					<ul>
						<li>
							<u>Planos de execução</u>: Utilizando ferramentas como Profile, TKPROF, Explain Plan,
							era possível analizar a performance de tudo que era executado no banco de dados do
							cliente e saber qual era o comando que causavao o problema.
						</li>
						<li>
							<u>Estrutura de dados</u>: Aprendi quais comandos afetam mais a performance do banco
							de dados e quais estratégias posso seguir quase algum problema ocorre. Dentre dela a
							mais utilizada era o particionamento de tabelas, subistituição de id sequencial por
							UUID, ou as vezes a utilização de cache para gerar IDs sequenciais.
						</li>
						<li>
							<u>Hists e indices</u>: Utilização de hints para otimizar, forçar a utilização de
							indices e mudar a estratégia de execução da query.
						</li>
						<li>
							<u>Mission Control</u>: Utilização do mission controll para debugar e investigar erros
							relacionados a aplicação Java.
						</li>
					</ul>
					<p>Outras qualidades importantes que adiquiri nesta empresa:</p>
					<ul>
						<li>Interesse em disseminar o conhecimento entre pessoas da empresa</li>
						<li>Participação no processo seletivo para contratação de novos desenvolvedores</li>
						<li>
							Implementação de documentações diversas para APIs rest, e trexos de cõdigo que eram
							compartilhados com demais times
						</li>
						<li>
							Utilização de boas praticas de programação e discução destas boas praticas com os
							integrantes do time
						</li>
						<li>Criação e manutenção de testes unitários e E2E.</li>
					</ul>
				</>,
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
				<>
					<p>
						Atuo em um projeto com um cliente multinacional, utiliando React com Context API, axios,
						webpack, typescript, styled components entre outras demais bibliotecas.
					</p>
					<p>
						Neste projeto, lido com um time de desenvolvimento, testes (QA), design, PO e TPM, onde
						desenvolvimento e testes são constituídos de pessoas mundo a fora (EUA, China, India,
						...). Por se tratar de uma empresa de grande porte, todas as decisões devem ser
						meticulozamente estruturadas e validadas, antes de serem desenvolvidas. Isso envolve uma
						série de planejamentos, conversas com o time de design, e planejamentos de
						implementação, antes que algo seja de fato desenvolvido.
					</p>
					<p>
						A aplicação React utiliza o conceito de layout, onde existe uma MFE maior que encapsula
						MFEs menores dentro da pagina, como sidebars, header, footer e conteudo, alem de dar
						manutenção em eventos de analytics, e gestão de conteúdo (tradução, imagens e vídeos).
					</p>
					<p>
						O produto que desenvolvo hoje é traduzido para mais de 50 linguas e tem alto nível de
						compatibilidade emntre devices distintos (IOS, MAC OS, WINDOWS, CHROMEBOOK, LINUX,
						ANDROID), e opções de acessibilidade como compatibilidade com screen readers e
						orientações de leitura (RTL ou LTR).
					</p>
					<p>
						Quando eu entrei no Instituto Eldorado, o projeto estava iniciando, então ajudei muito
						na tomada de várias decisões de quais tecnologias usar, como implementar gestores de
						conteudo (Content Stack) e bibliotecas de tradução (i18).
					</p>
					<p>
						Indo mais a fundo no cõdigo, utilizo diariamente varios tipos de hook (useState,
						useContext, useMemo, ...) em conjunto com ContextAPI, que foi a forma que optamos por
						utilizar para compartilhar estado entre os componentes.
					</p>
					<p>
						Atualmente meus maior desafio é o suporte entre diferentes navegadores e sistemas
						operacionais, algo que esta sendo meu principal objeto de estudo, apesar de já saber me
						utilizar de algumas estratégias.
					</p>
					<p>
						Além de todas as minhas atuações com este projeto especifico, o Eldorado em si também
						promove alguns grupos de estudo no qual eu faço parte, como o grupo de Multi Cloud, onde
						estudamos anualmente varios conceitos de multicloud. Seguindo nessa linha, já fiz
						apresentações sobre:
					</p>
					<ul>
						<li>Utilização de multicloud para tradução com IA</li>
						<li>Multicloud + MongoDB</li>
						<li>Bibliotecas multicloud (teraform, pulumi)</li>
					</ul>
				</>,
			],
			hashtag: '#react #contentStack #npm #yarn #aws #figma #scrum',
		},
	],
}

export default MyInfo
