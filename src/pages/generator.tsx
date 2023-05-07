import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Layout } from '~/layouts';

// input group wrapper
const Wrap = (props) => {
	return (
		<div className="flex flex-col space-y-5 border-2 border-dark-900 dark:border-gray-600 rounded-lg px-7 py-6 mb-6">
			{props.title ? (
				<h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-center">
					{props.title}
				</h3>
			) : null}
			{props.children}
		</div>
	);
};

// personal information
const Personal = () => {
	const placeholders = [
		{ name: 'Полное имя' },
		{ name: 'Должность' },
		{ name: 'Номер телефона' },
		{ name: 'Адрес электронной почты' },
		{ name: 'Адрес проживания' },
		{ name: 'Github имя пользователя' },
	];
	const listPLaceholders = placeholders.map((placeholder) => (
		<input
			type="text"
			className="w-full py-2 px-3 mb-4 rounded-md"
			placeholder={placeholder.name}
		/>
	));
	return (
		<Wrap title="Личные данные">
			<div className="w-full">{listPLaceholders}</div>
		</Wrap>
	);
};

const About = () => {
	const placeholder =
		'Я Frontend Web Developer и энтузиаст открытого кода и Linux.\
    Я использую Gnu / Artix Linux и поддерживаю несколько проектов с открытым исходным кодом на Github.\
    Я с нетерпением жду возможности получить должность младшего фронтенд веб-разработчика в известной корпорации / стартапе\
    и создавать удобные и отзывчивые интерфейсы с помощью Reactjs.';
	return (
		<Wrap title="О себе">
			<div className="w-full">
				<textarea
					rows="6"
					className="w-full py-2 px-3 mb-4 rounded-md"
					placeholder={placeholder}
				/>
			</div>
		</Wrap>
	);
};

const Education = () => {
	const [educations, setEducations] = useState([
		{ institution: '', qualification: '', time: '' },
	]);
	function handleDeleteEducation(index) {
		setEducations((prevEducations) => prevEducations.slice(index, -1));
	}
	const ListEducations = educations.map((education, index) => (
		<div className="w-full flex items-center space-x-3">
      <span className="text-center">{index+1}</span>
			<input
				type="text"
				className="w-full py-2 px-3 rounded-md"
				value={education.institution}
				placeholder="Учреждение"
			/>
			<input
				type="text"
				className="w-full py-2 px-3 rounded-md"
				value={education.qualification}
				placeholder="Квалификация"
			/>
			<input
				type="text"
				className="w-full py-2 px-3 rounded-md"
				value={education.time}
				placeholder="Время"
			/>
			{educations.length > 1 && (
				<div
					className="flex justify-center items-center text-2xl text-red-400 hover:text-red-600 cursor-pointer"
					title="удалить элемент"
					onClick={(index) => handleDeleteEducation(index)}>
					<Icon icon="feather:trash-2" />
				</div>
			)}
		</div>
	));
	return (
		<Wrap title="Образование">
			{ListEducations}
			<div>
				<button
					className="flex items-center justify-center mx-auto border-2 border-gray-600 hover:border-gray-300 px-4 py-2 rounded-lg"
					onClick={() => {
						setEducations([
							...educations,
							{ institution: '', qualification: '', time: '' },
						]);
					}}>
					<Icon className="mr-2 text-xl" icon="feather:plus-square" />
					<span className="select-none">Добавить образование</span>
				</button>
			</div>
		</Wrap>
	);
};

const WorkExperience = () => {
	const [works, setWorks] = useState([
		{ company: '', position: '', time: '' },
	]);

	const handleDeleteWork = (index) => {
		setWorks((prevWorks) => prevWorks.slice(index, -1));
	};

	const handleAddWork = () => {
		setWorks([...works, { company: '', position: '', time: '' }]);
	};

	const handleInputChange = (index, field, e) => {
		const newWorks = [...works];
		newWorks[index][field] = e.target.value;
		setWorks(newWorks);
	};

	const listWorks = works.map((work, index) => (
		<div className="w-full flex items-center space-x-3" key={index}>
      <span className="text-center ">{index+1}</span>
			<input
				type="text"
				className="w-full py-2 px-3 rounded-md"
				value={work.company}
				placeholder="Компания"
				onChange={(e) => handleInputChange(index, 'company', e)}
			/>
			<input
				type="text"
				className="w-full py-2 px-3"
				value={work.position}
				placeholder="Должность"
				onChange={(e) => handleInputChange(index, 'position', e)}
			/>
			<input
				type="text"
				className="w-full py-2 px-3"
				value={work.time}
				placeholder="Время"
				onChange={(e) => handleInputChange(index, 'time', e)}
			/>
			{works.length > 1 && (
				<div
					className="flex justify-center items-center text-2xl text-red-400 hover:text-red-600 cursor-pointer"
					title="удалить элемент"
					onClick={(index) => handleDeleteWork(index)}>
					<Icon icon="feather:trash-2" />
				</div>
			)}
		</div>
	));

	return (
		<Wrap title="Опыт работы">
			{listWorks}
			<div>
				<button
					className="flex items-center justify-center mx-auto border-2 border-gray-600 hover:border-gray-300 px-4 py-2 rounded-lg"
					onClick={handleAddWork}>
					<Icon className="mr-2 text-xl" icon="feather:plus-square" />
					<span className="select-none">Добавить элемент</span>
				</button>
			</div>
		</Wrap>
	);
};

const Skills = () => {
	const [skills, setSkills] = useState(['']);

	const handleDeleteSkill = (index) => {
		setSkills((prevSkils) => prevSkils.slice(index, -1));
	};

	const handleAddSkill = () => {
		setSkills([...skills, '']);
	};

	const handleInputChange = (index, e) => {
		const newSkills = [...skills];
		newSkills[index] = e.target.value;
		setSkills(newSkills);
	};

	const listSkills = skills.map((skill, index) => (
		<div className="w-full flex items-center space-x-3" key={index}>
      <span className="text-center ">{index+1}</span>
			<input
				type="text"
				className="w-full py-2 px-3 rounded-md"
				value={skill}
				placeholder="Навык"
				onChange={(e) => handleInputChange(index, e)}
			/>
			{skills.length > 1 && (
				<div
					className="flex justify-center items-center text-2xl text-red-400 hover:text-red-600 cursor-pointer"
					title="удалить элемент"
					onClick={(index) => handleDeleteSkill(index)}>
					<Icon icon="feather:trash-2" />
				</div>
			)}
		</div>
	));

	return (
		<Wrap title="Навыки">
			{listSkills}
			<button
				className="flex items-center justify-center mx-auto border-2 border-gray-600 hover:border-gray-300 px-4 py-2 rounded-lg"
				onClick={handleAddSkill}>
				<Icon className="mr-2 text-xl" icon="feather:plus-square" />
				<span className="select-none">Добавить элемент</span>
			</button>
		</Wrap>
	);
};


const Interests = () => {
	const [interests, setInterests] = useState(['']);

	const handleDeleteInterest = (index) => {
		setInterests((prevInterests) => prevInterests.slice(index, -1));
	};

	const handleAddInterest = () => {
		setInterests([...interests, '']);
	};

	const handleInputChange = (index, e) => {
		const newInterests = [...interests];
		newInterests[index] = e.target.value;
		setInterests(newInterests);
	};

	const listInterests = interests.map((interest, index) => (
		<div className="w-full flex items-center space-x-3" key={index}>
      <span className="text-center ">{index+1}</span>
			<input
				type="text"
				className="w-full py-2 px-3 rounded-md"
				value={interest}
				placeholder="Интерес"
				onChange={(e) => handleInputChange(index, e)}
			/>
			{interests.length > 1 && (
				<div
					className="flex justify-center items-center text-2xl text-red-400 hover:text-red-600 cursor-pointer"
					title="удалить элемент"
					onClick={(index) => handleDeleteInterest(index)}>
					<Icon icon="feather:trash-2" />
				</div>
			)}
		</div>
	));

	return (
		<Wrap title="Интересы">
			{listInterests}
			<button
				className="flex items-center justify-center mx-auto border-2 border-gray-600 hover:border-gray-300 px-4 py-2 rounded-lg"
				onClick={handleAddInterest}>
				<Icon className="mr-2 text-xl" icon="feather:plus-square" />
				<span className="select-none">Добавить элемент</span>
			</button>
		</Wrap>
	);
};


const Projects  = () => {
	const [projects, setProjects] = useState([
		{ name: '', description: '', languages: '' },
	]);

	const handleDeleteProject = (index) => {
		setProjects((prevProject) => prevProject.slice(index, -1));
	};

	const handleAddProject = () => {
		setProjects([...projects, { company: '', position: '', time: '' }]);
	};

	const handleInputChange = (index, field, e) => {
		const newProjects = [...projects];
		newProjects[index][field] = e.target.value;
		setProjects(newProjects);
	};

	const listProjects = projects.map((project, index) => (
		<div className="w-full flex items-center space-x-3" key={index}>
      <span className="text-center ">{index+1}</span>
			<input
				type="text"
				className="w-full py-2 px-3 rounded-md"
				value={project.name}
				placeholder="Компания"
				onChange={(e) => handleInputChange(index, 'company', e)}
			/>
			<input
				type="text"
				className="w-full py-2 px-3 rounded-md"
				value={project.description}
				placeholder="Должность"
				onChange={(e) => handleInputChange(index, 'position', e)}
			/>
			<input
				type="text"
				className="w-full py-2 px-3 rounded-md"
				value={project.languages}
				placeholder="Время"
				onChange={(e) => handleInputChange(index, 'time', e)}
			/>
			{projects.length > 1 && (
				<div
					className="flex justify-center items-center text-2xl text-red-400 hover:text-red-600 cursor-pointer"
					title="удалить элемент"
					onClick={(index) => handleDeleteProject(index)}>
					<Icon icon="feather:trash-2" />
				</div>
			)}
		</div>
	));

	return (
		<Wrap title="Проекты">
			{listProjects}
			<div>
				<button
					className="flex items-center justify-center mx-auto border-2 border-gray-600 hover:border-gray-300 px-4 py-2 rounded-lg"
					onClick={handleAddProject}>
					<Icon className="mr-2 text-xl" icon="feather:plus-square" />
					<span className="select-none">Добавить элемент</span>
				</button>
			</div>
		</Wrap>
	);
};


export default function Home() {
	return (
		<Layout.Basic>
			<main className="min-h-screen w-full justify-center py-6 sm:py-16">
				<div className="w-full max-w-4xl mx-3 sm:mx-auto">
					<Personal />

					<About />

					<Education />

					<WorkExperience />

					<Skills />

          <Interests />

          <Projects />
				</div>
			</main>
		</Layout.Basic>
	);
}
