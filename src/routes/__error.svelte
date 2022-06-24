<script>
    import {goto} from "$app/navigation";
    import Button, {Label} from "@smui/button";
    import {Icon} from "@smui/icon-button";
</script>

<svelte:head>
    <title>Not Found | Chip</title>
</svelte:head>


<div class="flex items-center justify-center w-full h-full">
    <div class="space-y-4">
        <h3 class="text-7xl font-bold underline decoration-2 decoration-brand-orange">
            404
        </h3>
        <p class="text-2xl italic">Oops! Looks like you've got yourself lost.</p>
        <Button on:click={() => goto('/')}>
            <Icon class="material-icons">home</Icon>
            <Label>Take me home</Label>
        </Button>
    </div>
</div>