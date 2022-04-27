import {sum} from 'src/sum';
import {Logger} from 'tslog';
new Logger({name: 'console', overwriteConsole: true});

async function main() {
  console.info(sum(1, 2));
}

main();
