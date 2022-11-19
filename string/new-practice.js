const projects = [
    'Blog website',
    'Portfolio site',
    'Social Media Application',
    'E-commerce website',
    'Chat Application',
    'To Do List Application',
    'Sarvice Website',
]

const searching = 'S';
const result = [];

for (const project of projects) {
    if (project.toLowerCase().startsWith(searching.toLowerCase())) {
        result.push(project);
    }
}

console.log(result);