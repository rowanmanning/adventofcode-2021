
import readInputFileLines from '../../shared/lib/read-input-file-lines.js';

export default function readInputFileCommands({url}) {
	return readInputFileLines({url}).then(lines => lines.map(parseLine));
}

function parseLine(line) {
	const [direction, units] = line.split(' ');
	return {
		direction,
		units: parseInt(units, 10)
	};
}
