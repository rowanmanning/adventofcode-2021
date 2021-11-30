
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {readFile} from 'fs/promises';

export default function readInputFile({url}) {
	const inputPath = `${dirname(fileURLToPath(url))}/input.txt`;
	return readFile(inputPath, 'utf-8');
}
