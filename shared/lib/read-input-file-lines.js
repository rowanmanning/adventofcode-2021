
import readInputFile from './read-input-file.js';
import splitStringByLineBreaks from './split-string-by-line-breaks.js';

export default function readInputFileLines({url}) {
	return readInputFile({url}).then(splitStringByLineBreaks);
}
