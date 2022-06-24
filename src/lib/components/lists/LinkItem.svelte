<script lang="ts">
    import {goto} from "$app/navigation";
    import {Graphic, Item, Text} from "@smui/list";

    export let color;
    export let name;
    export let icon;
    export let href;
</script>

<Item on:SMUI:action={() => goto(href, { replaceState: false })} class="transition {color}">
    <Graphic class="material-icons {color}">{icon}</Graphic>
    <Text>{name}</Text>
</Item>