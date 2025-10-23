export interface ICommandRune {
	command: string
	output?: string
}

export interface ICommandList {
	// Terminal Commands
	profilefetch: string
	'-p': string
	// Help Commands
	help: string,
	'-h': string
	// Clear Commands
	c: string
	clear: string
	[key: string]: string
}
