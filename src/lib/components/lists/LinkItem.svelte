<script lang="ts">
    import {goto} from "$app/navigation";
    import {Graphic, Item, Text} from "@smui/list";

    export let name;
    export let icon;
    export let href;
</script>

<Item on:SMUI:action={() => goto(href, { replaceState: false })}>
    <Graphic class="material-icons">{icon}</Graphic>
    <Text>{name}</Text>
</Item>