const animation = {
	keyframes: {
		pop: `{
			0% {transform: scale(0.9)}
			40% {transform: scale(1.05)}
			100% {transform: scale(1)}
		}`
		// check: '{0% {background-position-y: 5px;}50% {background-position-y: -2px;}to {background-position-y: 0;}}',
		// radio: '{0% {box-shadow: 0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset;}50% {box-shadow: 0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset;}to {box-shadow: 0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset;}}'
	},
	durations: {
		pop: '.2s'
		// radio: '.2s',
	}
};

export default animation;
