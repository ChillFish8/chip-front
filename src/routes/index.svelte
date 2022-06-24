<svelte:head>
    <title>Home | Chip</title>
</svelte:head>

<script lang="ts">
    import Card, {
        Content,
        Actions,
        ActionButtons,
        ActionIcons,
    } from '@smui/card';
    import Button, {Label} from '@smui/button';
    import IconButton, {Icon} from '@smui/icon-button';
    import {fly} from "svelte/transition";

    let clicked = 0;
</script>

<div in:fly={{ x: 200, duration: 200}}  class="card-container">
    <Card>
        <Content>A card with Both.</Content>
        <Actions>
            <ActionButtons>
                <Button on:click={() => clicked++}>
                    <Label>Action</Label>
                </Button>
                <Button on:click={() => clicked++}>
                    <Label>Another</Label>
                </Button>
            </ActionButtons>
            <ActionIcons>
                <IconButton
                        on:click={() => clicked++}
                        toggle
                        aria-label="Add to favorites"
                        title="Add to favorites"
                >
                    <Icon class="material-icons" on>favorite</Icon>
                    <Icon class="material-icons">favorite_border</Icon>
                </IconButton>
                <IconButton
                        class="material-icons"
                        on:click={() => clicked++}
                        title="Share">share
                </IconButton
                >
                <IconButton
                        class="material-icons"
                        on:click={() => clicked++}
                        title="More options">more_vert
                </IconButton
                >
            </ActionIcons>
        </Actions>
    </Card>
</div>

