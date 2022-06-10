import { Editor, Plugin } from 'obsidian';
import { v4 } from 'uuid';

export default class UuidPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'uuid-insert-to-file',
			name: 'Insert UUID',
			editorCallback: (editor: Editor) => {
				editor.replaceSelection(v4());
			}
		});
	}

	onunload() {

	}
}
