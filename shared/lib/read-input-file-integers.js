
import readInputFileLines from './read-input-file-lines.js';

export default function readInputFileIntegers({url}) {
	return readInputFileLines({url}).then(lines => {
		return lines.map(line => parseInt(line, 10));
	});
}
