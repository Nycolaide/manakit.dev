<script lang="ts">
    import { t } from '$lib/i18n';
    import Icon from '@iconify/svelte';

     import { Row, Col, Btn, Card, CardTitle, CardText } from "manakit";
</script>

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
