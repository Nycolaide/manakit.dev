<script lang="ts">
    import { t } from '$lib/i18n';
    import Icon from '@iconify/svelte';
    import Datatable from "$lib/components/docs/datatable.svelte";
    import { Row, Col, Btn, Card, CardTitle, CardText } from "manakit";
    import {dataHomepageAdvantageManakit, dataHomepageCallToActionsAccesDocs} from "$lib/assets/data";

    const dataComparison = [
		{
			name: $t('homepage.is-best.table.integrated-style'),
			manakit: 'O',
			melt: 'X',
			attraction: 'O'
		},
		{ name: $t('homepage.is-best.table.themes'), manakit: 'O', melt: 'O', attraction: 'O' },
		{ name: $t('homepage.is-best.table.components'), manakit: 12, melt: 40, attraction: 50 },
		{ name: $t('homepage.is-best.table.support'), manakit: 'O', melt: 'O', attraction: 'X' },
		{
			name: $t('homepage.is-best.table.release') + '**',
			manakit: '1 - 2' + $t('date.week'),
			melt: '1' + $t('date.months'),
			attraction: '3' + $t('date.months')
		},
		{
			name: $t('homepage.is-best.table.no-dependences'),
			manakit: 'O',
			melt: 'X',
			attraction: 'X'
		}
	];
</script>

<a href="/docs">Access to Docs</a>

<Row>
    <Col class="col-12">
        <Btn rounded class="btn-sm mb-4">
            {$t('homepage.registry.manakit-version-is-here')}
    	    <Icon icon="maki:arrow" />
    	</Btn>
    </Col>
    <Col class="col-12 sm:col-6">
        <h1 class="md:text-3xl">
            {$t('homepage.introduction.title')}
        </h1>
        <p class="md:text-xl">
            {$t('homepage.introduction.content')}
        </p>
        <Btn href="/" class="md:btn-lg" rounded>
            <Icon icon="mdi:rocket-launch" />
            {$t('homepage.introduction.get-started')}
            <Icon icon="maki:arrow" />
        </Btn>
    	<Btn href="/" target="_blank" class="md:btn-lg" rounded>
            <Icon icon="mdi:github" />
            {$t('social.github')}
        </Btn>
    </Col>
    <Col class="col-12 sm:col-6">
        Preview
    </Col>
</Row>

<Row>
    <Col class="col-12 sm:col-8 sm:offset-2 text-center">
        <h2 class="md:text-2xl">
            {$t('homepage.introduction.title')}
        </h2>
        <div class="text-left text-lg">
            <p>
                {$t('homepage.magic.introduction')}
            </p>
             <p>
                {$t('homepage.magic.list.title')}
            </p>
			<ul class="list-manakit-is-best">
				<li>
                    {@html $t('homepage.magic.list.customizable')}
                </li>
                <li>
                    {@html $t('homepage.magic.list.vary')}
                </li>
                <li>
                    {@html $t('homepage.magic.list.svelte')}
                </li>
                <li>
                    {@html $t('homepage.magic.list.simple')}
                </li>
			</ul>
            <p>
                {@html $t('homepage.magic.content')}
            </p>
        </div>
    </Col>
</Row>

<Row>
    {#each dataHomepageAdvantageManakit as {icon, name}}
        <Col class="col-6 sm:col-4">
			<Card class="advantage-card ma-1">
				<CardText>
					<Icon {icon} />
                    {$t(`homepage.magic.card.${name}`)}
				</CardText>
			</Card>
		</Col>
    {/each}
</Row>

<Row>
    <Col class="col-12 text-center">
        <h2>
            {$t('homepage.preview.title')}
        </h2>
        <Card style="max-width: 500px; height: 320px;">Preview</Card>
        <p>
            {$t('homepage.preview.content')}
        </p>
        <Btn>
            {$t('homepage.preview.actions.see-documentation')}
        </Btn>
    </Col>
</Row>

<Row>
    <Col class="col-12 text-center">
        <h2>
            {$t('homepage.is-best.title')}
        </h2>
        <p>
            {$t('homepage.is-best.content')}
        </p>
        <Datatable data={dataComparison} />
        <p>
            **{$t('homepage.is-best.mentions-release')}
        </p>
    </Col>
</Row>

<Row>
    <Col class="col-12 text-center">
        <h2>
            {$t('homepage.starting.title')}
        </h2>
        <p>
            {$t('homepage.starting.content')}
        </p>
    </Col>
        {#each dataHomepageCallToActionsAccesDocs as { icon, id, href }}
            <Col class="col-12 sm:col-4">
                <Card {href}>
                    <CardTitle>
                        <Icon {icon} />
                        {$t(`homepage.starting.${id}.title`)}
                    </CardTitle>
                    <CardText>
                        {$t(`homepage.starting.${id}.description`)}
                    </CardText>
                </Card>
            </Col>
        {/each}
</Row>

<Row class="text-center">
    <Col class="col-12">
         <h2>
            {$t('homepage.community.title')}
        </h2>
        <p>
            {$t('homepage.community.content')}
        </p>
        <Btn rounded>
            {$t('homepage.community.join-dicsord')}
        </Btn>
    </Col>
</Row>
