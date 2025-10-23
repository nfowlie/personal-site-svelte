class Publisher {
	events = $state([])
	publish = (event) => {
		this.events = [...this.events, event]
	}
	clear = () => {
		this.events = []
	}
}

export const commandContent = new Publisher()
