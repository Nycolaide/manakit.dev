<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';
	import Icon from '@iconify/svelte';
	import { Btn, Card, Modal, Spacer, Toolbar } from 'manakit';
	import { getCookie, setCookie } from '$lib/assets/utils/cookies';

	$: open = false;

	onMount(() => {
		const cookie = getCookie('consent');
		if (!cookie) {
			open = true;
		} else {
			// @ts-ignore
			if (typeof gtag !== 'undefined') {
				// @ts-ignore
				gtag('consent', 'update', {
					ad_storage: cookie === 'accept' ? 'granted' : 'denied',
					analytics_storage: cookie === 'accept' ? 'granted' : 'denied',
					functionality_storage: cookie === 'accept' ? 'granted' : 'denied'
				});
			}
		}
	});

	function handleSetConsentMode(state: string) {
		setCookie('consent', state);
		// @ts-ignore
		if (typeof gtag !== 'undefined') {
			// @ts-ignore
			gtag('consent', 'update', {
				ad_storage: state === 'accept' ? 'granted' : 'denied',
				analytics_storage: state === 'accept' ? 'granted' : 'denied',
				functionality_storage: state === 'accept' ? 'granted' : 'denied'
			});
		}

		open = false;
	}
</script>

<Modal id="consent-analytics" bind:open class="modal-bottom sm:modal-center" persistent>
	<Card style="max-width: 500px">
		<div class="content">
			<Toolbar tag="div">
				<p class="title">
					<strong>
						{$t('consent.title')}
					</strong>
				</p>

				<Spacer />
				<Btn
					id="btn-consent-mode-refuse"
					text
					class="btn-sm"
					on:click={() => handleSetConsentMode('refuse')}>{$t('consent.actions.refuse')}</Btn
				>
			</Toolbar>
			<p>
				{$t('consent.content')}
			</p>
			<Toolbar tag="div" class="actions-analytics-consent">
				<Spacer />

				<Btn
					id="btn-consent-mode-accept"
					class="bg:on-background text:background"
					rounded
					on:click={() => handleSetConsentMode('accept')}
				>
					{$t('consent.actions.accept')}
					<Icon icon="ic:round-keyboard-arrow-right" />
				</Btn>
			</Toolbar>
		</div>
	</Card>
</Modal>

<style lang="scss">
	.content {
		padding: 1.5rem;

		.title {
			font-size: 1.25rem;
		}

		> p {
			margin: 1rem 0;
		}

		:global(#btn-consent-mode-accept) {
			font-size: 1.15rem;
		}
	}
</style>
