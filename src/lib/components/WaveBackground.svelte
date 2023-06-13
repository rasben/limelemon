<script lang="ts">
	export let percentage;
	let pourPecentage;
	$: pourPecentage = percentage < 20 ? 20 - percentage : 1;
	let isPouring = false;

	$: {
		if (percentage > 0) {
			isPouring = true;

			setTimeout(() => {
				isPouring = false;
			}, 3000);
		}
	}
</script>

<div class="waves">
	<div class="pour {isPouring ? 'is-pouring' : ''}" />
	<div class="fill" style="transform: translateY({pourPecentage}%)">
		<svg
			class="wave-container"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 300 300"
			xml:space="preserve"
		>
			<path
				fill="#04ACFF"
				class="wave"
				d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
			/>
		</svg>
	</div>
</div>

<style>
	.waves {
		position: absolute;
		top: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		overflow: hidden;
		backface-visibility: hidden;
		transform: translate3d(0, 0, 0);
		opacity: 0.5;
	}

	.fill {
		transform: translateY(20%);
		transition: transform ease-in-out 1s;
	}

	.pour {
		position: absolute;
		left: 50%;
		border-left: 10px solid #009ae6;
		top: -200%;
		height: 200%;
	}

	.pour.is-pouring {
		top: 100%;
		transition: top 3s ease;
	}

	.wave-container {
		width: 200%;
		height: 100%;
	}

	.wave {
		animation-name: waveAction;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-duration: 0.5s;
		width: 200%;
		height: 100%;
		fill: #04acff;
	}

	@keyframes pourAction {
		0% {
			transform: translateY(-100%);
		}
		50% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-100%);
		}
	}

	@keyframes waveAction {
		0% {
			transform: translate(-150px, 0);
		}
		100% {
			transform: translate(0, 0);
		}
	}
</style>
