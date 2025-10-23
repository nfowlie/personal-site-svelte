import type { ICommandRune } from "$lib/interfaces/ITerminal.svelte"

class Publisher {
	events: ICommandRune[] = $state([])
	publish = (event: ICommandRune) => {
		this.events = [...this.events, event]
	}
	clear = () => {
		this.events = []
	}
}

export const commandContent = new Publisher()
